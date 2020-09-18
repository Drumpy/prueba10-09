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
		tabla += `<tr><td>${item.nombre}</td><td>$ ${item.precio}</td></tr>`;
	}
	tabla += `</tbody></table>`;

	document.getElementById('lista').innerHTML = tabla;
}