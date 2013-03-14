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
				json = JSON.parse(reservation);		
				
				$.each(reservation, function(key)
				{
					alert("Im inside getData");
					console.log(key, reservation[key]);
				});
			};
		
			$('#saveData').on('click', function()
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
		   
		   
		});
		
		$('#showDataPage').on('pageinit', function(key)//Since once i init into the page this shoud run, should i change it? 
														//Should i make it have a changepage and then change to this page?
		{
			 var item = localStorage.getItem(key);
			   
			   	if(localStorage.length === 0) 
			   	
			   	{	item = "No reservations saved";	//Same with this
			   		alert("No reservations saved!");
				   	//Going to put a call to the json here, jenn said this would be able to work for assignment?
			   	}
			   			
			   	else
			   	{	
				   	item = "There are reservations saved"; //What does this do? It was in the example but i still dont understand
				   	alert("There are reservations saved!");
				   	$('.storeItem').text(item);
				   	location.reload();
			   	}
			 
		});
		
		
		