// Dom

const Lampada = document.querySelector('#Lampada')
const bt01 = document.querySelector('#Ligar')
const bt02 = document.querySelector('#Desligar')

// Eventos

bt01.addEventListener('click', Ligar)
bt02.addEventListener('click', Desligar)
bt01.addEventListener('dblclick', Quebrar)

//Funções

function Ligar(){
Lampada.src = 'imagens/acesa.gif'
}

function Desligar(){
Lampada.src = 'imagens/apagada.gif'
}

function Quebrar () {
Lampada.src = 'imagens/quebrada.jpg'
}