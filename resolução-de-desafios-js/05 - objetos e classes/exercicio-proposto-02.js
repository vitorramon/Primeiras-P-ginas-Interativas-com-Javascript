class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura ** 2);
    }

    classificarIMC() {
        const IMC = this.calcularIMC()
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
}

const jose = new Pessoa('José Vitor', 70, 1.70)

console.log(jose.classificarIMC())