function validaProc(){

    let peso = 0.0;
    let altura = 0.0;
    let resultado = 0.0;
    let continuar = 0;
    
    do{
        peso = parseFloat(prompt("Insira seu Peso:"));
        altura = parseFloat(prompt("Insira sua Altura:"));

        resultado = peso / (altura * altura);

        let resultadoArredondado = resultado.toFixed(2)

        if(resultado < 18.5){
            alert("IMC " + resultadoArredondado + " - Abaixo do peso!");
        }else if(resultado >= 18.5 && resultado <= 24.9){
            alert("IMC " + resultadoArredondado + " - Peso normal!");
        }else if(resultado >= 25 && resultado <= 29.9){
            alert("IMC " + resultadoArredondado + " - Sobrepeso!");
        }else if(resultado >= 30){
            alert("IMC " + resultadoArredondado + " - Obesidade!");
        }

        continuar = parseInt(prompt("Para finalizar, pressione 0, caso contrário, pressione Enter!"));
    }while(continuar != 0);
}