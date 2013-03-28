//Brenna Pavlinchak
//Cloudant Project
//ASD 1303

               $('#home').on('pageinit', function()
                {
            	   $.couch.db("project4").view("plugin/programs",
            		 success:function(data)
            		 {
            		 
	                       $.each(data.rows, function(index, reservation)
	                       {
	                          var lastName         = reservation.value.lastName;
	                          var numberOfPeople   = reservation.value.numberOfPeople;
	                          var phoneNumber      = reservation.value.phoneNumber;
	                          var restaurant       = reservation.value.restaurant;
	                                            
	                          $('#reservationList').append(
	                          $('<li>').append(
	                          $('<a>').attr("href", "#")
	                                  .text(lastName)
	                                          )
	                                            		  );
	                                                    
	                       });
	                       $('#reservationList').listview('refresh');
	                
	                  }               
                });
                            
             



















