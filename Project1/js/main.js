//Brenna Pavlinchak
//CRUD Project
//ASD 1303

		$('#home').on('pageinit', function()
		{
			
		});
		
		$('#addItem').on('pageinit', function()
		{
			
			
			var getData = function()
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
		   	
		   	
		   	$('#displayData').on('click', function()
		   	{
			   $.mobile.changepage('#showDataPage');
			   
			   var item = localStorage.getData(key);
			   
			   	if(item = null)
			   		item = "No reservations saved";
			   			
			   	else(item.length == 0)
			   	{	
			   		alert("Im inside saveData");
				   	item = "No reservations saved"
				   	$('.storeItem').text(item);
				   	location.reload();
			   	}
		   	});
			
			
					
			
		});
		
		$('#showDataPage').on('click', function()
		{
			
		});
		
		
		