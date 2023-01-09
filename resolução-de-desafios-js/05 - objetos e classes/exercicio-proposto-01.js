class Carro {
    marca;
    cor;
    KM_POR_LITRO;

    constructor (marca, cor, KM_POR_LITRO){
        this.marca = marca;
        this.cor = cor;
        this.KM_POR_LITRO = KM_POR_LITRO;
    }

    calcularViagem(DISTANCIA_KM, PRECO_COMBUSTIVEL){
        return (DISTANCIA_KM / this.KM_POR_LITRO) * PRECO_COMBUSTIVEL;
    }
}

const uno = new Carro ('Fiat', 'Azul', 12);
const palio = new Carro ('Fiat', 'Vermelho', 10);

console.log(uno.calcularViagem(70, 5));
console.log(palio.calcularViagem(70, 5));

