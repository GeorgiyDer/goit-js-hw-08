import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')
const textArea = document.querySelector(".feedback-form textarea")
const emailArea = document.querySelector('.feedback-form input')


form.addEventListener('submit', formOnSubmit)

form.addEventListener('input', throttle(OnAllFormSubmit, 250)) 

const formData = {};

localFormSubmit();

function OnAllFormSubmit(event) { 
    const name = event.target.name;
    const value = event.target.value;
    
    formData[name] = [value];

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    
}

function formOnSubmit(event) {
    event.preventDefault();
    
    console.log(JSON.stringify(formData));

    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
    
}

function localFormSubmit(event) { 

    const storage = localStorage.getItem("feedback-form-state", formData)
    const parsedStorage = JSON.parse(storage);

    if (parsedStorage) {
        textArea.value = parsedStorage.message 
        emailArea.value = parsedStorage.email
    }
}


