// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var proximos = [];
var pasados = [];
var hoy;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

  //Guarda el resultado en variables
  hoy = resultado.fechaActual;
  eventos = resultado.eventos;

  //Clasifica los eventos segun la fecha actual del JSON

  for(var i=0; i < eventos.length; i++){
    if (eventos[i].fecha >= hoy){
      proximos.push(eventos[i]);
    }
  }

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  proximos = proximos.sort(function(x,y){
    if (x.fecha > y.fecha){
      return 1;
    }
    return -1;
  });

  //Extrae solo dos eventos
  proximos = proximos.splice(0,2);

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  for(var i=0; i < eventos.length; i++){
    if (eventos[i].fecha < hoy){
      pasados.push(eventos[i]);
    }
  }
  //Extrae solo dos eventos
  pasados = pasados.splice(0,2);

  //Crea un string que contenga el HTML que describe el detalle del evento
  var html = ""

  //Recorre el arreglo y concatena el HTML para cada evento

  for(var j = 0; j < proximos.length; j++){
    html += "<div style=\"background-color: white; width: 47%; padding:30px; border-radius: 10px; margin: 15px; \">";
		html += "<a style=\"font-weight: 550; font-size:35px; margin: 0px;\" href=\"detalle.html?id=" + proximos[j].id + "\">" + proximos[j].nombre + "</a>"
		html += "<p style=\"font-family:'Calibri'; margin:0px; font-size:22px; color:#a39e9e;\">" + proximos[j].fecha + " </p>"
    html += "<p style= \"margin:0px; font-size: 22px class=\"descr\">" + proximos[j].descripcion + "</p>"
    html += "</div>"
  }
  //Modifica el DOM agregando el html generado
  document.getElementById("proximos").innerHTML = html

  //Crea un string que contenga el HTML que describe el detalle del evento
  var htmlpasado = ""
  //Recorre el arreglo y concatena el HTML para cada evento
  for(var j = 0; j < pasados.length; j++){
      htmlpasado += "<div style=\"background-color: white; width: 47%; padding:30px; border-radius: 10px; margin: 15px; \">";
		  htmlpasado += "<a style=\"font-weight: 550; font-size:35px; margin: 0px;\" href=\"detalle.html?id=" + pasados[j].id + "\">" + pasados[j].nombre + "</a>"
		  htmlpasado += "<p style=\"font-family:'Calibri'; margin:0px; font-size:22px; color:#a39e9e;\">" + pasados[j].fecha + " </p>"
      htmlpasado += "<p style= \"margin:0px; font-size: 22px class=\"descr\">" + pasados[j].descripcion + "</p>"
      htmlpasado += "</div>"
  }
  //Modifica el DOM agregando el html generado
  document.getElementById("pasados").innerHTML = htmlpasado
})
});
