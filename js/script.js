const form = document.getElementById('form');
const password1El = document.getElementById('password');
const password2El = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm(){
    isValid = form.checkValidity();
    console.log(isValid);
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';

}

function processFormData(e){
    e.preventDefault();
    validateForm();
}

form.addEventListener('submit', processFormData);