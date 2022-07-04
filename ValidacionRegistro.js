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
}