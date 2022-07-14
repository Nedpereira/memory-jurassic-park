const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const chars = [
    'um',
    'dois',
    'tres',
    'quarto',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEnd = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length === 20)
    { 
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML} ! Seu tempo foi: ${timer.innerHTML}`);
        window.location = '../index.html';
    }
}
const checkCards = () => {
    const firstChar = firstCard.getAttribute('data-char');
    const secondChar = secondCard.getAttribute('data-char');

    if(firstChar === secondChar)
    {
       firstCard.firstChild.classList.add('disabled-card');
       secondCard.firstChild.classList.add('disabled-card');

       firstCard = '';
       secondCard = '';
         
       checkEnd();
    } else {
        setTimeout(() => {
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';
        }, 500)
    }
}

const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card'))
    {
        return;
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (chars) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');
    
    front.style.backgroundImage = `url('/imagem/${chars}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    
    card.setAttribute('data-char', chars)
    return card;

}

const loadGame = () => {

    const duplicaChars = [...chars, ... chars]
    
    const baralhoArray = duplicaChars.sort(() => Math.random() - 0.5);

    baralhoArray.forEach((char) => {
        const card = createCard(char);
        grid.appendChild(card);

    });

}

const startTimer = () => {

    this.loop = setInterval(() => {
        const time = Number(timer.innerHTML);
        timer.innerHTML = time + 1;
    }, 1000);
}

window.onload = () => {

    const playerName = localStorage.getItem('player');

    spanPlayer.innerHTML = playerName;

    startTimer();
    loadGame();
}
