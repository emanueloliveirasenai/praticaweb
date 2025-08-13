function validaProc() {

    let somaGeralNotas = 0;
    let alunos_escola = 0;
    let turma = 1;

    do {
        alert("Iniciando cadastro da turma " + turma);

        let aprovadosTurma = 0;
        let somaNotasTurma = 0;
        let numeroAlunos = parseInt(prompt("Quantos alunos tem na turma " + turma + "?"));
        let aluno = 1;

        if (numeroAlunos > 0) {
            do {
                let nota = parseFloat(prompt("Digite a nota do " + aluno + "º aluno da turma " + turma));

                if (nota >= 7) {
                    aprovadosTurma++;
                }

                somaNotasTurma = somaNotasTurma + nota;
                aluno++;
            } while (aluno <= numeroAlunos);
        }

        console.log("A turma " + turma + " teve " + aprovadosTurma + " alunos com média maior ou igual a 7");

        somaGeralNotas = somaGeralNotas + somaNotasTurma;
        alunos_escola = alunos_escola + numeroAlunos;
        turma++;

    } while (turma <= 5);

    if (alunos_escola > 0) {
        let mediaGeral = somaGeralNotas / alunos_escola;
        console.log("A média geral da escola foi: " + mediaGeral.toFixed(2));
    } else {
        console.log("Nenhum aluno foi cadastrado!");
    }
}