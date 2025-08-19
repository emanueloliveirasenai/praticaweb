/*A empresa “SÓ CALCULO SEM PRECONCEITO” necessita agora de uma solução 
que alimente um vetor com 5 valores inteiros e também que solicite ao usuário a 
entrada de dados de um valor inteiro, após as devidas entradas de dados o programa 
deve multiplicar o valor informado pelo usuário por cada elemento do vetor sendo que 
o resultado deste cálculo deve ser armazenado em outro vetor, em suas respectivas 
posições. Como resultado deseja-se a impressão dos valores dos resultados dos 
cálculos, armazenados no segundo vetor.*/

function validaProc(){

    let vetor = [];
    let vetorResult = [];
    let numInt = 0;
    let resultado = [];
    let i;

    for(i = 0; i < 5; i++){
        vetor = parseInt(prompt("Insira o " + (i+1) + "º Valor: "));
    }


    numInt = parseInt(prompt("Insira o número que você quer multiplicar pelos números do vetor: "));

    for(i = 0; i < 5; i++){

        resultado [i] = vetor[i] * numInt;
        console.log("Os resultados são: \n" + resultado[i] + ", ")
    }

   

    return false;

}