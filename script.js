const loginToggleButton = document.getElementById('login-btn');
const registerToggleButton = document.getElementById('register-btn');
const loginForm = document.getElementById('log-in-form');
const registerForm = document.getElementById('register-form');

function chooseLoginForm(){
    registerToggleButton.style.color = 'rgb(0, 0, 0)';
    registerToggleButton.style.background = 'transparent';
    loginToggleButton.style.color = 'white';
    loginToggleButton.style.background = 'linear-gradient(to right, rgb(51, 106, 195), rgb(52, 199, 52))';
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
}

function chooseRegisterForm(){
    registerToggleButton.style.color = 'white';
    registerToggleButton.style.background = 'linear-gradient(to right, rgb(51, 106, 195), rgb(52, 199, 52))';
    loginToggleButton.style.color = 'rgb(0, 0, 0)';
    loginToggleButton.style.background = 'white';
    loginForm.style.display = 'none';
    registerForm.style.display = 'block'
}