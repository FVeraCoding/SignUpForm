document.addEventListener("DOMContentLoaded", () => {

    const nombre = document.querySelector("#nombre");
    const apellidos = document.querySelector("#apellidos");
    const email = document.querySelector("#email");
    const contraseña = document.querySelector("#contraseña");
    const enviar = document.querySelector("#enviar");
    const error = document.querySelectorAll(".error");


    let usuario = {
        nombre: "",
        apellidos: "",
        email: "",
        password: ""
    };

    nombre.addEventListener("change", (e) => {
        let validacion = e.target.value;

        if(validacion != ""){
            usuario.nombre = e.target.value;
        }
    })

    apellidos.addEventListener("change", (e) => {
        let validacion = e.target.value;

        if(validacion != ""){
            usuario.apellidos = e.target.value;
        }
    })

    email.addEventListener("change", (e) => {
        let validacion = validarEmail(e.target.value);

        if(validacion == true){
            usuario.email = e.target.value;
        }else{
            
            mostrarError(email, 2);
        }
        
    })

    contraseña.addEventListener("change", (e) => {
        let validacion = e.target.value;

        if(validacion != ""){
            usuario.password = e.target.value;
        }
        
    })

    enviar.addEventListener("click", (e) => {
        e.preventDefault();

        

        if(usuario.nombre == ""){

           mostrarError(nombre, 0);

        }
        
        if(usuario.apellidos == ""){

            mostrarError(apellidos, 1)

        }
        
        if(usuario.password == ""){
            
            mostrarError(contraseña, 3);

        }
        
        if(usuario.email == ""){

            mostrarError(email, 2);
        }

        console.log(usuario);
    })

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function mostrarError(campo, index) {
        campo.style.marginBottom = 0;
        campo.style.borderColor = "hsl(0, 100%, 74%)";
        error[index].style.display = "block";
    
        setTimeout(() => {
            campo.style.marginBottom = "2rem";
            campo.style.borderColor = "rgba(128, 128, 128, 0.689)";
            error[index].style.display = "none";
        }, 3000);
    }
    

})