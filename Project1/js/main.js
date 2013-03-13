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
                  
                localStorage.setItem(id, JSON.stringify(item)); //Save data in not local storage: Use Stringify to convert our object to a string.
                alert("Reservation Saved!");
		   	});
		   	
		   	
		   	$('#displayData').on('click', function(key)
		   	{
   			    var item = localStorage.getItem(key);
			   
			   	if(item.length === 0) //Item is right, thought maybe it wasnt because the json isnt called item but i set item
			   						//on the line above, and i know its saving so it shouldnt be a null value because it has value. 
			   						//Because the saveData is saving with a key.
			   	{	item = "No reservations saved";	}
			   			
			   	else
			   	{	
			   		alert("Im inside displayData");
				   	item = "No reservations saved";
				   	$('.storeItem').text(item);
				   	location.reload();
			   	}
			   	
			    $.mobile.changepage('#showDataPage');

		   	});
			
			
					
			
		});
		
		$('#showDataPage').on('click', function()
		{
			
		});
		
		
		