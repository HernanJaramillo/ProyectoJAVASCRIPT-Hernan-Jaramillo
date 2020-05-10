// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var proximos = [];
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


  //Selecciona los eventos que sean posteriores a la fecha actual del JSON
  for(var i=0; i < eventos.length; i++){
    if (eventos[i].fecha > hoy){
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
  //Crea un string que contenga el HTML que describe el detalle del evento
  var html = ""
  //Recorre el arreglo y concatena el HTML para cada evento
  
for (var j = 0; j < proximos.length; j++){
  html += "<div style=\"background-color: white; width: 100%; padding:30px; border-radius: 10px; margin: 15px; \">";
		html += "<a style=\"font-weight: 550; font-size:35px; margin: 0px;\" href=\"detalle.html?id=" + proximos[j].id + "\">" + proximos[j].nombre + "</a>"
		html += "<p style=\"font-family:'Calibri'; margin:0px; font-size:22px; color:#a39e9e;\">" + proximos[j].fecha + " - " + proximos[j].lugar + " </p>"
    html += "<p style= \"margin:0px; font-size: 22px class=\"descr\">" + proximos[j].descripcion + "</p>"
    html += "<p style=\"color: rgb(71, 163, 163); font-size: 24px\">" + "Costo: " + proximos[j].precio  + "</p>"
		html += "</div>"
  }

  //Modifica el DOM agregando el html generado dentro del div con id=evento
  document.getElementById("proximos").innerHTML = html;
 
  })
});
