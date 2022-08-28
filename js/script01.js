function mostrarOla() {

	var nome = document.getElementById("nome").value;

	document.getElementById("resposta").textContent = "Ola " + nome;

}

var mostrar = document.getElementById("mostrar");

mostrar.addEventListener("click", mostrarOla);

