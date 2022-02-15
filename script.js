//Get all DOM elements needed
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("pword");

const form = document.getElementById("form");


form.addEventListener("submit", (e) => {
    //Prevent form from submitting
    e.preventDefault();


    //validate form imputs
    let isFirstNameValid = checkFirstName();
    let isLastNameValid = checkLastName();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();

    //A valid form has all the inputs valid!!!
    let isFormValid = isFirstNameValid &&
    isLastNameValid && isEmailValid && isPasswordValid

    //submit valid form to server
    if(isFormValid){
        alert("THANKS FOR SUBMITTING THE FORM!");
    }
});


// Utility functions
//1. Check that email is valid

const isEmailValid = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};


//2. Check that inputs are not empty
const isRequired = value => value === "" ? false :true;

//3. To show the error message
const showError = (input, message) => {
    const formField = input.parentElement;

   
    formField.classList.add('error');
    const errorMsg = formField.querySelector("small");
    errorMsg.textContent = message;
    // input.placeholder = "";

}

const removeError =(input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    // const errorMsg = formField.querySelector('small');
    // errorMsg.textContent = "";
}

//Input Field Validating Functions

//1. First Name field validation
const checkFirstName = () => {
    let valid = false;
    const firstname = fname.value;

    //If firstname input is empty
    if(!isRequired(firstname)){
        showError(fname, "First Name cannot be empty!");
        fname.focus();
    }
    else{
        removeError(fname);
        valid = true;
    }
    return valid;
}

//2. Last Name field validation
const checkLastName = () => {
    let valid = false;

    const lastname = lname.value;

    if (!isRequired(lastname)){
        showError(lname, "Last Name cannot be empty!")
        lname.focus();
    }
    else{
        removeError(lname);
        valid = true;
    }
    return valid;
}

//3. Email field validation
const checkEmail = () => {
    let valid = false;

    const emailVal = email.value;

    if(!isRequired(emailVal)){
        showError(email, "Please enter your email");
        email.focus()
    }
    else if(!isEmailValid(emailVal)){
        showError(email, "Looks like this is not an email!");
    }
    else{
        removeError(email);
        valid = true;
    }
    return valid;
}

//4. Password field validation
const checkPassword = () => {
    let valid = false;

    const password1 = password.value;

    if(!isRequired(password1)){
        showError(password, "Password cannot be empty!");
        password.focus();
    }
    else{
        removeError(password);
        valid = true;
    }
    return valid;
}