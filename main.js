//Pustanje zvukova instrumenata prelaskom misa preko slike
let gitara = new Audio('gitara.ogg');
let violina = new Audio('violina.ogg');
let klavir = new Audio('klavir.ogg');
let bubnjevi = new Audio('bubnjevi.ogg');
let harmonika = new Audio('harmonika.ogg');
let kontrafagot = new Audio('kontrafagot.ogg');

//Kada se klikne na sliku odredjenog instrumeta otvori ce se wikipedija o tom instrumentu
function otvoriSajt(inst){
    switch(inst)
    {
        case 'gitara':
            {
                window.open('https://sr.wikipedia.org/sr-ec/%D0%93%D0%B8%D1%82%D0%B0%D1%80%D0%B0');
                break;
            }
        case 'violina':
            {
                window.open('https://sr.wikipedia.org/sr-ec/%D0%92%D0%B8%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0');
                break;
            }
        case 'klavir':
            {
                window.open('https://sr.wikipedia.org/sr-ec/%D0%9A%D0%BB%D0%B0%D0%B2%D0%B8%D1%80');
                break;
            }
        case 'bubnjevi':
            {
                window.open('https://sr.wikipedia.org/sr-ec/%D0%91%D1%83%D0%B1%D1%9A%D0%B5%D0%B2%D0%B8');
                break;
            }
        case 'harmonika':
            {
                window.open('https://sr.wikipedia.org/sr-ec/%D0%A5%D0%B0%D1%80%D0%BC%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0');
                break;
            }
        case 'kontrafagot':
            {
                window.open('https://sr.wikipedia.org/sr-ec/%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D1%84%D0%B0%D0%B3%D0%BE%D1%82');
                break;
            }
    }
}


//Pustanje zvuka prilikom prelaska misa preko slike zvucnika
function pustiZvuk(inst){
    switch(inst)
    {
        case 'gitara':
            {
                gitara.play();
                break;
            }
        case 'violina':
            {
                violina.play();
                break;
            }
        case 'klavir':
            {
                klavir.play();
                break;
            }
        case 'bubnjevi':
            {
                bubnjevi.play();
                break;
            }
        case 'harmonika':
            {
                harmonika.play();
                break;
            }
        case 'kontrafagot':
            {
                kontrafagot.play();
                break;
            }
    }
}