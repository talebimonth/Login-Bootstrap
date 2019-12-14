constraints = {
    username: 'required|alpha',
    password: 'required|alpha_num',
    email: 'required|email'
}

const errorMessages = {
    required: 'this field is required',
    alpha: 'this field must be an alphabet'
}

const inputFields = document.querySelectorAll('.form-control');

function retrieveInputField(e) {
    const info = {
        [this.name]: this.value
    }

    const validation = new Validator(info, constraints);
    validation.passes();
    let errorMessage = validation.errors.first(this.name)
    if (errorMessage == false) {
        errorMessage = "";
    } 
    document.querySelector(`#${this.name}`).innerHTML = errorMessage
}


for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener('input', retrieveInputField);
}