const form = document.getElementById('form');
const password1El = document.getElementById('password');
const password2El = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    isValid = form.checkValidity();
    if(!isValid){
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return false
    }

    if(password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Passwords don\'t match!';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return false
    }

    if(isValid && passwordsMatch){
        message.textContent = 'Success';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
        return true;
    }

}

function storeFormdata(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    if(validateForm()){
        storeFormdata();
    }
}

form.addEventListener('submit', processFormData);