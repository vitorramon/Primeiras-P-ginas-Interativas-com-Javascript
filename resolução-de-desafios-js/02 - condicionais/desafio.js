const PRECO_ETANOL = 5.79;
const PRECO_GASOLINA = 6.66;
const KM_POR_LITRO = 10;
const DISTANCIA_KM = 100;
const IS_TIPO_COMBUSTIVEL = 'Etanol';

const LITROS_CONSUMIDO = DISTANCIA_KM / KM_POR_LITRO;

if (IS_TIPO_COMBUSTIVEL === 'Etanol') {
    const VALOR_ETANOL = LITROS_CONSUMIDO * PRECO_ETANOL;
    console.log(VALOR_ETANOL.toFixed(2));
} else if (IS_TIPO_COMBUSTIVEL === 'Gasolina'){
    const VALOR_GASOLINA = LITROS_CONSUMIDO * PRECO_GASOLINA;
    console.log(VALOR_GASOLINA.toFixed(2));
} else {
    console.log('Insira um combustível válido')
}

