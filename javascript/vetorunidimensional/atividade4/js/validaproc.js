//Alimentar um vetor com 10 números reais e depois exibir os números localizados nas posições ímpares do vetor
function validaProc(){

    let vetor = [];
    let i;

    for(i = 0; i<10; i++){

        vetor [i] = parseFloat(prompt("Insira o " + (i+1) + "º número:"));

        if(i % 2 != 0){
            console.log("Vetor posição " + i + " = " + vetor[i]);
        }
    }



    return false;
}