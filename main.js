// Sticky nav change color 
  $(window).scroll(function () {
    var dh = $(document).scrollTop();
    var navHeight = $("header").height();
  
    if (dh > navHeight / 2) {
      $(".navbar")
        .addClass("fixed-top")
        .css({"background":"#fbfffef3", "width":"90%"});
    } else {
      $(".navbar")
        .removeClass("fixed-top")
        .css({"background":"transparent", "width":"80%"});
    }
  });



//Owl caraousel function 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})


//Open only one accordion at a time
var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

