function validNum(){
    if(document.frmatv2.txtnum1.value == ""){

        alert("Preencha o campo 1:")
        document.frmatv2.txtnum1.focus();
        return false;

    }else if(document.frmatv2.txtnum2.value == ""){

        alert("Preencha o campo 2:");
        document.frmatv2.txtnum2.focus();
        return false;

    }else{
        
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);

        if(num1 > num2){

            alert("Número 1 é maior que Número 2!");

        }else if(num1 < num2){

            alert("Número 1 é menor que Número 2!");

        }else{

            alert("Os números 1 e 2 são iguais!")
            
        }
    }
}
