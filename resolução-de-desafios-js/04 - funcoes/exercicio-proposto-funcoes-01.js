function chamarNome (nome){
    return 'Meu nome é ' + nome;
}


function classificarIdade(idade){
    if (idade >= 18){
        console.log(chamarNome('Vitor Ramon ') +'e eu sou maior de idade.')
    } else if (idade < 18) {
        console.log(chamarNome('Vitor Ramon ') + 'e eu sou menor de idade')
    } else {
        console.log('Insira uma idade válida')
    }
}

classificarIdade(15)