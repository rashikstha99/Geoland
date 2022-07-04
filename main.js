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
            items:2
        },
        1000:{
            items:3
        }
    }
})


const isogrps = document.querySelectorAll(".iso");

isogrps.forEach(iso => {
    iso.addEventListener("click", () => {
        iso.classList.toggle("active");
    })
})