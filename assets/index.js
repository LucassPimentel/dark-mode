

function mudarFundo() {
    mudarClasses();
    mudarTexto();
}

function mudarClasses(){
    fundo.classList.toggle('dark-mode')
    botao.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
    rodape.classList.toggle('dark-mode')
}

function mudarTexto(){
    if(botao.classList.contains('dark-mode')){
        botao.innerHTML = 'Light Mode'
        h1.innerHTML = 'Light Mode OFF'
    } else {
        botao.innerHTML = 'Dark Mode'
        h1.innerHTML = 'Light Mode ON'
    }
}

const botao = document.getElementById('btn');
const fundo = document.getElementById('corpo')
const h1 = document.getElementById('titulo-pagina')
const rodape = document.getElementsByTagName('footer')[0]

botao.addEventListener('click', mudarFundo);