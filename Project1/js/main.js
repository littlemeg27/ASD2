//Brenna Pavlinchak
//CRUD Project
//ASD 1303

		$('#home').on('pageinit', function()
		{
		
   			    var item = localStorage.getItem(key);
			   
			   	if(localStorage.length === 0) 
			   	
			   	{	item = "No reservations saved";	}
			   			
			   	else
			   	{	
				   	item = "There are reservations saved";
				   	$('.storeItem').text(item);
				   	location.reload();
			   	}
			   	
			    $.mobile.changePage( "#home", 
			    {transition: "pop"});

		});
		
		$('#addItem').on('pageinit', function()
		{
			
			
			var getItem = function()
			{
				json = JSON.parse(reservation);		
				
				$.each(reservation, function(key)
				{
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
	