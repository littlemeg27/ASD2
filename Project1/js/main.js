//Brenna Pavlinchak
//CRUD Project
//ASD 1303

        var operation = "add"; //Trying something new i found hope this works!
        var key = -1; //Index

        $('#home').on('pageinit', function(data)
        {

                        
        });
       
       
        
        $('#addItem').on('pageinit', function()
        {
            $(function()
            {
                var reservation = localStorage.getItem("reservation");//Retrieve the stored data
                
                reservation = JSON.parse(reservation); //Converts string to object
                
                if(reservation === null) //If there is no data, initialize an empty array
                { reservation = [];}
            });
                            
            var myForm = $('#waitForm');
            var errorFormLink = $('#errorFormLink');
            
            myForm.validate(
            {
                    invalidHandler: function(form, validator) 
                    {
                        errorFormLink.click();
                        var html = '';
                        
                        for(var key in validator.submitted)
                        {
                            var label = $('[for^="'+ key +'"]');
                            var legend = label.closest('fieldset').find('.ui-controlgroup-label');
                            var fieldName = legend.length ? legend.text() : label.text();
                            html += '<li>'+fieldName+'</li>';
                        }
                        
                        $("#errorFormPage ul").html(html);
                    },
                    
                    submitHandler: function() 
                    {
                        var data = myForm.serializeArray();
                        storeData(data);
                    }
            });

        
            var storeData = function(reservation)
            {   
                var item = JSON.stringify(
                {
                    lastName         : $("#lastName").val(),
                    phoneNumber     : $("#phoneNumber").val(),
                    restaurant        : $("#restaurant").val(),
                    numberOfPeople  : $("#numberOfPeople").val() 
                });
                  
                reservation.push(item);
                localStorage.setItem("reservation", JSON.stringify(reservation));
                alert("The reservation was saved!");
                return true;
            };
                
                 
               
               $('#deleteData').on('click', function(key, reservation) 
               {         
                   reservation.splice(key, 1);
                   localStorage.setItem("reservation", JSON.stringify(reservation));
                   alert("Reservation was deleted");
               });
           
               
        });
        
        
        
        $('#dataPage').on('pageinit', function(reservation, item)
        {
        
            var displayData = function(reservation,item)
            {
               
                   if(localStorage.length === 0) 
                   {    
                       alert("No reservations saved!");
                       
                                $.ajax(
                                {    
                                        url: "data.json", //What i am getting
                                        type: "GET", //I am getting not posting 
                                        dataType : "json", //Getting JSON data, located in data.json   
                                        success:function(result); //Going to use dataCall for the name to call my data
                                        {
                                                console.log("This is my JSON Data", result); 
                                                for(var i in result)
                                                {
                                                      id = Math.floor(Math.random()*100000001);
                                                      localStorage.setItem(id, JSON.stringify(result[i]));
                                                }
                                               
                                                   /* for(var i=0, len=result.reservation.length; i<len; i++)//for loop to read the whole json
                                                    {
                                                        var item = result.reservation[i];
                                                       
                                                        $('' +  
                                                                   '<li>' +
                                                                    '<h3>' + item.lastName[1] + '<br>' + '</h3>'+ 
                                                                    '<p>' + item.phoneNumber[1] + '</p>'+
                                                                '</li>' 
                                                         ).appendTo("#dataPage");
                                                    }
                                                    $('#dataPage').listview();*/
                                        }
                               });
                        };
                   };

                           
                   for(var i=0, len=localStorage.length; i<len; i++)
                   {    
                          $('#dataPage').empty();
                          $("#reservationList").html(
                            
                            "<thead>" +
                            "<tr>" +
                            "<th></th>" +
                            "<th>Last Name</th>" + 
                            "<th>Phone Number</th>" +
                            "<th>Restaurant</th>" +
                            "<th>Number Of People</th>" +
                            "</tr>" +
                            "</thead>" +
                            "<tbody>" +
                            "</tbody>"
                            
                            );
                            
                            for(var i in reservation)
                            {
                                var res = JSON.parse(reservation[i]);
                                $("#reservationList tbody").append(
                                     
                                     "<tr>" +
                                     "<td><a href='#' key='" + res.id + "' class='editItem'></a>" + "<a href='#' key='" + res.id + "' class='deleteItem'></a></td>" + "<td>" + res.lastName[1] + "</td>" + "<td>" + res.phoneNumber[1] + "</td>" +
                                     "<td>" + res.restaurant[1] + "</td>" +
                                     "<td>" + res.numberOfPeople[1] + "</td>" +
                                     "</tr>"
                                  );
                            }
                    
                    }
           };
                   
                    $("#form").on("submit",function(add, edit){
                        if(operation == "add")
                        { return add(); }
                        
                        else
                        { return edit(); }    
                    });
                   
                   
                  $(".editItem").on('click',function()
                   {
                        operation = "edit";
                        
                        key = parseInt($(this).attr("alt").replace("Edit", ""), 10);
                        
                        var res = JSON.parse(reservation[key]);
                        
                        $("#txtLastName").val(res.lastName);
                        $("#txtPhoneNumber").val(res.phoneNumber);
                        $("#txtRestaurant").val(res.restaurant);
                        $("#txtNumberOfPeople").val(res.numberOfPeople);
                        $("#txtLastName").attr("readonly","readonly");
                        $("#txtPhoneNumber").focus();
                   });


                   $(".deleteItem").on('click', function()
                   {   
                        key = parseInt($(this).attr("alt").replace("Delete", ""), 10);
                        deleteData();
                        displayData();
                   });
 
             
        }); //End of dataPage
