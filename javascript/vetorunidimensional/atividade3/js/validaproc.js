            //Faça um programa para gerar um vetor de 10 posições, onda cada elemento corresponde ao quadrado de sua posição.
            //Imprima depois os dados armazenados no vetor...
            function validaProc(){

                let vetor = [];
                let i;

                for(i = 0; i < 10; i++){
                    vetor[i] = (i+1) * (i+1);
                }

                for(i = 0; i < 10; i++){
                    console.log("Vetor posição " + (i+1) + " = " + vetor[i])
                }

                return false;
            }