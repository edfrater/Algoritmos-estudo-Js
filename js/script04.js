
// declarando função 
function calcularPreco() {

	//criando referencia aos elementos da pagina HTML

	var inPeso = document.getElementById("inPeso");
	var inConsumo = document.getElementById("inConsumo");

	var outValorPagar = document.getElementById("outValorPagar");


	// Entrada - obter o conteudo dos campos de entrada

	var peso = Number(inPeso.value);
	var consumo = Number(inConsumo.value);

	//Processamento - calcular o valor a ser pago

	var valor = (peso / 1000) * consumo;

	//Saida - Altera o conteudo da linha de resposta que esta na tag H3

	outValorPagar.textContent = "varlor a pagar é R$: " + valor.toFixed(2);
	
}

	//Cria referencia ao elemento Button ( btCalcular )

	var btCalcularPreco = document.getElementById("btCalcularPreco");

	//registra um evento associado ao botão, para carregar uma função

	btCalcularPreco.addEventListener("click",calcularPreco);

