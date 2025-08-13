function procFormulario(){

    //Validação de campos
    if(document.frmnotas.txtnum1.value == ""){

        alert("Preencha o campo Nota 1:");
        document.frmnotas.txtnum1.focus();
        return false;

    }else if(document.frmnotas.txtnum2.value == ""){

        alert("Preencha o campo Nota 2:")
        document.frmnotas.txtnum2.focus();
        return false;

    }else if(document.frmnotas.txtnum3.value == ""){

        alert("Preencha o campo Notas 3:");
        document.frmnotas.txtnum3.focus();
        return false;

    }else{

        //Processamento do programa...
        //Let é uma diretiva em JavaScript para declarar uma variavel 
        //Let nota1 = variavel
        //parseFloat = funcão no JS converte, se for float, converte para real, se for Int. converte para inteiro
        //document= é o formulário
        //getElementById= pega o elemento Id que está no elemento da nota 1
        //Resumindo, ele está pegando o valor que está em caracter, convertendo para real e armazenando numa variável

        let nota1 = parseFloat(document.getElementById('num1').value);
        let nota2 = parseFloat(document.getElementById('num2').value);
        let nota3 = parseFloat(document.getElementById('num3').value);
        let media =(nota1+nota2+nota3)/3;
        if(media>=7){

            alert("Sua média foi: " + media.toFixed(2) + "\nVocê foi Aprovado!!!");

        }else if(media <= 5){
            
            alert("Sua média foi: " + media.toFixed(2) + "\nVocê foi Reprovado!!!")

        }else{
            alert("Sua média foi: " + media.toFixed(2) + "\nVocê está em Recuperação!!!")
        }
    }

}