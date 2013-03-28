//Brenna Pavlinchak
//Cloudant Project
//ASD 1303

               $('#home').on('pageinit', function()
                {
            	   $.couch.db("project4").view("design/app",
            		 success:function(data)
            		 {
            		 
	                       $.each(data.rows, function(index, reservations)
	                       {
	                          var lastName         = reservations.value.lastName;
	                          var numberOfPeople   = reservations.value.numberOfPeople;
	                          var phoneNumber      = reservations.value.phoneNumber;
	                          var restaurant       = reservations.value.restaurant;
	                                            
	                          $('#reservationList').append(
	                          $('<li>').append(
	                          $('<a>').attr("href", "reservations.html?reservations
	                                  .text(lastName)
	                                          )
	                                            		  );
	                                                    
	                       });
	                       $('#reservationList').listview('refresh');
	                
	                  }               
                });
                            
             



















