const AV1 = 5;
const AV2 = 3;
const AV3 = 7;
let media = (AV1 + AV2 + AV3) / 3;

if(media < 5){
    console.log(`Sua média é ${media}. Infelizmente você está reprovado.`);
} else if(media >= 5 && media <= 7){
    console.log(`Sua média é ${media}. Você não alcançou a nota necessária para a aprovação mas terá acesso a recuperação.`);
} else if (media > 7){
    console.log(`Sua média é ${media}. Parabéns você foi aprovado.`);
} else {
    console.log('Erro na leitura de dados. Verifique se todas as notas foram preenchidas corretamente');
}