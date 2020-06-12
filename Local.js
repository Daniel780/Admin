class local {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.img = image
    }
}


listaLocales = [];

var nuevoLocal = new local("Restaurante", "VendenComida", "ee.PNG");

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

var contadorLocales=0;

$(document).ready(function(){
    $("#localForm").submit(function(){
    var name = document.getElementById("localName").value;
    var description= document.getElementById("localDescription").value;
    var img = document.getElementById("localPhoto").value;
    guardarLocal(name, description,img);
    });
  });

  function guardarLocal(name, description, photo){
    var LocalTemporal = new local(name, description, photo);
    var LocalJSON = JSON.stringify(LocalTemporal);
    localStorage.setItem(LocalTemporal.name, LocalJSON);
    alert(localStorage.getItem(LocalTemporal.name));
  }