function validaProc() {
    // Verifica se o campo está vazio
    if (
        document.getElementById('numint').value == "" || 
        document.getElementById('numint2').value == "" ||
        document.getElementById('numint3').value == ""
    ) {
        alert("Preencha todos os campos");
        document.getElementById('numint').focus();
        return false;
    } else {

        let numint = parseFloat(document.getElementById('numint').value);
        let numint2 = parseFloat(document.getElementById('numint2').value);
        let numint3 = parseFloat(document.getElementById('numint3').value);
        let turma1 = 0;
        let turma2 = 0;   
        let turma3 = 0;
        let somaturmas = 0;
        let mediageral;        

        console.log("TURMA 1");  
        let i = 1;
        do {
            let num = parseFloat((Math.random() * 10).toFixed(2));
            somaturmas += num;  
            console.log("Média aluno " + i + " = " + num);    
            if (num >= 7) {
                turma1++;
            }
            i++;
        } while (i <= numint);
        console.log("Qtde de alunos com média igual ou superior a 7 = " + turma1);   
        console.log("");

        console.log("TURMA 2");
        i = 1;
        do {
            let num = parseFloat((Math.random() * 10).toFixed(2));
            somaturmas += num;      
            console.log("Média aluno " + i + " = " + num);
            if (num >= 7) {
                turma2++;
            }
            i++;
        } while (i <= numint2);
        console.log("Qtde de alunos com média igual ou superior a 7 = " + turma2);
        console.log("");

        console.log("TURMA 3");
        i = 1;
        do {
            let num = parseFloat((Math.random() * 10).toFixed(2));
            somaturmas += num;      
            console.log("Média aluno " + i + " = " + num);
            if (num >= 7) {
                turma3++;
            }
            i++;
        } while (i <= numint3);
        console.log("Qtde de alunos com média igual ou superior a 7 = " + turma3);
        console.log("");
    
        mediageral = somaturmas / (numint + numint2 + numint3);
        console.log("Média geral da escola = " + mediageral.toFixed(2));
        console.log("");   

        return false;
    }    
}
