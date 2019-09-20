
    // $(function() {
    //     $('.lazy').lazy({
    //       effect: "fadeIn",
    //       effectTime: 2000,
    //       threshold: 0
    //     });
    // });

$(document).ready(function(){
    $(".container").click(function(){
        $(".container").hide();
        $("#apollo .flickity-prev-next-button next").click(); 
        return false;
      });
    });

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

//$('.main-carousel').flickity({
//  imagesLoaded: true,
//  freeScroll: true,
//  freeScrollFriction: 0.03,
//  wrapAround: true,
//});

var $carousel = $('.main-carousel').flickity({
  lazyLoad: true,
  imagesLoaded: true,
  percentPosition: false,
  freeScroll: false,
  pageDots: false,
  // wrapAround: true
});

// -----gallery parallx-----

// var $imgs = $carousel.find('.carousel-cell img');
// // get transform property
// var docStyle = document.documentElement.style;
// var transformProp = typeof docStyle.transform == 'string' ?
//   'transform' : 'WebkitTransform';
// // get Flickity instance
// var flkty = $carousel.data('flickity');

// $carousel.on( 'scroll.flickity', function() {
//   flkty.slides.forEach( function( slide, i ) {
//     var img = $imgs[i];
//     var x = ( slide.target + flkty.x ) * -1/3;
//     img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//   });
// });
