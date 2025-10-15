document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    
 
    const nombreGuardado = localStorage.getItem("nombreUsuario");
    const apellidoGuardado = localStorage.getItem("apellidoUsuario");

    if (!nombreGuardado || !apellidoGuardado) {
      
      const nombre = prompt("Por favor, ingresa tu nombre:");
      const apellido = prompt("Por favor, ingresa tu apellido:");

      if (nombre && apellido && nombre.trim() !== "" && apellido.trim() !== "") {
        localStorage.setItem("nombreUsuario", nombre.trim());
        localStorage.setItem("apellidoUsuario", apellido.trim());
        alert("¡Bienvenido, " + nombre + " " + apellido + "!");
      }
    } else {
      
      console.log("Bienvenido de nuevo, " + nombreGuardado + " " + apellidoGuardado + "!");
    }
  }
});
