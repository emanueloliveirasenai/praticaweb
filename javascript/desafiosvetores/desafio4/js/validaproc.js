/*A empresa “ORDEM DECRESCENTE” necessita de uma solução que alimente um 
vetor com 4 valores numéricos inteiros. Como resultado deseja-se que imprima os 
valores na ordem inversa com que foram armazenadas, ou seja, do valor localizado 
na última posição para o valor localizado na primeira posição do vetor*/

function validaProc(){

    let vetor = [];
    let i;

    for(i = 0; i < 4; i++){
        vetor[i] = parseInt(prompt("Insira o " + (i+1) + "º Valor"))
        console.log("O número inserido na posição " + (i+1) + " do vetor é: " + vetor[i])
    }

    for(i = 3; i >= 0; i--){
        console.log("O número na posição " + (i+1) + " do vetor é " + vetor[i])
    }
    
    return false;
}