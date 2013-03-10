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
				   	item = "No reservations saved"
				   	$('.storeItem').text(item);
			   	}
		   	});
			
			
					
			
		});
		
		$('#showDataPage').on('click', function()
		{
			
		});
		
		
		/*
		
		Other things:
		
		$('makeItemLinks')
		{
		
		//When the json loads make each item hold item links each
		$('json').attr? //This might work? whole point is i want it to have links
		//Delete and Edit Item links
		//Could be something to do with the .attr 
		});
		
		$('#deleteItem').on('click', function()
		{
		//code to delete item
		}
		
		$('#editItem').on('click', function()
		{
		//code to edit item
		}
		
		//Not sure if i have to do any of the above things, but you said it was supposed to be the CRUD 
		//So I figured i would have to do this.
		*/
			
		
		