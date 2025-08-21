/*O professor “Ludovico Volpato” necessita de uma solução em que dada uma matriz 
de 4x5 elementos, fazer um algoritmo para calcular a soma de cada linha e a soma 
de todos os elementos.*/

function validaProc(){

    let matriz = [];
    let linha = 4;
    let coluna = 5;
    let soma = 0;
    let somadaLinha = [];

    for(i = 0; i < linha; i++){
        matriz[i] = [];
        somadaLinha[i] = 0;
        for(c = 0; c < coluna; c++){
            matriz[i][c] = Math.floor(Math.random() * 100) + 10;
            soma = soma + matriz[i][c];
            somadaLinha[i] = somadaLinha[i] + matriz[i][c];
        }
    }
    
    document.write("Matriz original:<br><br>");
    for(i = 0; i < linha; i++){
        for(c = 0; c < coluna; c++){
            document.write(matriz[i][c] + "&nbsp&nbsp");
        }
        document.write("<br>");
    }

    document.write("<br>");

    for(i = 0; i < linha; i++){
            document.write("O resultado da soma da linha " + (i+1) + " é: " + somadaLinha[i]);
            document.write("<br>");
    }

    document.write("<br><br>A soma de todos os elementos da matriz é: " + soma);
}