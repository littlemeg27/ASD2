//Brenna Pavlinchak
//CRUD Project
//ASD 1303

        $('#home').on('pageinit', function()
        {
	        		var callJSON = function()
	                {
	                console.log($("#loadJSON"));
	                
	                        $('#dataPage').empty();
	                        $.ajax(
	                        {    
	                                url: "_view/reservation", //What i am getting
	                                type: "GET", //I am getting not posting 
	                                dataType : "json", //Getting JSON data, located in data.json   
	                                success:function(result) //Going to use dataCall for the name to call my data
	                                {
	                                    $.each(data.rows, function(index, reservation)
	                                    {
		                                    var lastName 		= reservation.value.lastName;
		                                    var phoneNumber	    = reservation.value.phoneNumber;
		                                    var restaurant  	= reservation.value.restaurant;
		                                    var numberOfPeople  = reservation.value.numberOfPeople;
		                                    
		                                    $("reservationList").append(
		                                    $('<li>').append(
		                                    $('<a>').attr("href", "#").text(restaurant)
		                                    )
	                                    });                              
	                                }
	                       
	                       });
	                       $('#reservationList').listview('refresh');
	            
	                };
	            
	              

            
        });
        
        $('#addItem').on('pageinit', function()
        {
            
            
            var getItem = function(item, key)
            {
                var reservation;
                reservation = JSON.parse(item);        
                
                $.each(reservation, function(key)
                {
                    console.log(key, reservation[key]);
                });
            };
            
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

        
            var storeData = function(item, key)
            {
                var id;
                
                if(!key)
                {
                    id = Math.floor(Math.random()*1000001);    
                }
                
                else
                {
                    id = key;
                }
                    
                    
                item                  = {};
                item.lastName         =["Last Name:", $("#lastName").val()];
                item.phoneNumber      =["Phone Number:", $("#phoneNumber").val()];
                item.restaurant       =["Restaurant:", $("#restaurant").val()];    
                item.numberOfPeople   =["Number Of People:", $("#numberOfPeople").val()];  
                  
                localStorage.setItem(id, JSON.stringify(item)); 
                alert("Reservation Saved!");
                
                $.mobile.changePage("#dataPage");
               };
               
               $('#deleteData').on('click', function(item,key,reservation)
               {
                       var id;
                       
                   $.each(reservation, function(key)
                   {
                       reservation.splice(0, 20);
                       localStorage.setItem(id, JSON.stringify(item)); 
                       alert("All reservations deleted!");
                   });
                   
               });
           
               
        });
        
        $('#dataPage').on('pageinit', function(item, key)//Since once i init into the page this should run, should i change it? 
                                                        //Should i make it have a changepage and then change to this page?
        {
              item = localStorage.getItem(key);
               
                   if(localStorage.length === 0) 
                   {    
                       alert("No reservations saved!");
                       //Going to put a call to the json here, jenn said this would be able to work for assignment?
                       //function callJSON(); //Cant figure out the right call for this.
                   }
                           
                   else
                   {    
                       alert("There are reservations saved!");
                       $('.storeItem').text(item);
                   }
                   
                   
                  $('#editItem').on('click',function(item, key, reservation)
                   {
                       reservation[key] = JSON.stringify(
                       {
                        
                        lastName : $("#lastName").val(),
                        phoneNumber : $("#phoneNumber").val(),
                        restaurant : $("#restaurant").val(),
                        numberOfPeople : $("#numberOfPeople").val()
                       });//Alter the selected item on the table
                    
                        localStorage.setItem(reservation, JSON.stringify(item)); 
                        alert("The reservation was edited!");
                        return true;
                   });


                   $('#deleteData').on('click', function(item,key,reservation)
                   {
                       var id;
                       
                       $.each(reservation, function(key)
                       {
                           reservation.splice(key, 0);
                           localStorage.setItem(id, JSON.stringify(item)); 
                           alert("Reservation deleted!");
                       });
                       
                       $.mobile.changePage("#dataPage");
                   
                   });


             
        }); //End of dataPage
           
               var callJSON = function()
                {
                console.log($("#loadJSON"));
                
                        $('#dataPage').empty();
                        $.ajax(
                        {    
                                url: "xhr/data.json", //What i am getting
                                type: "GET", //I am getting not posting 
                                dataType : "json", //Getting JSON data, located in data.json   
                                success:function(result) //Going to use dataCall for the name to call my data
                                {
                                    
                                        console.log("This is my JSON Data", result); 
                                       
                                            
                                            for(var i=0, len=result.reservation.length; i<len; i++)//for loop to read the whole json
                                            {
                                                var item = result.reservation[i];
                                               
                                                
                                                $('' +  
                                                           '<li>' +
                                                            '<h3>' + item.lastName[1] + '<br>' + '</h3>'+ 
                                                            '<p>' + item.phoneNumber[1] + '</p>'+
                                                        '</li>' 
                                                 ).appendTo("#dataPage");
                                            }
                                            $('#dataPage').listview();
                                
                                }
                       
                       });
            
                };






