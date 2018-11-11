
// Start of function allow movement of data(items). 
$(document).ready(function(){
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});
// end of function allow movement of data(items). 



// start of jQuery function to command all size be one. 
jQuery(document).ready(function($) {
    $(".owl-carousel").each(function(index, el) {
      var containerHeight = $(el).height();
      $(el).find("img").each(function(index, img) {
        var w = $(img).prop('naturalWidth');
        var h = $(img).prop('naturalHeight');
        $(img).css({
          'width': Math.round(containerHeight * w / h) + 'px',
          'height': containerHeight + 'px'
        });
      }),
      $(el).owlCarousel({
        autoWidth: true
      });
    });
  });
// end of jQuery function to command all size be one.  