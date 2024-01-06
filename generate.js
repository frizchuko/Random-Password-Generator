const generatePassword = (length = 8) => {
    const passwordCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';

    for (i = 0; i < length; i++){
        let randomNumber = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters[randomNumber];
    }
    return password;
    
}
generatePassword();

var render = document.getElementById("generated");
render.innerText = password;

