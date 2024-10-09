const signup = document.querySelector('#signup');
const signin = document.querySelector('#signin');
const body = document.querySelector('body');

signup.addEventListener('click', (e) => {
    body.classList.add('signup');
})

signin.addEventListener('click', (e) => {
    body.classList.remove('signup');
})