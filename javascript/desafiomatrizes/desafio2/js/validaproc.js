/*A empresa “Só soma Ltda.” necessita de uma solução que leia uma matriz 4x3 de 
números reais e mostre a soma de seus elementos.*/

        function validaProc(){

            let matriz = [];
            let linha = 4;
            let coluna = 3;
            let acumulador = 0;

            for(i=0; i<linha; i++){
                matriz[i] = [];
                for(c=0; c<coluna; c++){
                    matriz[i][c] = Math.floor(Math.random() * 150 ) + 10;
                    acumulador = acumulador + matriz[i][c];
                    document.write(matriz[i][c] + "&nbsp&nbsp");
                }
                document.write("<br>");
            }

            document.write("<br>A soma dos números da matriz é: " + acumulador);

        }