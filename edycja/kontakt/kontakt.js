let content = {




    /* 
        TUTAJ EDYTUJESZ NAPISY DO STRONY KONTAKT
    */

        glownyNapis1: "Kontakt",
        naglowek1: "ZADZWOŃ TERAZ",
        paragraf1: "Zapraszamy do Kontaktu. Odpowiadamy najszybciej jak to możliwe.",


    /* 
        TUTAJ EDYTUJESZ TEKST ZE ZDJĘCIEM
    */

        

};











































const h1 = document.querySelector('.dashboard-mini-container__heading-holder--heading');
const h2 = document.querySelector('.dashboard-mini-container__subheading-holder--subheading');
const p = document.querySelector('.dashboard-mini-container__paragraph-holder--paragraph');

h1.innerHTML = content.glownyNapis1;
h2.innerHTML = content.naglowek1;
p.innerHTML = content.paragraf1;