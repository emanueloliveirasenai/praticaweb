function validaProc(){
    
    let i = 1;
    let divideCinco = 0;
    let somaDivisivel = 0;

     while(i <= 3){

        let numero = parseInt(prompt("Insira o " + i + "º número: "));
        i++;

            if(numero % 5 == 0){
            divideCinco = numero;
            console.log("O número " + divideCinco + " é divisível por 5.");
            somaDivisivel = somaDivisivel + divideCinco;
        }

    }

    console.log("O resuldado da soma dos números divisíveis por 5 é: " + somaDivisivel);

    return false;
}
