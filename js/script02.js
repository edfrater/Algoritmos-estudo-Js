function converterDuracao() {

	// Cria referencia aos elementos da pagina HTML 

	var inTitulo = document.getElementById("inTitulo");
	var inDuracao = document.getElementById("inDuracao");

	var outTitulo = document.getElementById("outTitulo");
	var outResposta = document.getElementById("outResposta");



	//obtem conteudo dos campos de entrada;

	var titulo = inTitulo.value;
	var duracao = inDuracao.value;


	//arredonda para baixo o resultado da divisão;
	var horas = Math.floor(duracao / 60);


	//obtem o resto da divisão entre os numeros
	var minutos = duracao % 60;

	//altera o conteudo dos paragrafos de resposta;
	outTitulo.textContent = titulo;
	outResposta.textContent = horas + "horas(s) e " + minutos + " minutos(s)";
 }

 //Cria referencia ao elemento btConverter (botão);
 var btConverter = document.getElementById("btConverter");

 //registra um evento associado ao botão, para carregar uma função;
 btConverter.addEventListener("click", converterDuracao);

