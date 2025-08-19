/*Um professor do SENAI gostaria de uma aplicação que fizesse o cálculo da média de 
seus 5 (cinco) alunos no bimestre. Como o bimestre é composto por 2 (duas) notas, 
crie 2 (dois) vetores para armazenar cada uma das notas dos alunos. Depois, crie 
outro vetor com o resultado da média dos alunos, seguindo a seguinte fórmula:
Média da Nota[1] = (Nota do vetor A[1] + Nota do vetor B[1]) / 2*/
function validaProc(){

    let vetorA = [];
    let vetorB = [];
    let mediaNota = [];
    let i;

    for(i = 0; i < 5; i++){
        vetorA [i] = parseFloat(prompt("Insira a 1ª nota do aluno " + (i+1)))
        vetorB [i] = parseFloat(prompt("Insira a 2º nota do aluno " +(i+1)))
        mediaNota[i] = (vetorA[i] + vetorB[i]) / 2
    }

    mediaNota[i] = (vetorA[i] + vetorB[i]) / 2

    for(i = 0; i < 5; i++){
        console.log("A média do aluno " + (i+1) + " é: " + mediaNota[i])
    }

    return false;

}