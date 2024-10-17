function formulario() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        
        if (nombre === "" || correo === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            alert("Formulario enviado correctamente.");
            this.reset();
        }
    });
}

formulario();
