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
submittedImage;

function addImg(img){
    submittedImage = img;
}

function getImg(){
    return submittedImage;
}

function submitImage(){
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
function mostrarIndex(){
	var i;
	var l = localStorage.length;
	var o ="";
	for(i=0; i < l;i++){
		o += '<a href=';
		o+= '"MostrarLocal.html?indice=';
		o+= i;
		o+= '"id = "MostrarLocal"'
		o+= 'class="list-group-item">';
		o += localStorage.key(i)
		o+= '</a>';
		}
	return o;
}

function getDescription(indice){
	var nombre = " ";
	nombre = localStorage.key(indice);
	var d = JSON.parse(localStorage.getItem(nombre));
	return d.description;
}

function getName(indice){
	return localStorage.key(indice);
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

