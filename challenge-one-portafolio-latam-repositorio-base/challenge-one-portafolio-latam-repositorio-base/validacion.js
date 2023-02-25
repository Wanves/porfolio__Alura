//Haz tú validación en javascript acá

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const parrafo = document.getElementById("warning")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    // parrafo.innerHTML = "";
    if(nombre.value.length < 6){
        warning += `El nombre no es valido--- <br>`;
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warning += `El email no es valido--- <br>`;
        entrar = true                        
    }
    if (asunto.value.length > 400){
        warning += `El asunto ingresado supera los 400 caracteres, vuelve a ingresar el asunto en manera más concisa--- <br>`;
        entrar = true  
    }
    if (mensaje.value.length > 500){
        warning += `El mensaje supera los 400 caracteres, vuelve a ingresar el mensaje en manera más concisa--- <br>`;
        entrar = true  
    }
    if(entrar){
        parrafo.innerHTML = warning
        
    }
    else{
        parrafo.innerHTML = "Enviado---"
    }
    
})