function validar()
{
    //Nombre y apellido
    let nombre = document.getElementById("nombre");
    let expNombre = /^[A-Za-zÑñÁÉÍÓÚáéíóú]+(\s[A-Za-zÑñÁÉÍÓÚáéíóú]+)*$/;
    if(!expNombre.test(nombre.value)){
        alert("Solo letras y espacios, máximo 25 caracteres");
        nombre.focus();
        return;
    }

    //Nombre usuario
    let usuario = document.getElementById("usuario");
    let expUsuario = /^[A-Za-zÑñÁÉÍÓÚáéíóú]+(\s[A-Za-zÑñÁÉÍÓÚáéíóú]+)*$/;
    if(!expUsuario.test(usuario.value)){
        alert("Solo letras y espacios, máximo 25 caracteres");
        nombre.focus();
        return;
    }

    //Correo Electronico

    //Numero telefonico
    let telefono = document.getElementById("telefono");
    let expTelefono = /^\d{9}$/;
    if(!telefono.value.match(expTelefono)){
        alert("Movil no valido");
        movil.focus();
        return;
    }

    //RUT

    //Comuna

    //Genero

    //suscripcion
    let suscripcion = document.getElementsByName("checkbox");
    let cont = 0;
    for(let i = 0; i < suscripcion.length; i++){
        if(suscripcion[i].checked){
            cont++;
        }
    if(cont>3){
        alert("Debe marcar menos de 3 casillas");
        return;
    }
    }
}