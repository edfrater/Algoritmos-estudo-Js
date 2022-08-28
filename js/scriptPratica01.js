// declaração da função

function calcularPromocao () {

	//criando referencia aos elementos da pagina HTML

	var	inMedicamento = document.getElementById('inMedicamento');
	var	inPreco = document.getElementById('inPreco');

	var outMedicamento = document.getElementById('outMedicamento');
	var outValor = document.getElementById('outValor');

	//Entrada - obter conteudo dos campos da pagina HTML

	//abaixo o nome do medicamento fornecido pelo usuário atribuido a variavel medicamento
	var medicamento = inMedicamento.value;

	//Procesamento - Calcular desconto de acordo com medicamento

	var precoMedicamento = Number(inPreco.value);
	var resultDesconto = (precoMedicamento * 2) - 0.30;

	//altera o conteudo dos paragrafos dos elementos html h3

	outMedicamento.textContent = "Promoção de : " + medicamento;
	outValor.textContent = "Leve 2 por apenas " + resultDesconto.toFixed(2);

}

	//Cria referencia ao elemento Button ( btCalcularPromocao)
	var btCalcularPromocao = document.getElementById("btCalcularPromocao");

    //registra um evento associado ao botão, para carregar uma função
	btCalcularPromocao.addEventListener('click', calcularPromocao);



