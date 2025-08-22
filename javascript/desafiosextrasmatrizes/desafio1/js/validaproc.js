/*Faça um programa que peça ao usuário os valores de uma matriz 4x4 e mostre os
valores das diagonais dessa matriz.*/
function validaProc(){

    let matriz = [];
    let linha = 4;
    let coluna = 4;

    for(i = 0; i < linha; i++){
        matriz[i] = [];
        for(c = 0; c < coluna; c++){
            matriz[i][c] = Math.floor(Math.random() * 99) + 10;
        }
    }

    document.write("Matriz Principal: <br>")
    for(i = 0; i < linha; i++){
        for(c = 0; c < coluna; c++){
            document.write(matriz[i][c] + "&nbsp&nbsp")
        }
        document.write("<br>")
    }

    document.write("<br>Matriz diagonal <br>")

    for(i = 0; i < linha; i++){
            document.write(matriz[i][i] + "&nbsp&nbsp")
            document.write("<br>")
    }

    document.write("<br>Matriz diagonal secundária<br>")

    for(i = 0; i < linha; i++){
        document.write(matriz[i][4 -1 - i] + "&nbsp&nbsp")
        document.write("<br>")
    }
}