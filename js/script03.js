function mostrarPromocao() {

	//cria referencia aos elementos manipulados pelo programa

	var inVeiculo = document.getElementById("inVeiculo");
	var inPrecoVeiculo = document.getElementById("inPrecoVeiculo");

	var outVeiculo = document.getElementById("outVeiculo");
	var outEntrada = document.getElementById("outEntrada");
	var outParcela = document.getElementById("outParcela");


	//obtem conteudo dos campos de entrada
	var veiculo = inVeiculo.value;
	var preco = Number(inPrecoVeiculo.value);

	//calcula valor da entrada e das parecelas;
	var entrada = preco * 0.50;
	var parcela = (preco * 0.50) / 12;


	//altera conteudo dos paragrafos 
	outVeiculo.textContent = "Promoção " + veiculo;
	outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
	outParcela.textContent = "+ 12x R$: " + parcela.toFixed(2);


}

//criar referencia ao elemento btVerPromoçao (botão)
var btVerPromocao = document.getElementById("btVerPromocao");

//registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao);