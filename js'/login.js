// step 1: add click event handeler with the submit button
document.getElementById('btn-login').addEventListener('click', function(){
    // step 2:get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step 3: get password
    const passwordField = document.getElementById('user-password');
    const pass = passwordField.value;
    console.log(email, pass)
})