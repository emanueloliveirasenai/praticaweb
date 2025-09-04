/*O síndico do prédio “Balança mais não cai” solicitou uma solução que armazene em 
uma matriz a renda de cada família moradora de um edifício, calculando a média e o 
total de renda do mesmo. O prédio possui 6 andares e quatro apartamentos por 
andar.*/

        function validaProc(){
            
            let matriz = [];
            let linha = 6;
            let coluna = 4;
            let rendaTotal = 0;
            let total = linha * coluna;
            let media = 0;

            for(i = 0; i < linha; i++){
                matriz[i] = [];
                for(c = 0; c < coluna; c++){
                    matriz[i][c] = Math.floor(Math.random() * 5000) + 1200;
                    rendaTotal = rendaTotal + matriz[i][c];
                    document.write("<br>Renda informada Ap " + (c+1) + " Andar " + (i+1) + " é: " + matriz[i][c]);
                }
                document.write("<br>")
            }

            media = rendaTotal / total;

            document.write("<br>A renda total do prédio é: " + rendaTotal + "<br>");
            document.write("A renda média do prédio é: " + (media.toFixed(2)));

            return false;

        }
