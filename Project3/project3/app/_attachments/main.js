//Brenna Pavlinchak
//Cloudant Project
//ASD 1303

               $('#home').on('pageinit', function()
                {
                            $.ajax(
                            {    
                                    url: "_view/reservation", //What i am getting 
                                    dataType: "json", //Getting JSON data, located in data.json   
                                    success: function(data) //Going to use dataCall for the name to call my data
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
                                            		.text(restaurant)
                                            				)
                                            							);
                                                    
                                        });
                                        $('#reservationList').listview('refresh');
                
                                    }               
                            });
                            
                });



















