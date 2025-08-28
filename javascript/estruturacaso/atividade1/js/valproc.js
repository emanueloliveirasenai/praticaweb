function procFormulario (){

    if(document.getElementById('numint').value==""){
        alert("Preencha o campo Número Inteiro");
        document.frmnumint.focus();
        return false;
    }else{
        let numint=parseInt(document.getElementById('numint').value);
        switch(true)
        {
            case(numint >=0 && numint <=3):
                alert("Bebê");
                return false;
            break;
            case(numint >=4 && numint <=10):
                alert("Criança");
                return false;
            break;
            case(numint >=11 && numint <= 17):
                alert("Adolescente");
                return false;
            break;
            default:
                alert("Adulto");
                return false;
            break;
        }
    }
    
}