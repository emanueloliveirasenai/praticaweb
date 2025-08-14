function validaProc(){

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;
    let resposta = 0;

    if(document.getElementById('num1').value == ""){
        alert("Preencha o campo número 1!!");
        document.frmnumint.num1.focus();
        return false;
    }else if(document.getElementById('num2').value == ""){
        alert("Preencha o campo número 2!!");
        document.frmnumint.num2.focus();
        return false;
    }

    resultado = num1 + num2;

    while(resposta != resultado){
        
        resposta = parseFloat(prompt("Insira o número que você acha que dá essa soma: "));

        if(resposta != resultado){
            alert("Tente Novamente!!");
        }else{
            alert("Resultado correto!!!");
        }
    }
}