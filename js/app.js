var elBurgerBtn = document.querySelector(".header-burger");

elBurgerBtn.addEventListener("click" , function(){
    elBurgerBtn.parentElement.classList.toggle("header-open")
});

$('.carusel-list').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});
  