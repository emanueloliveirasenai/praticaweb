/*Construa um algoritmo para ler uma matriz (2x2) de inteiros e imprimir
a soma dos elementos de um linha fornecida pelo usuário*/
function validaProc() {
    let matriz = [];
    let linhas = 2;
    let colunas = 2;
    let acum = 0;

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let c = 0; c < colunas; c++) {
            matriz[i][c] = parseInt(prompt("Insira o elemento da linha " + (i + 1) + ", coluna " + (c + 1) + ":"));
        }
    }

    let linhaSoma = parseInt(prompt("Insira o número da linha que você deseja somar:"));

    let numeroLinha = linhaSoma - 1;

    for (c = 0; c < colunas; c++) {
        acum = acum + matriz[numeroLinha][c];
    }

    console.log("A soma da linha " + linhaSoma + " é " + acum);

    return false;
}