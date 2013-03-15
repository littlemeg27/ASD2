//Brenna Pavlinchak
//CRUD Project
//ASD 1303

		$('#home').on('pageinit', function()
		{
			
		});
		
		$('#addItem').on('pageinit', function()
		{
			
			
			var getItem = function()
			{
				json = JSON.parse(item);		
				
				$.each(reservation, function(key)
				{
					alert("Im inside getData");
					console.log(key, reservation[key]);
				});
			};
		
			$('#saveData').on('click', function(item,key)
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
	                
	                
		    var item                  = {};
                item.lastName         =["Last Name:", $("#lastName").val()];
                item.phoneNumber      =["Phone Number:", $("#phoneNumber").val()];
                item.restaurant       =["Restaurant:", $("#restaurant").val()];    
                item.numberOfPeople   =["Number Of People:", $("#numberOfPeople").val()];  
                  
                localStorage.setItem(id, JSON.stringify(item)); 
                alert("Reservation Saved!");
                
           	});
           	
           	$('#deleteData').on('click', function(item,key)
           	{
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
			 var item = localStorage.getItem(key);
			   
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
			   	
			   	
			 /* 	$('#editItem').on('click',function(item, key)
			   	{
			   	    reservation[selected_index] = JSON.stringify(
			   	    {
			   	    var item                  = {};
				   	    item.lastName         =["Last Name:", $("#lastName").val()];
		                item.phoneNumber      =["Phone Number:", $("#phoneNumber").val()];
		                item.restaurant       =["Restaurant:", $("#restaurant").val()];    
		                item.numberOfPeople   =["Number Of People:", $("#numberOfPeople").val()];  

			        });//Alter the selected item on the table
			        
					    localStorage.setItem(id, JSON.stringify(item)); 
					    alert("The data was edited.")
					    operation = "A"; //Return to default value
					    return true;
			    });*/



			 
		}); //End of dataPage
		
		
		