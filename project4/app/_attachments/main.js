//Brenna Pavlinchak
//CouchDB Plugin Project
//ASD 1303

               $('#home').on('pageinit', function()
                {
                   $('#press').on('click', function()
                   {
                   
                   console.log(error);
                   console.log(parseerror);
                   $.couch.db("project4").view("app/reservation",
                   {
                         success:function(data)
                         {
                             console.log(data); //This works
                             $('#reservationList').empty();  
                             $.each(data.rows, function(index, value)
                               {
                                  var item = (value.value || value.doc);                                                    
                                  $('#reservationList').append(
                                  $('<li>').append(
                                  $('<a>').attr("href", "lastName.html?lastName=" + item.lastName)
                                          .text(item.lastName)
                                                  )
                                                              );                                                            
                               });
                               $('#reservationList').listview('refresh');
                         }
                         });
                         error: function(error, parseerror)
                         {
                         
                         }
                     });
                   });
                });
               
                   var urlVars = function()
                   {
                      var urlData = $($.mobile.activePage).data("url");
                      console.log(urlData);
                      var urlParts = urlData.split('?');
                      var urlPairs = urlParts[1].split('&');
                      var urlValues = {};
                      
                          for(var pair in urlPairs)
                              {
                                  var keyValue = urlPairs[pair].split('=');
                                  var key = decodeURIComponent(keyValue[0]);
                                  var value = decodeURIComponent(keyValue[1]);
                                      urlValues[key] = value;
                              }
                      return urlValues;
                   };
               
               $('#lastName').on('pageinit', function()
               {
                      var lastName = urlVars()["item.reservation"];
                      
                      $.couch.db("project4").view("app/reservation",
                      {
                          success:function(data)
                          {
                                  $.each(data.rows, function(index, value)
                                  {
                                      var lastName         = value.value.lastName;
                                      var numberOfPeople   = value.value.numberOfPeople;
                                      var phoneNumber      = value.value.phoneNumber;
                                      var restaurant       = value.value.restaurant;
                                      
                                      $('#lastNameList').append(
                                      $('<li>').append(
                                      $('<a>').attr("href", "#")
                                              .text(restaurant)
                                                      )
                                                                  );
                                              
                                  });
                                  $('#lastNameList').listview('refresh');
                          }      
                            
                      });
                          
               });