//Brenna Pavlinchak
//CouchDB Plugin Project
//ASD 1303

            $('#home').on("pageinit", function()
            {
            	$.couch.db("project4").view("app/reservation", 
                {
            		success: function(data)
            		{
            			console.log(data);//This works
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
            
            $('#lastName').on("pageinit", function()
            {
            	alert("im sitting in the lastName.html");
            });