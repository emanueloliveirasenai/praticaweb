//Probosta: Faça um programa para ler as notas obtidas pelos alunos, e depois exibir um relatório das notas iguais
// ou supeiores a 7,5 e também no final, a quantidade de notas igual ou superior a 7,5.
function validaProc(){

    let vetor = [];
    let i;
    let contador = 0;

    for(i = 0; i < 3; i++){
        vetor[i] = parseFloat(prompt("Insira a " + (i+1) + "ª nota"));
    }

    console.log("\nOs alunos com notas iguais ou superiores a 7,5 são:\n");

    for(i = 0; i < 3; i++){
        if(vetor[i] >= 7.5){
            console.log("\nAluno " + (i+1) + " com nota " + vetor[i]);
            contador ++;
        }
    }

    console.log("\nO total de alunos com nota igual ou superior a 7,5 é: " + contador)

    return false;
}