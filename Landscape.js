const timeDiv = document.querySelector(".time");
const grettingDiv = document.querySelector(".gretting");
const phraseDiv = document.querySelector(".phrase");
const amPmDiv = document.querySelector(".amPm");
const vsDiv = document.querySelector(".vs");
const refDiv = document.querySelector(".ref");


const verses = [
    {
        vs: `De Jehove es la tierra y su plenitud, el mundo y en lo que el habitan`,
        ref: "Salmos 24:1"
    },
    {
        vs: "Bueno es alaberte oh Jehova y cantar salmos a tu nombre oh altisimo",
        ref: "Salmos 92:1"
    },
    {
        vs: "Bienaventurado el varon que no anduvo en consejo de malo ni en silla de encarnecedores se ha sentado.",
        ref: "Salmos 1:1"
    },
    {
        vs: "En el principio, Dios creó los cielos y la tierra.",
        ref:"Genesis 1:1"
    }

]
    
const correctTime = (i) => {
    if (i < 10) { i = `0${i}` }
    return i;
}

const getPhrase = () => {
    let currentVerse = verses[Math.floor(Math.random() * verses.length)];
    vsDiv.innerHTML = currentVerse.vs;
    refDiv.innerHTML = `- ${currentVerse.ref}`;
}
getPhrase();
// 0.1 - 0.9 * 4 == 1

const createClock = () => {
    let hora = new Date();
    let h = hora.getHours();
    let m = hora.getMinutes();
    let s = hora.getSeconds();
    let grettingMessage = "";

    if (h >= 12 && h <= 18) {
        grettingMessage = "Buenas tardes, ";
    } else if (h >= 19 && h <= 23) {
        grettingMessage = "Buenas noches, ";
    } else {
        grettingMessage = "Buenos días, ";
    }
    
    m = correctTime(m);
    s = correctTime(s);

    let hr = (h>12) ? h - 12 : h
    let am = (h > 12) ? 'P.M' : 'A.M'
    timeDiv.innerHTML = `${hr}:${m}:${s}`;
    grettingDiv.innerHTML = grettingMessage;
    amPmDiv.innerHTML = `${am}`;
    setTimeout(createClock, 1000);
}
createClock()

vsDiv.addEventListener("click", getPhrase);








