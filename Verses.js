let verso1 = "Tuyos son los cielos, tuya también la tierra" +
    "el mundo y todo lo que en él hay, tú lo fundaste.";
let verso2 = "Alábenlo, el cielo y la tierra, los mares y todo lo que en ellos se mueve.";
let verso3 = "Hace mucho tiempo echaste los cimientos de la tierra y con tus manos formaste los cielos.";    
let verso4 = "En el principio, Dios creó los cielos y la tierra.";

let array = [verso1, verso2, verso3, verso4];

let message = document.querySelector('#message');
mens();

message.addEventListener("click", mens());

function mens() {
    let aleat = array.length - 1;
    let aleatorio = Math.round(Math.random() * aleat);  
    message.innerHTML = array[aleatorio];
}

