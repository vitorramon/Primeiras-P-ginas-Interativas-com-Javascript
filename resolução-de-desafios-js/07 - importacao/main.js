//const funcoes = require('./funcoes-auxiliares');
const {gets, print} = require('./funcoes-auxiliares');

const qtdDeAlunos = gets()

let maiorValorEncontrado = 0

for (let i = 0; i < qtdDeAlunos; i++) {
    const numero_sorteado = gets();
    if(numero_sorteado > maiorValorEncontrado){
        maiorValorEncontrado = numero_sorteado
    }
}


print(maiorValorEncontrado)
