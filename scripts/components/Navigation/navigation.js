const navigationMenu = () => {

    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.logo-langue-hamburger-container__mobile-menu-holder'); 

    const toggleClass = () => {
        
        mobileMenu.classList.toggle('active-menu');
        hamburgerButton.classList.toggle('active-hamburger');

    }

    if(hamburgerButton) {
        hamburgerButton.addEventListener('click', toggleClass);
    }


};
navigationMenu();