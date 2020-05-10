// Hemos omitido los acentos en los comentarios por compatibilidad


function validar(formulario) {
  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errornombres").innerHTML = "El Nombre es obligatorio";
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerHTML = "Email inválido";
    return false;
  }

  if (formulario.contrasena.value.trim().length < 7) {
    document.getElementById("errorContrasena").innerHTML = "debe ser minimo 7 caracteres";
    return false;
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerHTML = "Confirmación no coincide";
    return false;
  }
  if (formulario.tipo.value == "-1") {
    document.getElementById("errorTipo").innerHTML = "El tipo de usuario es obligatorio";
    return false;
  }


  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerHTML = "Debe aceptar los términos y condiciones";
    return false;
  }

  return false;
  
  
}
