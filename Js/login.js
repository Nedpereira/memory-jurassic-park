const input = document.querySelector('.login-input');
const button = document.querySelector('.button-form');
const form = document.querySelector('.login-form');

const validaInput = ({target}) => {
   if(target.value.length >= 3){
    button.removeAttribute('disabled');
    return;
   }
   button.setAttribute('disabled', ''); 
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);

    window.location = '../page/game.html';
}

input.addEventListener('input', validaInput);
form.addEventListener('submit', handleSubmit );