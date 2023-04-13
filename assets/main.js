const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images)

//tasti nel dom
const prev = document.querySelector('.avanti');
const next = document.querySelector('.indietro');

//dichiarazioni costanti associate a elementi del dom
const imgContainer = document.querySelector(".img-container");
const imgDefault = document.querySelector(".img-default");
const paragrafo = document.querySelector('.paragrafo')

//costanti alfa-numeriche
let z = 0;
const pathImg = "./assets/";

//check
console.log(paragrafo, imgContainer, imgDefault)



//richiamo funzione tasto avanti
prev.addEventListener("click", function(){
    avanti();
})
function avanti(){

    //prima parte della sezione che si occupa del div: card-sx

    const titleDefault = document.querySelector('.title-default');
    const textDefault = document.querySelector('.text-default');

    //rimozione elementi attuali
    imgDefault.remove();
    textDefault.remove();
    titleDefault.remove();
    

    //aggiornamento variabile "z", quando arriva all'ultimo vettore dell'oggetto, torna al primo. else ++ 
    if(z == 4){
        z=0;
    }else{
        z++;
    }
    console.log(images[z]['image'])


    //aggiungo con template literal nuovi oggetti nel dom, grazie alla variabile "z", che si aggiorna ad ogni click, il tutto è dinamico
    imgContainer.innerHTML += `<img src="${pathImg}${images[z]['image']}" alt="" class="imgDefault">`
    paragrafo.innerHTML += `<h3 class="title-default">${images[z]['title']}</h3>`
    paragrafo.innerHTML += `<p class="text-default">${images[z]['text']}</p> `



//seconda parte che si occupa del div: card-dx  *******************************************************************************************
    
    //dichiarazione active, che serve a individuare l'immagine con l'attuale classe active (di default è la prima)
    let active = document.querySelector('.active');
    //dichiarazione toActive, che individua l'immagine successiva rispetto a quella attiva
    let toActive = active.nextElementSibling;

    console.log(toActive, active)

    //se active coincide con l'ultima immagine, allora l'immagine successiva diventa la prima (quella di default)
    if( active.classList.contains('last') ){
        toActive = document.querySelector('.first');
    }

    //rimosso active da quello attuale, per spostarlo a quello successivo
    active.classList.remove('active');
    toActive.classList.add('active');

}

 next.addEventListener("click", function(){
     indietro()
 })

 function indietro(){

    //PER COMMENTI VEDI --> function indietro()

    const titleDefault = document.querySelector('.title-default');
    const textDefault = document.querySelector('.text-default');

    imgDefault.remove();


    textDefault.remove();

    titleDefault.remove();
    

    if(z!= 0){

        z--;
        
    }else{
        z=4;
    }
    console.log(images[z]['image'])

    imgContainer.innerHTML += `<img src="${pathImg}${images[z]['image']}" alt="" class="imgDefault">`

    paragrafo.innerHTML += `<h3 class="title-default">${images[z]['title']}</h3>`

    paragrafo.innerHTML += `<p class="text-default">${images[z]['text']}</p> `


    //dichiarazione active, che serve a individuare l'immagine con l'attuale classe active (di default è la prima)
    let active = document.querySelector('.active');
    //dichiarazione toActive, che individua l'immagine successiva rispetto a quella attiva
    let toActive = active.previousElementSibling;
    
    console.log(toActive, active)
    
    //se active coincide con l'ultima immagine, allora l'immagine successiva diventa la prima (quella di default)
    if( active.classList.contains('first') ){
        toActive = document.querySelector('.last');
    }
    
    //rimosso active da quello attuale, per spostarlo a quello successivo
    active.classList.remove('active');
    toActive.classList.add('active');

 }