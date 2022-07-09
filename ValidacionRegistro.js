function validar()
{
    //Nombre y apellido
    let nombre = document.getElementById("txt_NombreYApellido");
    let expNombre = /^[A-Za-zÑñÁÉÍÓÚáéíóú]+(\s[A-Za-zÑñÁÉÍÓÚáéíóú]+)*$/;
    if(!expNombre.test(nombre.value)){
        alert("Solo letras y espacios, máximo 25 caracteres");
        nombre.focus();
        return false;
    }

    //Nombre usuario
    let usuario = document.getElementById("txt_NombreDeUsuario");
    let expUsuario = /^[A-Za-zÑñÁÉÍÓÚáéíóú]+(\s[A-Za-zÑñÁÉÍÓÚáéíóú]+)*$/;
    if(!expUsuario.test(usuario.value)){
        alert("Solo letras y espacios, máximo 25 caracteres");
        nombre.focus();
        return false;
    }

    //Correo Electronico
    // innecesario, el input:email automaticamente pide un formato de correo

    //Numero telefonico
    let telefono = document.getElementById("txt_NumeroTelefonico");
    let expTelefono = /^\d{9}$/;
    if(!telefono.value.match(expTelefono)){
        alert("Movil no valido");
        movil.focus();
        return false;
    }

    //RUT
    let rut = document.getElementById("txt_RUTDNI");
    let expRut = /^\d{8}-\d{1}$/; //formato 12345678-9
    if (!rut.value.match(expRut)) {
        alert("Formato RUT no valido");
        rut.focus();
        return false;
    }

    //Comuna
    let comuna = document.formulario.slc_Comuna;
    if (comuna.value.length==0) {
        alert("Debe seleccionar una comuna");
        comuna.focus();
        return false;
    }

    //Genero
    let genero = document.getElementsByName("rdo_Genero");
    let seleccionado = false;
    for(let i=0; i<genero.length; i++) {
        // por cada radiobutton rdo_Genero verifica que uno este marcado
        if(genero[i].checked) {
            // si uno de los 3 rdo_Genero esta marcado, seleccionado = true
            seleccionado = true;
            break;
        }
    }
    if(!seleccionado) { // solo entra si no se ha seleccionado ningun rdo_Genero
        // si seleccionado = false: ningun rdo_Genero esta marcado, entonces mensaje
        alert("Debe seleccionar un genero");
        return false;
    }

    //acepta EULA
    let contrato = document.getElementsByName("rdo_EULAyOtros");
    if(!contrato[0].checked) {
        alert("Debe aceptar el contrato");
        return false;
    }

    alert("Registrado");
    alert("Nombre y Apellido: "+nombre.value+"\nNombre de Usuario: "+usuario.value+"\nTelefono: "+ telefono.value+"\nRUT: "+rut.value+"\nComuna: "+comuna.value)

    // recursos utilizados
    // https://www.adictosaltrabajo.com/2015/01/29/regexsam/
    // https://uniwebsidad.com/libros/javascript/capitulo-7/validacion
}