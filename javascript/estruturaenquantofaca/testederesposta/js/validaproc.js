function validaProc() {
    const areaResultado = document.getElementById('areaResultado');
    areaResultado.innerHTML = '';

    let somaGeralNotas = 0;
    let alunos_escola = 0;
    let relatorioHTML = '<h3>Resultados Detalhados:</h3>';

    for (let turma = 1; turma <= 5; turma++) {
        let aprovadosTurma = 0;
        let somaNotasTurma = 0;

        let numeroAlunos = parseInt(prompt("Quantos alunos tem na turma " + turma + "?"));

        if (isNaN(numeroAlunos) || numeroAlunos <= 0) {
            alert("Número de alunos inválido para a turma " + turma + ". Pulando para a próxima.");
            continue;
        }

        for (let aluno = 1; aluno <= numeroAlunos; aluno++) {
            let nota = parseFloat(prompt("Digite a nota do " + aluno + "º aluno da turma " + turma));
            
            if (isNaN(nota)) {
                alert("Nota inválida. Será considerada como 0.");
                nota = 0;
            }

            if (nota >= 7) {
                aprovadosTurma++;
            }
            somaNotasTurma = somaNotasTurma + nota;
        }

        relatorioHTML += `<p>A turma ${turma} teve <strong>${aprovadosTurma}</strong> alunos aprovados.</p>`;

        somaGeralNotas = somaGeralNotas + somaNotasTurma;
        alunos_escola = alunos_escola + numeroAlunos;
    }

    let mediaGeral = somaGeralNotas / alunos_escola;
    
    relatorioHTML += '<hr>';

    if (alunos_escola > 0) {
        relatorioHTML += `<p class="final">A média geral da escola foi: <strong>${mediaGeral.toFixed(2)}</strong></p>`;
    } else {
        relatorioHTML += `<p class="final">Nenhum aluno foi cadastrado!</p>`;
    }

    areaResultado.innerHTML = relatorioHTML;

    return false;
}