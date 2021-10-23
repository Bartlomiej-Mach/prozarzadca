let content = {



    /* 
        TUTAJ EDYTUJESZ NAPISY DO STRONY O FIRMIE
    */

        glownyNapis1: "o frimie",
        naglowek1: "Kluczowe informacje",
        paragraf1: "Tutaj troche tekstu reklamowego opwiadającego o firmie Tutaj troche tekstu reklamowego opwiadającego o firmie Tutaj troche tekstu reklamowego opwiadającego o firmie ",


    
    /* 
        TUTAJ EDYTUJESZ NAPISY DLA TEKSTU CZĘŚĆ PIERWSZA
    */

    oParagraf1: `
                Wynajmem powierzchni Prod Magazynowych zajmujemy się od ponad 20 lat. Początki firmy
                sięgają roku 1998 – to wtedy wynajęliśmy pierwsza halę o pow. 1000 mkw firmie Ruukki
                Polska. Od tego czasu powiększyliśmy dostępną pow najmu do około 6000 mkw. Nasze Hale
                to nowoczesne obiekty wyposażone w szereg udogodnień dla Najemców.
                `,
    oParagraf2: `
                Nasi zadowoleni klienci to zarówno firmy krajowe jak i zagraniczne, między innymi: RUUKI
                POLSKA, ARCELOR-MITTAL, PLANJJA, STAC, INTERCARS, MAGA, GM AUTOMATYKA, DOMKI
                DREWNAINE ZIELIŃSKI, i wiele innych.
                `,
        
    /* 
        TUTAJ EDYTUJESZ NAPISY DLA TEKSTU CZĘŚĆ DRUGA
    */

    oParagraf3: `
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of 
                  type and scrambled it to make a type specimen book. It has survived
                   not only five centuries, but also the leap into electronic
                `,









};   


















































const h1 = document.querySelector('.dashboard-mini-container__heading-holder--heading');
const h2 = document.querySelector('.dashboard-mini-container__subheading-holder--subheading');
const p = document.querySelector('.dashboard-mini-container__paragraph-holder--paragraph');

const p1 = document.querySelector('.about-text-paragraph1');
const p2 = document.querySelector('.about-text-paragraph2');
const p3 = document.querySelector('.about-text-paragraph3');

h1.innerHTML = content.glownyNapis1;
h2.innerHTML = content.naglowek1;
p.innerHTML = content.paragraf1;

p1.innerHTML = content.oParagraf1;
p2.innerHTML = content.oParagraf2;
p3.innerHTML = content.oParagraf3;