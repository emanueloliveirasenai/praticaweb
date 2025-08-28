function validaProc() {
    // Verifica se o campo está vazio
    if (document.frmnumint.txtnumint.value == "") {
        alert("O campo não pode ser vazio");
        document.frmnumint.txtnumint.focus();
        return false;
    } else {
        // Declaração de variável com let
        let numint = parseInt(document.getElementById('numint').value);
        let multiplicador = 1;
        console.log("Tabuada do número "+numint);

        do {
            console.log(numint + " x " + multiplicador + " = " + numint * multiplicador);
            multiplicador = multiplicador + 1;
        } while (multiplicador < 11);

        return false;
    }    
}
