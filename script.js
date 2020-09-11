var lista = [];

function guardar() {
	var personas = {}; //defino el objeto
	var nombre = document.getElementById('producto').value; //obtengo los valores
	var precio = document.getElementById('precio').value;
	console.log(precio);

	personas.nombre = nombre; //guardo los valores
	personas.precio = precio;

	lista.push(personas); //agrego los valores al final de la colección
	mostrar(lista);

	localStorage.setItem('items', JSON.stringify(lista));
}

function mostrar(lista) {

	var tabla = `<table class="table mt-5">
	<thead>
		<tr>
	  	<th scope="col">Nombres</th>
	  	<th scope="col">Precio</th>
		</tr>
	</thead>
	<tbody>`;
	for (let item of lista) {
		tabla += `<tr><td>${item.nombre}</td><td>${item.precio}</td></tr>`;
	}
	tabla += `</tbody></table>`;

	document.getElementById('lista').innerHTML = tabla;
}

function ordenar() {
	lista.sort(function (ant, sig) {
		return ant.precio - sig.precio; //comparo el campo precio
	});
	mostrar(lista);
}

function ordenonombre() {
	lista.sort(function (ant, sig) { //comparando el campo nombre
		if (ant.nombre > sig.nombre) {
			return 1;
		}
		if (ant.nombre < sig.nombre) {
			return -1;
		}
		return 0;

	});
	mostrar(lista);
}