//declarar funcao

function calcularTempo() {

	//criando referencia aos elementos da pagina HTML

	var inValor = document.getElementById("inValor");
	var inTempoUso = document.getElementById("inTempoUso");

	var outValor = document.getElementById("outValor");
	var outTempoUso = document.getElementById("outTempoUso");

 	//Entrada - Obtendo o conteudo dos elementos Html

 	var valorMinuto = Number(inValor.value);
 	var tempoUso = Number(inTempoUso.value);

    //Processamento 
    //Função matematica Math.ceil(num) arrendonda o valor para cima, se possuir decimais ele
    //retorna um numero inteiro
 	var tempoTotalUso = Math.ceil(tempoUso / 15);
    var precoTotalPagar = (tempoTotalUso * valorMinuto).toFixed(2);


 	//Altera o conteudo dos paragrafo, no caso H3 em HTML
	outValor.textContent = "O valor total é R$ " + precoTotalPagar;

}

   //cria referencia para o button na pagina HTML
	var btCalcularValor = document.getElementById("btCalcularValor");

	//Registra evento vinculado ao button da pagina HTML
	btCalcularValor.addEventListener('click', calcularTempo);


