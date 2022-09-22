let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let password = document.querySelector("#password");

let sizePassword = document.querySelector("#valor");

let conteinerPassword = document.querySelector("#conteiner-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    console.log(pass);
    conteinerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada para a área de transferência!");
    navigator.clipboard.writeText(novaSenha);
}