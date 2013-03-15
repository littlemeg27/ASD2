//Brenna Pavlinchak
//CRUD Project
//ASD 1303

        $('#home').on('pageinit', function()
        {
            
        });
        
        $('#addItem').on('pageinit', function()
        {
            
            
            var getItem = function(item, key)
            {
                var reservation;
                reservation = JSON.parse(item);        
                
                $.each(reservation, function(key)
                {
                    alert("Im inside getData");
                    console.log(key, reservation[key]);
                });
            };
        
            $('#saveData').on('click', function(item)
            {
                var key;
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
                
               });
               
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
                   }
                           
                   else
                   {    
                       alert("There are reservations saved!");
                       $('.storeItem').text(item);
                       location.reload();
                   }
                   
                   
                  $('#editItem').on('click',function(item, key, reservation)
                   {
                       reservation[key] = JSON.stringify(
                       {
                        "Last Name": $("#lastName").val(),
                        "Phone Number": $("#phoneNumber").val(),
                        "Restaurant": $("#restaurant").val(),   
                        "Number Of People": $("#numberOfPeople").val()
                       });//Alter the selected item on the table
                    
                        localStorage.setItem(reservation, JSON.stringify(item)); 
                        alert("The data was edited.");
                        return true;
                   });



             
        }); //End of dataPage
        
        
        