function validaProc(){
    
    let i = 1;
    let somaNumero = 0

    while(i <= 3){

        let numero = parseInt(prompt("Insira o " + i + "º número: "));
        i++;
        
        console.log("O número informado é: " + numero);
        somaNumero = somaNumero + numero;

    }

    console.log("O resultado da soma dos 3 números é: " + somaNumero);

    return false;
}
