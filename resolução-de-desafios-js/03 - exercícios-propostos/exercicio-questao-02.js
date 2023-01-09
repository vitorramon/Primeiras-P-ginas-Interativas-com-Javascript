let altura = 1.75;
let peso = 80;
let IMC = peso / (altura ** 2);

if (IMC < 18.5) {
    console.log(`Seu IMC é ${IMC}, você está abaixo do peso`)
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log(`Seu IMC é ${IMC}, você está com o peso normal`)
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log(`Seu IMC é ${IMC}, você está acima do peso`)
} else if (IMC >= 30 && IMC <= 39.9) {
    console.log(`Seu IMC é ${IMC}, você está obeso`)
} else if (IMC >= 40) {
    console.log(`Seu IMC é ${IMC}, você está com o obesidade grave`)
} else {
    console.log(`Verifique os dados.`)
}