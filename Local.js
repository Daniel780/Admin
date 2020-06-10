class local {
    constructor(id, name, description, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = image
    }
}


listaLocales = [];

var nuevoLocal = new local(1, "Restaurante", "VendenComida", "ee.PNG");

listaLocales.push(nuevoLocal);

function mostrarDatos(id){
    var datos = "";
    datos += listaLocales[id].name + "<br>";
    datos += listaLocales[id].description + "<br>";
    datos += "<img src =" + listaLocales[id].img +"> " + "<br>";
    return datos;
}

function mostarLocales(){
    var i;
    for(i = 0; i < listaLocales.lenght; i++){
        mostrarDatos(i);
    }
} 

$(document).ready(function(){
    $("#localForm").submit(function(){
    var name = document.getElementById("localName").value;
    var description= document.getElementById("localDescription").value;
    var img = document.getElementById("localPhoto").value;
    
    });
  });
