// Podmiana imienia po zalogowaniu
const loginBtn = document.querySelector(".login-btn");
const userLogin = document.querySelector(".user-login");


loginBtn.addEventListener("click", function() {
    userLogin.textContent = "User";
    localStorage.setItem("user", userLogin.textContent);
    // console.log(localStorage.getItem("user"));
})

// code executed 1000 times - duration of the execution:
// innerHTML - 20s
// innerText - 318s
// textContent - 5s

if (localStorage.user) {
    userLogin.textContent = localStorage.getItem("user");
}


// Usuwam imię z localStorage po kliknięciu logout
const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("user");
    userLogin.textContent = "Anonymous";
})

