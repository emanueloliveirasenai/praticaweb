function validaProc(){
    
    let i = 1;
    let maiorNumero = 0

    while(i <= 3){

        let numero = parseInt(prompt("Insira o " + i + "º número: "));
        i++;
        
        if(numero > maiorNumero){
            maiorNumero = numero
        }

    }

    console.log("O maior numero inserido foi: " + maiorNumero);

    return false;
}
