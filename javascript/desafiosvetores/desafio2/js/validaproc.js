/*Professor “Ludovico Volpato” está de volta e deseja uma solução que alimente um 
vetor com 10 valores inteiros e também que solicite ao usuário a entrada de dados de 
um valor inteiro qualquer. A solução deverá fazer uma busca do valor, informado pelo 
usuário, no vetor e imprima a posição em que este foi encontrado ou se não foi 
encontrado.*/

function validaProc(){

    let vetor = [];
    let busca = 0;
    let i;
    let validacao = false;
    let posicao = 0;

    for(i = 0; i < 10; i++){
        vetor[i] = parseInt(prompt("Insira o " + (i+1) + "º número: "));
        console.log("O valor inserido foi: " + vetor[i]);
    }

    while(validacao == false){

        busca = parseInt(prompt("Digite o número que você deseja procurar no vetor: "));

        for(i = 0; i < 10; i++){
        if(busca == vetor[i]){
            posicao = i;
            validacao = true;
        }
        }
        if(validacao == false){
            alert("Número não encontrado!")
        }
    }

    console.log("Número " + busca + " encontrado na posição " + posicao + " do vetor!")

    return false;
}