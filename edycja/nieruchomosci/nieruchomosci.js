let content = {




    /* 
        TUTAJ EDYTUJESZ NAPISY DO STRONY O FIRMIE
    */

        glownyNapis1: "ZARZĄDZANIE NIERUCHOMOŚCIAMI",
        naglowek1: "TWÓJ PARTNER W ZARZĄDZANIU NIERUCHOMOŚCIĄ",
        paragraf1: "Aktywne doradztwo i Planowanie działań, Zarządzanie i Administrowanie Nieruchomością, obsługa Finansowo-Księgowa oraz Prawna",


    /* 
        TUTAJ EDYTUJESZ TEKST ZE ZDJĘCIEM
    */

        naglowek2: "O MNIE",
        paragraf2: `

                    Jestem absolwentem Uniwersytetu Ekonomicznego w Krakowie. Specjalizacja Ekonomika Inwestycji i Nieruchomości. Posiadam Licencję Zarządcy
                    Nieruchomości PFRN nr 28909, oraz jestem absolwentem INSTITUTE OF REAL ESTATE
                    MANAGMENT (IREM) Illinois Chicago – Certified Property Manager (CPM). Od ponad 20 lat
                    zajmuję się wszelkimi kwestiami dot. zarządzania Nieruchomościami Komercyjnymi.
                    
                    `,
                    
        podnaglowek: "Szukasz zarządcy swojej Nieruchomości komercyjnej?",


};








































const h1 = document.querySelector('.dashboard-mini-container__heading-holder--heading');
const h2 = document.querySelector('.dashboard-mini-container__subheading-holder--subheading');
const p = document.querySelector('.dashboard-mini-container__paragraph-holder--paragraph');

const buildingsh2 = document.querySelector('.buildings-heading');
const buildingsp = document.querySelector('.buildings-paragraph');
const buildingsh4 = document.querySelector('.buildings-subheading');

h1.innerHTML = content.glownyNapis1;
h2.innerHTML = content.naglowek1;
p.innerHTML = content.paragraf1;

buildingsh2.innerHTML = content.naglowek2;
buildingsp.innerHTML = content.paragraf2;
buildingsh4.innerHTML = content.podnaglowek;