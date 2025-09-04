    /*Crie uma matriz (2x2) onde o valor de cada elemento dentro da matriz é a soma
    dos índices da sua posição*/
    function validaProc(){

        let matriz = [];
        let linha = 2;
        let coluna = 2;
        let valorMatriz;

        for(i = 0; i < linha; i++){
            matriz[i] = [];
            for(c = 0; c < coluna; c++){
                valorMatriz = i + c;
                matriz[i][c] = valorMatriz;
            }
        }

        document.write("Valor da matriz: <br>");

        for(i = 0; i < linha; i++){
            for(c = 0; c < coluna; c++){
                document.write(matriz[i][c] + "&nbsp&nbsp");
            }
            document.write("<br>");
        }
        
        return false;
    }