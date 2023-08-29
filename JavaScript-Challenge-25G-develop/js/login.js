import { login } from "./DataBase.js";

let button = document.getElementById("login")
let registerButton = document.getElementById("register")


button.addEventListener('click', async () => {
    let mail = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let data = {
        email: mail,
        password: password,
    };
    let userToLogin = await login(data);
    
    localStorage.setItem("token", userToLogin.data);
    if(userToLogin){
        window.location.replace("/index.html");        
    } else {
        window.alert("unauthorized")
        window.window.location.replace("/login.html");
    }
})


registerButton.addEventListener('click', () => {
    window.location.replace("../html/createUser.html");
})