let content = {


    /* 
        TUTAJ EDYTUJESZ NAPISY DO STRONY GLOWNEJ - START
    */

    // slaid numer 1
    
    glownyNapis1: "prozarzadca",
    naglowek1: "Łukasz Stach",
    paragraf1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum culpa odio architecto temporibus modi omnis doloremque ad error, commodi vero eligendi deleniti, eius, at reprehenderit autem deserunt! Earum, dicta fugit!",

    // slaid numer 2 

    glownyNapis2: 'nasze magazyny',
    naglowek2: 'sprawdz magazyny',
    paragraf2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum culpa odio architecto temporibus modi omnis doloremque ad error, commodi vero eligendi deleniti, eius, at reprehenderit autem deserunt! Earum, dicta fugit!",


    // slaid numer 3
    glownyNapis3: 'stoki magazynowe',
    naglowek3: 'skup stoków magazynowych',
    paragraf3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum culpa odio architecto temporibus modi omnis doloremque ad error, commodi vero eligendi deleniti, eius, at reprehenderit autem deserunt! Earum, dicta fugit!",
    

    /* 
        EDYTUJ TEKST DO BANEROW
    */

    // baner1
    baner1napis1: 'Wszysy zadowoleni klienci',
    baner1napis2: 'Najlepsze ceny w okolicy Olkusza',
    baner1napis3: 'Nowoczesne i zadbane magazyny',
    baner1napis4: 'Stu procentowa gwarancja wynajmu',

    // baner2
    baner2napis1: 'Doświadczenie',
    baner2napis2: 'Elastyczność',
    baner2napis3: 'Adaptacja pod potrzeby najemcy',
    baner2napis4: 'Pomoc we wszystkich formalnosciach',





















};























//vairables 
const slide1h1 = document.querySelector('.slide-1-heading');
const slide1h2 = document.querySelector('.slide-1-subheading');
const slide1p = document.querySelector('.slide-1-paragraph');


const slide2h1 = document.querySelector('.slide-2-heading');
const slide2h2 = document.querySelector('.slide-2-subheading');
const slide2p = document.querySelector('.slide-2-paragraph');

const slide3h1 = document.querySelector('.slide-3-heading');
const slide3h2 = document.querySelector('.slide-3-subheading');
const slide3p = document.querySelector('.slide-3-paragraph');

const baner1text1 = document.querySelector('.baner1-text1');
const baner1text2 = document.querySelector('.baner1-text2');
const baner1text3 = document.querySelector('.baner1-text3');
const baner1text4 = document.querySelector('.baner1-text4');

const baner2text1 = document.querySelector('.baner2-text1');
const baner2text2 = document.querySelector('.baner2-text2');
const baner2text3 = document.querySelector('.baner2-text3');
const baner2text4 = document.querySelector('.baner2-text4');


slide1h1.innerHTML = content.glownyNapis1;
slide1h2.innerHTML = content.naglowek1;
slide1p.innerHTML = content.paragraf1;

slide2h1.innerHTML = content.glownyNapis2;
slide2h2.innerHTML = content.naglowek2;
slide2p.innerHTML = content.paragraf2;

slide3h1.innerHTML = content.glownyNapis3;
slide3h2.innerHTML = content.naglowek3;
slide3p.innerHTML = content.paragraf3;

baner1text1.innerHTML = content.baner1napis1;
baner1text2.innerHTML = content.baner1napis2;
baner1text3.innerHTML = content.baner1napis3;
baner1text4.innerHTML = content.baner1napis4;

baner2text1.innerHTML = content.baner2napis1;
baner2text2.innerHTML = content.baner2napis2;
baner2text3.innerHTML = content.baner2napis3;
baner2text4.innerHTML = content.baner2napis4;