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
                                            console.log(lastName);
                                            console.log(numberOfPeople);
                                            console.log(phoneNumber);
                                            console.log(restaurant);
                                            
                                            $('#reservationList').append(
                                            $("<ul>" + '<p>' + lastName[0] + " " + lastName[1] + '</p>' + "</ul>"));

                                            
                                          
                                                                                                      
                                        });
                                        //$('#reservationList').listview('refresh');
                
                                    }               
                            });
                            
                });



















