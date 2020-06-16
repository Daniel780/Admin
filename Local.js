class local {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.img = image
    }
}


listaLocales = [];
 
//Metodo que recibe los elementos del Form
$(document).ready(function(){
    $("#localForm").submit(function(){
    var name = document.getElementById("localName").value;
    var description= document.getElementById("localDescription").value;
    var img = document.getElementById("localPhoto").value;
    guardarLocal(name, description,img);
    });
  });

  //GuardaLocal en un LocalStorage, asi almacenaremos los locales
  function guardarLocal(name, description, photo){
    var LocalTemporal = new local(name, description, photo);
    var LocalJSON = JSON.stringify(LocalTemporal);
    localStorage.setItem(LocalTemporal.name, LocalJSON);
  }



function mostrarDatos(id){
    var datos = "";
    datos += listaLocales[id].name + "<li>";
    datos += listaLocales[id].description + "<li>";
    datos += "<img src =" + listaLocales[id].img +"> " + "<li>";
    return datos;
}
function getName(id){
	var datos="";
	datos += listaLocales[id].name + "<br>";
	 return datos;
}
function getDescription(id){
	var datos="";
	datos += listaLocales[id].description + "<br>";
	 return datos;
}
function getImg(id){
	var datos="";
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
    $("#LocalCalForm").submit(function(){
    var Calification = document.getElementById("LocalCal").value;
    var comment = document.getElementById("localComentario").value;
    alert(Calification + " " + comment);
    });
  });

  