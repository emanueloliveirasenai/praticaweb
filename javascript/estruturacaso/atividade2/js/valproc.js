function procFormulario(){


    if(document.getElementById('numint1').value==""){
        alert("Preencha o campo 1:");
        document.frmcalc.numint1.focus();
        return false;
    } else if(document.getElementById('numint2').value==""){
        alert("Preencha o campo 2:");
        document.frmcalc.numint2.focus();
        return false;
    } else if(document.getElementById('numint3').value==""){
        alert("Preencha a Operação:");
        document.frmcalc.numint3.focus();
        return false;
    } else {

        let num1 = parseInt(document.getElementById('numint1').value);
        let num2 = parseInt(document.getElementById('numint2').value);
        let num3 = parseInt(document.getElementById('numint3').value);
        let result = 0

        switch(true){

            case(num3 == 1):
                result = num1 + num2;
                //console.log("Resultado = " + result);
                //return false;
            break;
            case(num3 == 2):
                result = num1 - num2;
                //console.log("Resultado = " + result);
                //return false;
            break;
            case(num3 == 3):
                result = num1 * num2;
                //console.log("Resultado = " + result);
                //return false;
            break;
            case(num3 == 4):
                if(num2 == 0){
                    alert("Não é possível dividir por 0: ")
                    document.frmcalc.numint2.focus();
                }else{
                    result = num1 / num2;
                    //console.log("Resultado = " + result);
                    //return false;
                }
            break;
            default:
                alert("Digite uma opção válida!")
                document.frmcalc.numint3.focus()
                return false;
            break;
        }
        document.getElementById('resultado').innerText = "Resultado: " + result;
        return false;
    }
}