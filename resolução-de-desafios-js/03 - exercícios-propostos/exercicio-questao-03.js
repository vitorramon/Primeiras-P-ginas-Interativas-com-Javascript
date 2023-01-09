let VALOR_PROD = 100;
const TIPO_DE_PAGAMENTO = 'PARCELADO EM 3X OU MAIS';

if(TIPO_DE_PAGAMENTO == 'DÉBITO'){
    let desconto = VALOR_PROD * 0.10;
    console.log(VALOR_PROD - desconto);
} else if (TIPO_DE_PAGAMENTO == 'DINHEIRO' || TIPO_DE_PAGAMENTO == 'PIX'){
    let desconto = VALOR_PROD * 0.15;
    console.log(VALOR_PROD - desconto);
} else if (TIPO_DE_PAGAMENTO == 'PARCELADO EM 2X'){
    console.log(VALOR_PROD);
} else if (TIPO_DE_PAGAMENTO == 'PARCELADO EM 3X OU MAIS'){
    let juros = VALOR_PROD * 0.10;
    console.log((VALOR_PROD + juros));
} else {
    console.log('Coloque um valor válido.');
}

/* RESOLUÇÃO DO PROFESSOR */
/*
const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1))
} else if (formaDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
} else if (formaDePagamento === 3){
    console.log(precoEtiqueta)
} else if (formaDePagamento === 4){
    console.log(precoEtiqueta + (precoEtiqueta * 0.10))
}
*/
