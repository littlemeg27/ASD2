//Brenna Pavlinchak
//Cloudant Project
//ASD 1303

               $('#home').on('pageinit', function()
                {
                            $.ajax(
                            {    
                                    "url": "_view/reservation", //What i am getting 
                                    "dataType": "json", //Getting JSON data, located in data.json   
                                    "success": function(data) //Going to use dataCall for the name to call my data
                                     {  
                                        $.each(data.rows, function(index, value)
                                        {
                                            console.log(value);
                                            var lastName         = value.value.lastName;
                                            var numberOfPeople   = value.value.numberOfPeople;
                                            var phoneNumber      = value.value.phoneNumber;
                                            var restaurant       = value.value.restaurant;
                                            
                                            $('#reservationList').append(
                                            $("<ul>" + '<p>' + value.lastName[0] + " " + value.lastName[1] + '</p>' + "</ul>"));

                                            
                                          
                                                                                                      
                                        });
                                        //$('#reservationList').listview('refresh');
                
                                    }               
                            });
                            
                });



















