function validaProc()
{
    /*let = declarador de variável*/
    let somatoria=0;
    do{
        /*prompt é uma entrada de dados dentro do javascript*/
        /*parseInt = transforma um caracter em número inteiro*/
        /*não é necessário usar o let para declarar a variável quando se tem o prompt*/
        numero = parseInt(prompt("Digite o número"));
        console.log("O número infomrado é : " + numero);
        /*+= acumula o próprio número / ++ soma 1*/
        somatoria += numero;
        resposta = parseInt(prompt("Para sair digite o número 0 ou outro para continuar"));

    }while(resposta !=0);

        console.log("A somatório dos números é = " + somatoria);
        /*return false serve apenas para aparecer no console*/ 
        return false;
}