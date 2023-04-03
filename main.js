// Definição da classe Calculadora
class Calculadora {
    // Método para calcular fatorial de um número
    fatorial(valorParaFatoriar) {
        // Caso especial para fatorial de zero
        if (valorParaFatoriar === 0) {
            return 1; // Fatorial de zero é 1
        } else {
            // Inicializa o resultado como 1
            let resultado = 1;
            // Itera de 1 até o valorParaFatoriar, multiplicando o resultado em cada iteração
            for (let i = 1; i <= valorParaFatoriar; i++) {
                resultado *= i;
            }
            return resultado; // Retorna o valor do fatorial
        }
    }

    // Método para calcular o somatório de uma série
    somatorio(x, n, initSum, serie) { // Valor da variavel X se tiver
        const inicioSomatorio = initSum // Valor inicial do somatorio | Atenção com indeterminações
        let valorVasio = 0

        // Itera de initSum até n, somando os valores da série para cada iteração
        for (let k = inicioSomatorio; k < n + 1; k++) {
            valorVasio += eval(serie) // Soma a serie de acordo com o valor de n
        }
        return valorVasio // Retorna a soma parcial da serie
    }
}

// Cria um objeto da classe Calculadora
const startCalculadora = new Calculadora();

// Função para calcular e exibir o resultado do somatório
function calcular() {
    // Obtém os valores dos campos do formulário
    const valorDeX = Number(document.getElementById("x").value);
    const valorDeN = Number(document.getElementById("n").value);
    const initSum = Number(document.getElementById("inicioSomatorio").value);
    let valorDaSerie = document.getElementById("serie").value;

    if (valorDeX < 0 || valorDeN < 0 || initSum < 0 || !valorDaSerie) {
        return alert("Por favor, preencha todos os campos corretamente."); // Impede que o formulário seja enviado
    }

    // Calcula o resultado do somatório usando o objeto da classe Calculadora
    const resultado = startCalculadora.somatorio(valorDeX, valorDeN, initSum, valorDaSerie);

    // Exibe o resultado no elemento com id "resultado"
    document.getElementById("resultado").innerHTML = 'Resultado: ' + resultado;
}