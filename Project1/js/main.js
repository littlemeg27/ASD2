//Brenna Pavlinchak
//CRUD Project
//ASD 1303

        var operation = "add"; //Trying something new i found hope this works!
        var key = -1; //Index
        var reservations = [];
 

        $('#home').on('pageinit', function(data)
        {

                        
        });
       
        
        $('#addItem').on('pageinit', function()
        {
                
           localStorage.getItem("reservations");//Retrieve the stored data
           reservations = JSON.parse(reservations); //Converts string to object
               
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

        
            var storeData = function(reservations)
            {   
                var item = JSON.stringify(
                {
                    lastName         : $("#lastName").val(),
                    phoneNumber     : $("#phoneNumber").val(),
                    restaurant        : $("#restaurant").val(),
                    numberOfPeople  : $("#numberOfPeople").val() 
                });
                  
                reservations.push(item);
                localStorage.setItem("reservations", JSON.stringify(reservations));
                alert("The reservation was saved!");
                return true;
            };
                
                 
               
              var deleteData = $('#deleteData').on('click', function(key, reservations) 
               {         
                   localStorage.removeItem(key);
                   localStorage.setItem("reservations", JSON.stringify(reservations));
                   alert("The reservations were deleted");
               });
           
               
        });
        
        
        
        $('#dataPage').on('pageinit', function()
        {
        
            $('#displayData').on('click', function()
            {
                   if(localStorage.length === 0) 
                       {    
                           alert("No reservations saved!");
                           autoFillData();
                       }
                       
                   else
                   {
                            for(var i=0, len=localStorage.length; i<len; i++)
                            {    
                     
                                  $('#reservationList').empty();
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
        
                                    for(i in reservations)
                                    {
                                        var res = JSON.parse(reservations[i]);
                                        console.log('reservations', reservations[i]);
                                        $("#reservationList tbody").append(
                                             
                                             "<tr>" +
                                             "<td><a href='#' key='" + res.id + "' class='editItem'></a>" + "<a href='#' key='" + res.id + "' class='deleteItem'></a></td>" + "<td>" + res.lastName[1] + "</td>" + "<td>" + res.phoneNumber[1] + "</td>" +
                                             "<td>" + res.restaurant[1] + "</td>" +
                                             "<td>" + res.numberOfPeople[1] + "</td>" +
                                             "</tr>"
                                         );
                                    }
                        
                            }

                   }
                  
                 
                 var autoFillData = function()
                 {
                     $.ajax(
                     {    
                         url: "/xhr/data.json", //What i am getting
                         type: "GET", //I am getting not posting 
                         dataType : "json", //Getting JSON data, located in data.json   
                         success:function(data) //Going to use dataCall for the name to call my data
                         {
                             console.log("This is my JSON Data", result); 
                             for(var i in result)
                             {
                                   var id = Math.floor(Math.random()*100000001);
                                   localStorage.setItem(id, JSON.stringify(result[i]));
                             }
                         }
                     });
                  };
                  
                  
              });
             
         

                           
                                     
                    $("#form").on("submit",function(add, edit){
                        if(operation == "add")
                        { return add(); }
                        
                        else
                        { return edit(); }    
                    });
                   
                   
                  $(".editItem").on('click', function(reservations)
                   {
                        operation = "edit";
                        
                        key = parseInt($(this).attr("alt").replace("Edit", ""), 10);
                        
                        var res = JSON.parse(reservations[key]);
                        
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
                   }); //End of dataPage
                   
                   
                   });





