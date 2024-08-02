var swiper1 = new Swiper(".swiper1",{
    effect: "coverflow",
    grabCursor: true,
    initialSlide: 1,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 10,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper2 = new Swiper(".swiper2",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
     on: {
        click(event) {
            swiper2.slideTo(this.clickedIndex);
        },
    },

    pagination: {
        el: ".swiper-pagination",
    },
}); 

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();
        }
    });
   
   
    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
});

/*window.onload=function(){
    document.getElementById('loader').style.display="none";
    document.getElementById('loaderwrapper').style.display="block";
};*/

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";

});
