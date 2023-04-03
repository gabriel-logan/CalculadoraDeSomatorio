class Calculadora {
    constructor() {
        this.valorVasio = 0 // Valor vasio para iniciar o somatorio
    }

    fatorial(valorParaFatoriar) {
        if (valorParaFatoriar === 0) {
            return 1; // Fatorial de zero é 1
        } else {
            let resultado = 1;
            for (let i = 1; i <= valorParaFatoriar; i++) {
                resultado *= i;
            }
            return resultado; // Retorna o valor do fatorial
        }
    }

    somatorio(x) { // Valor da variavel X se tiver
        const n = 99999 // Valor An para soma parcial
        const inicioSomatorio = 0 // Valor inicial do somatorio | Atenção com
            // indeterminações

        for (let k = inicioSomatorio; k < n + 1; k++) {
            const serie = ((x ** k)) / (this.fatorial(k)) // Aqui você passa a função
            this.valorVasio += serie // Soma a serie de acordo com o valor de n
        }
        return this.valorVasio // Retorna a soma parcial da serie
    }
}

const startCalculadora = new Calculadora() // Crie um executor da classe

const numeroPi = Math.PI // Numero Pi com varias casas decimais

// Os valores de x para angulos são apenas em radianos
const valorDeX = numeroPi / 4

console.log(startCalculadora.somatorio(1))