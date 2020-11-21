
window.onscroll = function () { myFunction() };

function myFunction() {
  if ( document.body.scrollTop > 30 ||document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("navbar")[0].classList.add("mydiv");
  } else {
    document.getElementsByClassName("navbar")[0].classList.remove("mydiv");

  }
}

$(document).ready(function () {
  $('body').scrollspy({ target: ".navbar", offset: 50 });
});
$(document).ready(function () {
  $('body').scrollspy({ target: ".nav", offset: 50 });
});



var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.filter').on( 'click', 'li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});


$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    dotsEach:true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: 
    {
      0: {
        items: 1,
        nav: false
      },
      576: {
        items: 2,
        loop: true,
        nav: false
      },
      992: {
        items: 3,
        loop: true
        
      }
    }
  });
  
});


(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();