        function validaProc() {
            let nomes = [];
            let matriz = [];
            let linha = 3;
            let coluna = 3;
            let contador1 = 0;
            let contador2 = 0;
            let contador3 = 0;
            let total1 = 0;
            let total2 = 0;
            let total3 = 0;
            let media1 = 0;
            let media2 = 0;
            let media3 = 0;
            let opcao = "";

            alert("Seja bem vindo ao SuperMercado Alegria");

            for (let i = 0; i < 3; i++) {
                nomes[i] = prompt("Insira o nome do " + (i + 1) + "º cliente:");
            }

            alert("Para o mês que não houver compra, digite o valor 0");

            for (let i = 0; i < linha; i++) {
                matriz[i] = [];
                for (let c = 0; c < coluna; c++) {
                    matriz[i][c] = parseFloat(prompt("Insira o valor da compra do " + (c + 1) + "º mês do cliente " + nomes[i]));
                    if (i == 0) {
                        if (matriz[i][c] > 0) contador1++;
                        total1 = total1 + matriz[i][c];
                    } else if (i == 1) {
                        if (matriz[i][c] > 0) contador2++;
                        total2 = total2 + matriz[i][c];
                    } else if (i == 2) {
                        if (matriz[i][c] > 0) contador3++;
                        total3 = total3 + matriz[i][c];
                    }
                }
            }
            
            media1 = total1 / coluna;
            media2 = total2 / coluna;
            media3 = total3 / coluna;

            do {
                alert("Digite o nome do cliente que deseja realizar a consulta, digite 'geral' para visualizar tudo ou 'sair'.")
                opcao = prompt("Opção:");

                if (opcao.toUpperCase() === nomes[0].toUpperCase()) { 
                    console.log("-----------------------------------");
                    console.log("Cliente: " + nomes[0]);
                    console.log("Mês 1: R$ " + matriz[0][0].toFixed(2));
                    console.log("Mês 2: R$ " + matriz[0][1].toFixed(2));
                    console.log("Mês 3: R$ " + matriz[0][2].toFixed(2));
                    console.log("Média das compras: R$ " + media1.toFixed(2));
                    console.log("Total de compras: R$ " + total1.toFixed(2));
                    console.log("Quantidade de compras (meses com valor > 0): " + contador1);
                    console.log("-----------------------------------");
                } else if (opcao.toUpperCase() === nomes[1].toUpperCase()) {
                    console.log("-----------------------------------");
                    console.log("Cliente: " + nomes[1]);
                    console.log("Mês 1: R$ " + matriz[1][0].toFixed(2));
                    console.log("Mês 2: R$ " + matriz[1][1].toFixed(2));
                    console.log("Mês 3: R$ " + matriz[1][2].toFixed(2));
                    console.log("Média das compras: R$ " + media2.toFixed(2));
                    console.log("Total de compras: R$ " + total2.toFixed(2));
                    console.log("Quantidade de compras (meses com valor > 0): " + contador2);
                    console.log("-----------------------------------");
                } else if (opcao.toUpperCase() === nomes[2].toUpperCase()) {
                    console.log("-----------------------------------");
                    console.log("Cliente: " + nomes[2]);
                    console.log("Mês 1: R$ " + matriz[2][0].toFixed(2));
                    console.log("Mês 2: R$ " + matriz[2][1].toFixed(2));
                    console.log("Mês 3: R$ " + matriz[2][2].toFixed(2));
                    console.log("Média das compras: R$ " + media3.toFixed(2));
                    console.log("Total de compras: R$ " + total3.toFixed(2));
                    console.log("Quantidade de compras (meses com valor > 0): " + contador3);
                    console.log("-----------------------------------");

                } else if (opcao.toUpperCase() === 'GERAL') {
                    console.log("========= RELATÓRIO GERAL =========");

                    console.log("-----------------------------------");
                    console.log("Cliente: " + nomes[0]);
                    console.log("Mês 1: R$ " + matriz[0][0].toFixed(2));
                    console.log("Mês 2: R$ " + matriz[0][1].toFixed(2));
                    console.log("Mês 3: R$ " + matriz[0][2].toFixed(2));
                    console.log("Média das compras: R$ " + media1.toFixed(2));
                    console.log("Total de compras: R$ " + total1.toFixed(2));
                    console.log("Quantidade de compras (meses com valor > 0): " + contador1);
                    
                    console.log("-----------------------------------");
                    console.log("Cliente: " + nomes[1]);
                    console.log("Mês 1: R$ " + matriz[1][0].toFixed(2));
                    console.log("Mês 2: R$ " + matriz[1][1].toFixed(2));
                    console.log("Mês 3: R$ " + matriz[1][2].toFixed(2));
                    console.log("Média das compras: R$ " + media2.toFixed(2));
                    console.log("Total de compras: R$ " + total2.toFixed(2));
                    console.log("Quantidade de compras (meses com valor > 0): " + contador2);

                    console.log("-----------------------------------");
                    console.log("Cliente: " + nomes[2]);
                    console.log("Mês 1: R$ " + matriz[2][0].toFixed(2));
                    console.log("Mês 2: R$ " + matriz[2][1].toFixed(2));
                    console.log("Mês 3: R$ " + matriz[2][2].toFixed(2));
                    console.log("Média das compras: R$ " + media3.toFixed(2));
                    console.log("Total de compras: R$ " + total3.toFixed(2));
                    console.log("Quantidade de compras (meses com valor > 0): " + contador3);
                    console.log("-----------------------------------");
                } else if (opcao.toUpperCase() !== 'SAIR') {
                    alert("Opção inválida ou cliente não encontrado.");
                }

            } while (opcao.toUpperCase() !== 'SAIR');

            alert("Consulta finalizada.");
            
            return false;
        }