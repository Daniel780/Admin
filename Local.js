class local {
    constructor(id, name, description, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = image
    }
}


listaLocales = [];

var nuevoLocal = new local(1, "Restaurante", "VendenComida", 1);

listaLocales.push(nuevoLocal);

function mostrarDatos(id){
    alert(listaLocales[0].name);
}
