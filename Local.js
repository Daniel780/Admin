class local {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.img = image;
  }
}

class localCalificado {
  constructor(name, description, image, cal, comm) {
    this.name = name;
    this.description = description;
    this.img = image;
    this.cal = cal;
    this.comm = comm;
  }
}

listaLocales = [];
//Metodo que recibe los elementos del Form local
$(document).ready(function () {
  $("#localForm").submit(function () {
    var name = document.getElementById("localName").value;
    var description = document.getElementById("localDescription").value;
    var img = document.getElementById("localPhoto").value;
    guardarLocal(name, description, img);
  });
});

//GuardaLocal en un LocalStorage, asi almacenaremos los locales
function guardarLocal(name, description, photo) {
  var LocalTemporal = new local(name, description, photo);
  var LocalJSON = JSON.stringify(LocalTemporal);
  localStorage.setItem(LocalTemporal.name, LocalJSON);
  alert(localStorage.getItem(name));
}


function GuardarCalificacion(localKey, cal, comm) {
  JSONlocal = localStorage.getItem(localKey);
  localTemp = JSON.parse(JSONlocal);
  localCal = new localCalificado(localTemp.name, localTemp.description, localTemp.img, cal, comm);
  JSONlocal = JSON.stringify(localCal);
  localStorage.setItem(localKey,JSONlocal);
  alert(localStorage.getItem(localKey));

}

// Guardar
$(document).ready(function () {
  $("#LocalCalForm").submit(function () {
    var Calification = document.getElementById("LocalCal").value;
    var comment = document.getElementById("localComentario").value;
    GuardarCalificacion("Camilo", Calification, comment);
  });
});

