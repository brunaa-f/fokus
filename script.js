const html = document.querySelector('html')

const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const startBt = document.querySelector('#start-pause')

const banner = document.querySelector('.app__image');
const cardTimer = document.querySelector('#timer');
const cardTxt = document.querySelector('.app__title');

const duracaoFoco = 1500;
const duracaoDescanso = 300;
const duracaoDescansoLongo = 900;

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
    banner.setAttribute('src', '/imagens/foco.png' );
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    banner.setAttribute('src', '/imagens/descanso-curto.png');
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    banner.setAttribute('src', '/imagens/descanso-longo.png');
})