//Function to generate a password:
function generatePassword(length) {
    const charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ! @#$%^&*0123456789';
    let password='';
    //Random index generator
    for (let i=0; i<length; i++) {
        const randomIndex=Math.floor(Math.random()*charset.length);
password +=charset[randomIndex];


    }
   return password;
}
//Controlling how long our password is going to be:
function updatePasswordDisplay() {
    const passwordLength=10;
    const password=generatePassword(passwordLength);
    //display password on window:
    document.getElementById('password').textContent=password;
}
//Generate password when a button is clicked:
document.getElementById('password-btn').addEventListener('click', updatePasswordDisplay);

