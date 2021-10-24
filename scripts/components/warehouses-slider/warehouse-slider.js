// slider-1

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


// open / close popup
const closePopup = () => {
    const buttonExit = document.querySelectorAll('.close-popup-button');
    const popupHolder = document.querySelector('.popup-map');

    const buttonOpener = document.querySelectorAll('.map-opener');
    const mapHolder = document.querySelectorAll('.popup-map-holder');


    console.log(buttonOpener);

    buttonExit.forEach(element => {
        element.addEventListener('click', () => {
            popupHolder.classList.remove('popup--open');
            mapHolder.forEach(element => {
                element.classList.remove('map--open');
            });
        })
    });

    for(let i = 0; i < buttonOpener.length; i++) {
        buttonOpener[i].addEventListener('click', () => {
            popupHolder.classList.add('popup--open');
            if(i == 0) {
                mapHolder[0].classList.add('map--open');
            }
            else if(i == 1) {
                mapHolder[1].classList.add('map--open');
            }
            else if(i == 2) {
                mapHolder[2].classList.add('map--open');
            }
        });
    }
}

closePopup();