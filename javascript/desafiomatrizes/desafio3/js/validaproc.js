/*A empresa “Multiplica para ganhar Ltda.” solicitou uma solução que leia uma matriz 
5 x 5 de números inteiros e gere outra matriz, de mesmo tamanho em que cada 
elemento seja o dobro de seu respectivo da matriz original. Mostrar a matriz original 
e a nova.*/

        function validaProc(){

            let matrizA = [];
            let linha = 5;
            let coluna = 5;
            let matrizB = [];
            let multiplica;

            for(i = 0; i < linha; i++){
                matrizA[i] = [];
                matrizB[i] = [];
                for(c = 0; c < coluna; c++){
                    matrizA[i][c] = Math.floor(Math.random() * 100) + 10;
                    matrizB[i][c] = matrizA[i][c] * 2;
                }
            }

            for(i = 0; i < linha; i++){
                for(c = 0; c < coluna; c++){
                    document.write(matrizA[i][c] + "&nbsp&nbsp");
                }
                document.write("<br>");
            }

            document.write("<br>Matriz multiplicada:<br><br>")

            for(i = 0; i < linha; i++){
                for(c = 0; c < coluna; c++){
                    document.write(matrizB[i][c] + "&nbsp&nbsp");
                }
                document.write("<br>");
            }

        }