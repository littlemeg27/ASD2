//Brenna Pavlinchak
//CRUD Project
//ASD 1303

        //var operation = "add"; //Trying something new i found hope this works!
        //var key = -1; //Index
        //var reservations = [];
 

        $('#home').on('pageinit', function(data)
        {

                        
        });
       
        
        $('#addItem').on('pageinit', function()
        {
                
           //localStorage.getItem("reservations");//Retrieve the stored data
           //reservations = JSON.parse(reservations); //Converts string to object
               
            var myForm = $('#waitForm');
            var errorFormLink = $('#errorFormLink');
            
            myForm.validate(
            {
                    invalidHandler: function(form, validator) 
                    {
                        errorFormLink.click();
                        var html = '';
                        
                        for(var key in validator.submitted)
                        {
                            var label = $('[for^="'+ key +'"]');
                            var legend = label.closest('fieldset').find('.ui-controlgroup-label');
                            var fieldName = legend.length ? legend.text() : label.text();
                            html += '<li>'+fieldName+'</li>';
                        }
                        
                        $("#errorFormPage ul").html(html);
                    },
                    
                    submitHandler: function() 
                    {
                        var data = myForm.serializeArray();
                        storeData(data);
                    }
            });

 
           
               
        });
        
        
        
        $('#dataPage').on('pageinit', function()
        {
        
        });





