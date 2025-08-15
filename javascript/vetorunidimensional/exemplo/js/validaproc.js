/*Armazene 3 números inteiros em um vetor.*/
function validaProc(){

let num=[];

for(let i = 0; i < 3; i++){
    num[i] = parseInt(prompt("Digite o " + (i+1) + "º número na posição " + i));
}
for(i = 0; i < 3; i++){
    console.log("O valor do vetor num na posição " + i + " é: " + num[i]);
}

return false;
}