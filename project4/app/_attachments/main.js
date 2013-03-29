//Brenna Pavlinchak
//CouchDB Plugin Project
//ASD 1303

            $('#home').on("pageinit", function()
            {
                $.couch.db("project4").view("app/reservation", 
                {
                    success: function(data)
                    {
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
            });
            
            var urlVars = function()
            {
                var urlData = $($.mobile.activePage).data("url");
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
            
            $(document).on('pageinit', '#lastName', function()
            {
                var lastName = urlVars()["item.lastName"];
                $.couch.db("project4").view("app/reservation",
                {
                    success: function(data) 
                    {  
                       $.each(data.rows, function(index, reservation)
                       {
                           var lastName         = reservation.value.lastName;
                           var numberOfPeople   = reservation.value.numberOfPeople;
                           var phoneNumber      = reservation.value.phoneNumber;
                           var restaurant       = reservation.value.restaurant;
                           
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
            
            












