const $ = $ => document.querySelector($);
const $$ = $$ => document.querySelectorAll($$);

const boton = $('.boton');
const saldoSpan = $('.boton span');
const casillas = $$('.maquina tbody td');
const c1 = $('[data-id="1"]');
const c2 = $('[data-id="2"]');
const c3 = $('[data-id="3"]');
const premios = [
    {
        id: 1,
        nombre: 'banana',
        imagen: 'banana.svg',
    },
    {
        id: 2,
        nombre: 'bar',
        imagen: 'bar.svg',
    },
    {
        id: 3,
        nombre: 'blueberries',
        imagen: 'blueberries.svg',
    },
    {
        id: 4,
        nombre: 'cards-diamond',
        imagen: 'cards-diamond.svg',
    },
    {
        id: 5,
        nombre: 'cards-heart',
        imagen: 'cards-heart.svg',
    },
    {
        id: 6,
        nombre: 'cherry',
        imagen: 'cherry.svg',
    },
    {
        id: 7,
        nombre: 'orange',
        imagen: 'orange.svg',
    },
    {
        id: 8,
        nombre: 'seven',
        imagen: 'seven.svg',
    },
    {
        id: 9,
        nombre: 'strawberry',
        imagen: 'strawberry.svg',
    }
];

let cantidad = 0;
let saldo = 20;
saldoSpan.innerText = `${saldo}`;

boton.addEventListener('click', () => {
    casillas.forEach(casilla => {
        casilla.innerHTML = '';
    });
    saldo--;
    
    if (saldo < 0) {
        saldo = 0;
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "No puedes tirar más monedas",
        });
        return;
    }
    
    saldoSpan.innerText = `${saldo}`;
    
    // premios.forEach(premio => {
    //     const img = new Image();
    //     img.src = `img/${premio.imagen}`;
    //     img.alt = premio.nombre;
    //     img.id = premio.id;
    //     img.classList.add('img-fluid');
    // });

    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    img1.src = `img/${premios[getRandomInt(9)].imagen}`;
    img2.src = `img/${premios[getRandomInt(9)].imagen}`;
    img3.src = `img/${premios[getRandomInt(9)].imagen}`;

    img1.id = premios[getRandomInt(9)].id;
    img2.id = premios[getRandomInt(9)].id;
    img3.id = premios[getRandomInt(9)].id;

    img1.classList.add('img-fluid');
    img2.classList.add('img-fluid');
    img3.classList.add('img-fluid');

    c1.appendChild(img1);
    c2.appendChild(img2);
    c3.appendChild(img3);
});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}