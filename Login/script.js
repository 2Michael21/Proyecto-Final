function validarLogin() {
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    // Validación de campos
    if (correo.trim() === "" || contrasena.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(correo)) {
        alert("El correo electrónico no es válido.");
        return;
    }

    // Si la validación es exitosa, redirige al usuario a la página principal.
    window.location.href = "../Pag_principal/pag_1.html";
}