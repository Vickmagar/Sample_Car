document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Verifica si el nombre de usuario y la contraseña ingresados coinciden con "service" y "engineer"
    if (username === "service" && password === "engineer") {
        // Si las credenciales son correctas, redirige a la página menu.html
        window.location.href = "menu.html";
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        //alert("Nombre de usuario o contraseña incorrectos.");
    }

    console.log("Inicio de sesión:", username, password);
});