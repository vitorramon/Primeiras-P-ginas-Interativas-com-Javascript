function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
        return `Seu IMC é ${IMC}, você está abaixo do peso`
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        return `Seu IMC é ${IMC}, você está com o peso normal`
    } else if (IMC >= 25 && IMC <= 29.9) {
        return `Seu IMC é ${IMC}, você está acima do peso`
    } else if (IMC >= 30 && IMC <= 39.9) {
        return `Seu IMC é ${IMC}, você está obeso`
    } else if (IMC >= 40) {
        return `Seu IMC é ${IMC}, você está com o obesidade grave`
    } else {
        return `Verifique os dados.`
    }
}
  
// MAIN

(function () {
    let altura = 1.75;
    let peso = 80;
    let IMC = calcularIMC(peso, altura);

    console.log(classificarIMC(IMC))
})(); // Função Imediatamente Invocada






