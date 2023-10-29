// $(document).ready(function() {
//     // Lorsque le lien "Tout" est cliqué, affichez tous les articles
//     $("#tout").click(function() {
//         $(".container article").removeClass("hidden");
//     });

//     // Lorsque le lien "Web" est cliqué, masquez tous les articles sauf ceux de classe "web"
//     $("#web").click(function() {
//         $(".container article").addClass("hidden");
//         $(".container article.web").removeClass("hidden");
//     });

//     // Faites de même pour les liens "3d" et "Edition"
//     $("#troisd").click(function() {
//         $(".container article").addClass("hidden");
//         $(".container article.troisd").removeClass("hidden");
//     });

//     $("#edition").click(function() {
//         $(".container article").addClass("hidden");
//         $(".container article.edition").removeClass("hidden");
//     });
// });

// $( document ).ready(function() {
// $('.filtres a').on('click', function(e){

//     e.preventDefault();


//     $('.filtres a').removeClass('current');
//     $(this).addClass('current');
//     var section = $(this).attr('data-class');

//     console.log("section");

//     // $('article').show();
//     // // $('article').show();
//     // $('article:not("'+section+'")').hide();



//     if(section =='.tout'){
//         $('article').show();
//     gsap.fromTo(
//         'article',
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.1, stagger: 0.1 }
//       );
//     }else{
//         $('article').show();
//         $('article:not("'+section+'")').hide();
//         gsap.fromTo(
//         'article' + section,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.1, stagger: 0.1 }
//       );
//     }

// })

//  });//ready

$(function(){

  
  console.log('ready')

  $('#go').click(function(e){
    

    e.preventDefault()
    $.ajax({
      url: 'https://api.sampleapis.com/coffee/hot',
      method: 'GET',
      dataType: 'json',
      success: function(coffees) {

        console.log(coffees)

   

        $.each(coffees, function(i, coffee){

          $("#container").append("<div><b>Title:</b> " + coffee.title + "<br><b>Body : </b>" + coffee.ingredients) + '</div>'
          // $("#div").html("<b>Title:</b> " + data.title + "<br><b>Body : </b>" + data.ingredients) +;
        })

          // $("#div").html("<b>Title:</b> " + title + "<br><b>Body : </b>" + ingredients);

      } //fin succss
  });//fin ajax

  }) //startajaxclick

}) //ready

