

//Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
var id=/(\d+)/.exec(location.search)[0];

$(document).ready(function () {
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({url:"info.json"}).done(function(resultado){

    //Guarda el resultado en una variable
    var eventos = resultado.eventos;

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html=""
    html += "<div style='background-color: white; width:100%; Border-radius: 10px; margin: 10px;padding: 15px;padding-left: 20px;'>";
    html += "<h3 style=\"font-weight: 550; font-size: 35px; border-top: 1em; color: black;\">" + eventos[id-1].nombre + "<a></h3>";
    html += eventos[id-1].fecha + " - " + eventos[id-1].lugar;
    html += "<br>" + eventos[id-1].descripcion;
    html += "<br> <span style='color:rgb(71, 163, 163); font-size:22px'>Costo: " + eventos[id-1].precio + "</span>"; 
    html += "<br> <span style= 'color: orange; font-size:22px'>Invitados: " + eventos[id-1].invitados + "</span></div>";
    
    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = html


  });
});


