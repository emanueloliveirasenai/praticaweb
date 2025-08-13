function validaProc(){

    if(document.getElementById('numint').value == ""){
        alert("Preencha o campo Número:");
        document.frmnumint.numint.focus();
        return false;
    }else{

        let numint=parseInt(document.getElementById('numint').value);
        for(let i=0; i<11; i++){
            console.log(numint, " x ", i,  "=" , numint * i);

           /* document.getElementById('resultado').innerText = (numint + " x " + i +  "=" + (numint * i));*/
        }
        return false;
    }
}