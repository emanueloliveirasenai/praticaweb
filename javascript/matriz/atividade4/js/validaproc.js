/*Criar, alimentar e imprimir os dados de uma matriz 2x3*/
function validaProc(){

    let matriz = [];
    let linha = 2;
    let coluna = 3;

    for(i = 0; i < linha; i++){
        matriz[i] = [];
        for(c = 0; c < coluna; c++){
            matriz[i][c] = parseInt(prompt("Insira o " + (c+1) + "º número da " + (i+1) + "ª coluna:"));

            document.write("O número inserido da " + (c + 1 + "ª coluna da " + (i+1) + "ª linha foi: " + matriz[i][c] + "<br>"))
        }
    }

    document.write("<br>Impressão da matriz: <br>")

    for(i = 0; i < linha; i++){
        for(c = 0; c < coluna; c++){
            document.write(matriz[i][c] + "&nbsp&nbsp");
        }
        document.write("<br>");
    }

    return false;
}