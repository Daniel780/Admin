class local {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.img = image;
    this.cal = [];
    this.comm = [];
  }
}

function addCal(local, cal, comm) {
  local.cal.push(cal);
  local.comm.push(comm);
}

listaLocales = [];
submittedImage = "";
imagenPath = "";

function addImg(img) {
  submittedImage = img;
}

function getImg() {
  return submittedImage;
}

function submitImage() {
  $("document").ready(function () {

    $('input[type=file]').on("change", function () {

      var $files = $(this).get(0).files;

      if ($files.length) {

        // Replace ctrlq with your own API key
        var apiUrl = 'https://api.imgur.com/3/image';
        var apiKey = 'f852841efee7f2a';

        var formData = new FormData();
        formData.append("image", $files[0]);

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": apiUrl,
          "method": "POST",
          "datatype": "json",
          "headers": {
            "Authorization": "Client-ID " + apiKey
          },
          "processData": false,
          "contentType": false,
          "data": formData,
          beforeSend: function (xhr) {
            console.log("Uploading");
          },
          success: function (res) {

            console.log(res.data.link);
            addImg(res.data.link);
            imagenPath = getImg();

            $('body').append('<img src="' + getImg() + '" />');
          },
          error: function () {
            alert("Failed");
          }
        }
        $.ajax(settings).done(function (response) {
          console.log("Done");
        });
      }
    });
  });
}

//Metodo que recibe los elementos del Form local
$(document).ready(function () {
  $("#localForm").submit(function () {
    var name = document.getElementById("localName").value;
    var description = document.getElementById("localDescription").value;
    var img = imagenPath;
    guardarLocal(name, description, img);
  });
});

//GuardaLocal en un LocalStorage, asi almacenaremos los locales
function guardarLocal(name, description, photo) {
  var LocalTemporal = new local(name, description, photo);
  var LocalJSON = JSON.stringify(LocalTemporal);
  localStorage.setItem(LocalTemporal.name, LocalJSON);
}
function mostrarIndex() {
  var i;
  var l = localStorage.length;
  var o = "";
  for (i = 0; i < l; i++) {
    o += '<a href=';
    o += '"MostrarLocal.html?indice=';
    o += i;
    o += '"id = "MostrarLocal"'
    o += 'class="list-group-item">';
    o += localStorage.key(i)
    o += '</a>';
  }
  return o;
}

function getImagen(indice) {
  var nombre = " ";
  nombre = localStorage.key(indice);
  var d = JSON.parse(localStorage.getItem(nombre));
  return d.img;
}

function getDescription(indice) {
  var nombre = " ";
  nombre = localStorage.key(indice);
  var d = JSON.parse(localStorage.getItem(nombre));
  return d.description;
}


function getName(indice) {
  return localStorage.key(indice);
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



function GuardarCalificacion(localKey, cal, comm) {
  JSONlocal = localStorage.getItem(localKey);
  localTemp = JSON.parse(JSONlocal);
  addCal(localTemp, cal, comm);
  JSONlocal = JSON.stringify(localTemp);
  localStorage.setItem(localKey, JSONlocal);

}

// Guardar
$(document).ready(function () {
  $("#LocalCalForm").submit(function () {
    var Calification = document.getElementById("LocalCal").value;
    var comment = document.getElementById("localComentario").value;
    GuardarCalificacion(document.getElementById("Name").innerHTML, Calification, comment);
  });
});

function mostrarCalificaciones(key) {
  JSONlocal = localStorage.getItem(key);
  localTemp = JSON.parse(JSONlocal);
  var promedio=0;
  for (i = 0; i < localTemp.cal.length; ++i) {
    promedio = promedio + parseInt(localTemp.cal[i]);
    document.getElementById('ListaCaliciones').innerHTML +=
      '<li class =\"list-group-item\">'
      + '<b>' + "Calificacion: " + '</b>' + localTemp.cal[i]
      + "</br>"
      + '<b>' + "Comentario: " + '</b>' + localTemp.comm[i]
      + '</li>';
  }
  promedio =promedio/localTemp.cal.length;
  document.getElementById('promedioCal').innerHTML += '<b>' + promedio + '</b>';
}