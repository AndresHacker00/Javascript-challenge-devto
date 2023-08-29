let buttonOut = document.getElementById("signout");
buttonOut.addEventListener('click', () => {
    sigout();
})
const sigout = () => {
    let userloged = document.getElementById("navUserLoged");
    userloged.classList.add("d-none")
}