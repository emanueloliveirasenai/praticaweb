    /*Alimentar uma matriz (3x3) de valores inteiros, multiplicando essa matriz por um valor informado pelo usuário e
    escrevendo o conteúdo a matriz multiplicada.*/

    function validaProc(){

        let matriz = [];
        let linha = 3;
        let coluna = 3;
        let numero;

        for(i = 0; i < linha; i++){
            matriz[i] = [];
            for(c = 0; c < coluna; c++){

                matriz[i][c] = parseFloat(prompt("Insira o " + (i+1) + "º número da coluna " + (c+1)));
                console.log("O valor informado na linha " + i + " e coluna " + c + " é " + matriz[i][c]);
            }
        }

        numero = parseFloat(prompt("Insira o número que você deseja multiplicar a matriz!"));

        for(i = 0; i < linha; i++){
            for(c = 0; c < coluna; c++){
                matriz[i][c] = matriz[i][c] * numero;
                document.write(matriz[i][c] + "&nbsp&nbsp");
            }
            document.write("<br>");
        }

        return false;

    }
