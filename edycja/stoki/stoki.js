let content = {



    /* 
        TUTAJ EDYTUJESZ NAPISY DO STRONY O FIRMIE
    */

        glownyNapis1: "stoki magazynowe",
        naglowek1: "KUPIMY TWOJE STOKI!",
        paragraf1: "Masz zalegający towar i nie wiesz co z nim zrobić? Skontaktuj się z nami z chęcia przyjmiemy twoje niepotrzebne rzeczy!",


    /* 
        TUTAJ EDYTUJESZ NAPISY DO BANERÓW
    */

    //baner numer 1

        baner1naglowek: "ELASTYCZNOŚĆ",
        baner1paragraf: "Przyjmujemy bardzo szeroki wachlarz towarów. Cechuje nas elastyczność",

    //baner numer 2

        baner2naglowek: "EFEKTYWNOŚĆ",
        baner2paragraf: "Działamy na podstawie dostarczonej specyfikacji towaru. Szybko i efektywnie.",

    //baner numer3

        baner3naglowek: "SZYBKOŚĆ",
        baner3paragraf: "Kompleksowa obsługa całego procesu sprzedaży! Natychmiastowe odzyskanie gotówki zamrożonej w zalegającym towarze",
























};










































const h1 = document.querySelector('.dashboard-mini-container__heading-holder--heading');
const h2 = document.querySelector('.dashboard-mini-container__subheading-holder--subheading');
const p = document.querySelector('.dashboard-mini-container__paragraph-holder--paragraph');

const banerHeading1 = document.querySelector('.stocks-baner-heading-1');
const banerParagraph1 = document.querySelector('.stocks-baner-paragraph-1');

const banerHeading2 = document.querySelector('.stocks-baner-heading-2');
const banerParagraph2 = document.querySelector('.stocks-baner-paragraph-2');

const banerHeading3 = document.querySelector('.stocks-baner-heading-3');
const banerParagraph3 = document.querySelector('.stocks-baner-paragraph-3');

h1.innerHTML = content.glownyNapis1;
h2.innerHTML = content.naglowek1;
p.innerHTML = content.paragraf1;

banerHeading1.innerHTML = content.baner1naglowek;
banerParagraph1.innerHTML = content.baner1paragraf;

banerHeading2.innerHTML = content.baner2naglowek;
banerParagraph2.innerHTML = content.baner2paragraf;

banerHeading3.innerHTML = content.baner3naglowek;
banerParagraph3.innerHTML = content.baner3paragraf;