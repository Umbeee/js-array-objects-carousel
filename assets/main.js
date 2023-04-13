const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images)


const prev = document.querySelector('.indietro');
const next = document.querySelector('.avanti');
const cardImg = document.querySelector('.card-sx');
const imgContainer = document.getElementById("img-container");
const imgDefault = document.getElementById("imgDefault");
let z = 0;
const pathImg = "./assets/";


prev.addEventListener("click", function(){
    indietro()
})

function indietro(){

    imgDefault.remove();

    if(z == 4){

        z=0

    }else{
        z++
    }
    console.log(images[z]['image'])

    cardImg.innerHTML += `<img src="${pathImg}${images[z+1]['image']}" alt="" class="imgDefault">`

}

// next.addEventListener("click", function(){
//     avanti()
// })

// function avanti(){



// }