$( document ).ready(function() {

console.log('ready')


$.ajax({
    url: '../data.json',
    method: 'GET',
    dataType: 'json',
    success: function(coffees) {

      console.log(coffees)
      $.each(coffees, function(i, coffee){

        $nomcafe = coffee.title
        $ingredientcafe = coffee.ingredients
        $ingredientlist = $ingredientcafe.join(', ')
        $imgcafe = coffee.image

        $('#container').append(

        "<div id='cafe' data-ingredients='" + $ingredientcafe + "'><p class='msg'></p><img src='" + $imgcafe + "' alt='" + $nomcafe + "'><h3>"
         + $nomcafe + 
         "</h3><p class='ingredient'>" + $ingredientlist + "</p></div>")

         $('.ingredient').hide()

            $('#container').on('click', 'div', function(e) {
                e.preventDefault();
            
                
                $ingredient = $(this).data('ingredients')
                $ingredientdata = $ingredient.toLowerCase();
                
                $(this).css('background-color', 'transparent');
                $(this).find('.ingredient').hide();
                $(this).find('.msg').hide();
               
                if ($(this).hasClass('clicked')) {
                    $(this).removeClass('clicked');
                    
                }
                
                else{
                    $(this).find('.msg').show();
                    $(this).find('.ingredient').show()
                    $(this).addClass('clicked');

                    if ($ingredientdata.includes('milk')) {
                        $(this).css('background-color', '#B8CFF4');
                        $(this).find('.msg').text('Il y a du lait !');
                    }
            
                    if ($ingredientdata.includes('sugar') || $ingredientdata.includes('sweet') || $ingredientdata.includes('ice cream')) {

                        $(this).css('background-color', '#FA89B3'); 

                        if ($ingredientdata.includes('milk')) {
                            $(this).find('.msg').text("Il y a du sucre et du lait !");
                        } else {
                            $(this).find('.msg').text('Il y a du sucre !');
                    }
            
                    if ($ingredientdata.includes('whiskey')) {
                        $(this).css('background-color', '#C42847');
                        $(this).find('.msg').text("Il y a de l'alcool !");
                    }

                }
                
                
                    
                }})

                
            });

       
        
    } //fin succss
});//fin ajax

 });//ready