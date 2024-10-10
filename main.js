const $ = $ => document.querySelector($);
const $$ = $ => $.querySelectorAll($);

//saldo
const boton = $('.boton');
const saldoSpan = $('.boton span');

let saldo = 20;
saldoSpan.innerText = `${saldo}`;

boton.addEventListener('click', () => {
    saldo--;

    if (saldo < 0) {
        saldo = 0;
        alert('No puedes tirar más');
    }

    saldoSpan.innerText = `${saldo}`;
});

//premios