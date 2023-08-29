import { createUser } from "./DataBase.js"; 

let submitButon = document.getElementById("submitUser")

submitButon.addEventListener("click", () => {   
let userName = document.getElementById("exampleInputName").value
let userPicture = document.getElementById("inputPictureProfile").value
let email = document.getElementById("exampleInputEmail1").value
let password = document.getElementById("inputPassword").value
let passwordConfirm = document.getElementById("inputPasswordConfirm").value

    if(password !== passwordConfirm){
        window.alert("Las constraseñas no coinciden");
        return
    };
    let data = {
        name: userName,
        email: email,
        password: password,
        profilePicture: userPicture
    };
   let user = createUser(data);
   if(user) window.alert("Usuario registrado");
   window.location.replace("/html/login.html");
})

