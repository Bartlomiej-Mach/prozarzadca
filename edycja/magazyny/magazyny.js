let content = {




    /* 
        TUTAJ EDYTUJESZ NAPISY DO STRONY KONTAKT
    */

        glownyNapis1: "nasze magazyny",
        naglowek1: "Kluczowe informacje",
        paragraf1: "Tutaj troche tekstu reklamowego opwiadającego o firmie Tutaj troche tekstu reklamowego opwiadającego o firmie Tutaj troche tekstu reklamowego opwiadającego o firmie ",


    /* 
        TUTAJ EDYTUJESZ TEKST DO MAGAZYNÓW
    */

    // PIERWSZY MAGAZYN
    
        magazyn1opis: 
        `
            Teren Hal Magazynowo/Produkcyjnych, wyposażonych w suwnice Więcej tekstu i opisów potrzebnych do lepszego wyglądu.
        `,
        czy_jest_dostepny1: "nie",

    // DRUGI MAGAZYN

        magazyn2opis: 
        `
            Do wynajęcia posiadamy Halę produkcyjna o pow 1100 mkw charakteryzująca się następującymi parametrami:
            <ul>
                <li> Wyposażona w suwnice 5t (możliwość zwiększenia do 8t) </li>
                <li> Posadzka Betonowa niepylna </li>
                <li> Energia El – 80 kW, Gaz – wiosna 2022 dostępny </li>
                <li> Hala o wys 8m, Brama wjazdowa, brama załadunkowa. </li>
            </ul>

        `,
        czy_jest_dostepny2: "tak",

    // TRZECI MAGAZYN

        magazyn3opis: 
        `
            Do wynajęcia Posiadam 3 podziemne magazyny (stała temp przez cały rok, niezależnie od
            temp na zewnątrz. Wyłączone z użytkowania magazyny wody pitnej, Dwa okrągłe o
            powierzchni łącznej około 450 mkw, jeden o powierzchni około 290 mkw.
        `,
        czy_jest_dostepny3: "tak",

};











































const h1 = document.querySelector('.dashboard-mini-container__heading-holder--heading');
const h2 = document.querySelector('.dashboard-mini-container__subheading-holder--subheading');
const p = document.querySelector('.dashboard-mini-container__paragraph-holder--paragraph');

const warehouse1p = document.querySelector('.warehouse-1-p');
const warehouse2p = document.querySelector('.warehouse-2-p');
const warehouse3p = document.querySelector('.warehouse-3-p');

const mag1 = document.querySelector('.warehouse-1-id');
const mag2 = document.querySelector('.warehouse-2-id');
const mag3 = document.querySelector('.warehouse-3-id');


h1.innerHTML = content.glownyNapis1;
h2.innerHTML = content.naglowek1;
p.innerHTML = content.paragraf1;

warehouse1p.innerHTML = content.magazyn1opis;
warehouse2p.innerHTML = content.magazyn2opis;
warehouse3p.innerHTML = content.magazyn3opis;



if(content.czy_jest_dostepny1.toLocaleLowerCase() === 'nie') {
    mag1.classList.add('warehouse--deactivation');
} 
if(content.czy_jest_dostepny2.toLocaleLowerCase() === 'nie') {
    mag1.classList.add('warehouse--deactivation');
} 
if(content.czy_jest_dostepny3.toLocaleLowerCase() === 'nie') {
    mag1.classList.add('warehouse--deactivation');
} 
