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

let saldo = 200;
saldoSpan.innerText = `${saldo}`;

boton.addEventListener('click', () => {
    casillas.forEach(casilla => {
        casilla.innerHTML = '';
    });
    saldo -= 5;
    
    if (saldo < 0) {
        saldo = 0;
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "No puedes tirar más monedas",
        });
        return;
    }
    
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();

    establecerImagen(img1, c1);
    establecerImagen(img2, c2);
    establecerImagen(img3, c3);
    
    if (img1.id === img2.id && img1.id === img3.id) {
        switch (parseInt(img1.id)) {
            case 1:
                saldo += 10;
                Swal.fire({
                    icon: "success",
                    title: "¡Ganaste!",
                    text: "Has ganado 10$",
                });
                break;
            
            case 2:
                saldo += 500;
                Swal.fire({
                    icon: "success",
                    title: "¡Ganaste!",
                    text: "Has ganado 500$",
                });
                break;
            
            case 3:
                saldo += 250;
                Swal.fire({
                    icon: "success",
                    title: "¡Ganaste!",
                    text: "Has ganado 250$",
                });
                break;
            
            case 4:
                saldo += 125;
                Swal.fire({
                    icon: "success",
                    title: "¡Ganaste!",
                    text: "Has ganado 125$",
                });
                break;
            
            case 5:
                saldo += 100;
                Swal.fire({
                    icon: "success",
                    title: "¡Ganaste!",
                    text: "Has ganado 100$",
                });
                break;
            
            case 6:
                saldo += 50;
                Swal.fire({
                    icon: "success",
                    title: "¡Ganaste!",
                    text: "Has ganado 50$",
                });
                break;
            
            case 7:
                saldo += 25;
                Swal.fire({
                    icon: "success",
                    title: "¡Ganaste!",
                    text: "Has ganado 25$",
                });
                break;
            
            case 8:
                saldo += 1000;
                Swal.fire({
                    icon: "success",
                    title: "¡Ganaste!",
                    text: "Has ganado premio grande 1000$",
                });
                break;

            case 9:
                saldo += 20;
                Swal.fire({
                    icon: "success",
                    title: "¡Ganaste!",
                    text: "Has ganado 20$",
                });
                break;
        
            default:
                break;
        }

    }
    saldoSpan.innerText = `${saldo}`
});

function establecerImagen(img, casilla) {
    img.src = `img/${premios[getRandomInt(premios.length)].imagen}`;
    const id = premios.find(premio => img.src.includes(premio.imagen));
    img.id = id.id;
    img.classList.add('img-fluid');
    casilla.appendChild(img);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}