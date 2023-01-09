function aplicarDesconto(precoEtiqueta, desconto) {
    return precoEtiqueta - (precoEtiqueta * (desconto / 100));
}

function aplicarJuros(precoEtiqueta, juros) {
    return precoEtiqueta + (precoEtiqueta * (juros / 100));
}

function classificarPagamento(precoEtiqueta, formaDePagamento) {
    if (formaDePagamento === 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10))
    } else if (formaDePagamento === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15))
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta)
    } else if (formaDePagamento === 4) {
        console.log(aplicarJuros(precoEtiqueta, 10))
    }
}

(function () {
    /*const precoEtiqueta = 100;
    const formaDePagamento = 4;*/

    console.log(classificarPagamento(100, 4))

})();


