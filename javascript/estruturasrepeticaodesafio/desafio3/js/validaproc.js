function validaProc(){
    
    let idade = 0;
    let genero = 0;
    let salario = 0.0;
    let acumSalario = 0.0;
    let acumIdade = 0;
    let continuar;
    let contPessoas = 0;
    let contFem = 0;
    let contMasc = 0;
    let salarioFem = 0.0;
    let salarioMasc = 0.0;

    do{
        idade = parseInt(prompt("Insira a idade"));
        genero = parseInt(prompt("Insira o Gênero, 1 - Masculino / 2 - Feminino"));
        salario = parseFloat(prompt("Insira o salário"));

        acumSalario = acumSalario + salario;
        acumIdade = acumIdade + idade;
        contPessoas ++ 

        if(genero == 1){
            contMasc ++;
            salarioMasc = salarioMasc + salario;
        }else if(genero == 2){
            contFem ++;
            salarioFem = salarioFem + salario;
        }


        continuar = (prompt("Escreva 'Finalizar' para sair, ou tecle Enter para continuar!"));
    }while(continuar != 'Finalizar');

    let resultadoSalario = 0.0;
    let mediaIdade = 0;
    let mediaSalFem = 0.0;
    let mediaSalMasc = 0.0;

    resultadoSalario = acumSalario / contPessoas;
    mediaIdade = acumIdade / contPessoas;
    mediaSalFem = salarioFem / contFem;
    mediaSalMasc = salarioMasc / contMasc;

    console.log("A média salarial do grupo é: " + resultadoSalario);
    console.log("A média de todas as idades é: " + mediaIdade);
    console.log("A média de salário do grupo feminino é: " + mediaSalFem);
    console.log("A média de salário do grupo masculino é: " + mediaSalMasc);

    return false;

}