let users = {};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".signupbtn").addEventListener("click", function () {
        signUp();
    });

    document.querySelector(".loginbtn").addEventListener("click", function () {
        login();
    });
});
function userExists(email) {
    return users.hasOwnProperty(email);
}
function addUser(email, password) {
    users[email] = {
        email: email,
        password: password
    };
}
function signUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("psw").value;
    let confirmPassword = document.getElementById("psw-repeat").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    else if (userExists(email)) {
        alert("Username already exists");
        return;
    }
    else{
      addUser(email, password);
      document.getElementById("email").value = "";
      document.getElementById("psw").value = "";
      document.getElementById("psw-repeat").value = "";
      alert("User signed up successfully!");
      window.location.href = "main.html";
    }
}
function login() {
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-psw").value;
    if (!userExists(email)) {
        alert("User not found");
        return;
    }
    else if (users[email].password.trim() !== password.trim()) {
        alert("Incorrect password");
        return;
    }
    else {
        alert("Login successful!");
        document.getElementById("login-email").value = "";
        document.getElementById("login-psw").value = "";
        window.location.href = "main.html";
    }
}
