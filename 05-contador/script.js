'use strict' //Ativa o modo estrito do JS, que ajuda a capturar erros

function criarListaNumeros(quantidade) {
    let listaNumeros = []

    for (let i = 1; i <= quantidade; i++){ //Inicia em 1 e repete até atingir a quantidade
        listaNumeros.push(i) //Adiciona o valor atual de 'i' ao final do array
    }

    return listaNumeros
}

function criarListaPares(quantidade) {
    let listaPares = [] 

    for (let i = 1; i <= quantidade; i++) {
        listaPares.push(i * 2) //Multiplica o índice por 2 e guarda no array        
    }

    return listaPares
}

function criarListaImpares(quantidade) {
    let listaImpares = [] 

    for (let i = 1; i <= quantidade; i++) { 
        listaImpares.push(i * 2 - 1) //(índice × 2) - 1 e guarda no array                            
    }

    return listaImpares
}

function criarListaMultiplos(quantidade) {
    let listaMultiplos = [] 

    for (let i = 1; i <= quantidade; i++) { 
        listaMultiplos.push(i * 5) //Multiplica o índice por 5 e guarda no array                             
    }

    return listaMultiplos
}

function criarListaPotenciais(quantidade) {
    let listaPotencia = [] 

    for (let i = 1; i <= quantidade; i++) {
        listaPotencia.push(2 ** (i - 1)) //Usa o operador de exponenciação (**) para calcular 2 elevado a (i - 1)                               
    }

    return listaPotencia
}

function criarLinha () {
    const input         = document.getElementById('inputQuantidade')//Localiza o campo
    const corpoTabela   = document.getElementById('corpoTabela')
    const quant         = parseInt(input.value) //PEGA o valor de dentro do campo

    while (corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild)
    }

    const colunaContagem    = criarListaNumeros(quant)
    const colunaPares       = criarListaPares(quant)
    const colunaImpares     = criarListaImpares(quant)
    const colunaMult5       = criarListaMultiplos(quant)
    const colunaPotencia    = criarListaPotenciais(quant)

    //Inicia o loop que vai rodar exatamente o número de vezes que o usuário pediu (quant)
    for (let i = 0; i < quant; i++) {
        const tr = document.createElement('tr')

        /**Cria um array temporário pegando o valor na posição [i] 
        de cada uma das 5 listas (colunas) que foram geradas anteriormente.*/
        const dadosLinha = [
            colunaContagem[i],
            colunaPares[i],
            colunaImpares[i],
            colunaMult5[i],
            colunaPotencia[i]
        ]

        //Percorre cada um dos 5 valores do array 'dadosLinha' criado acima
        dadosLinha.forEach(texto => {
            const td = document.createElement('td')
            td.textContent = texto //Define o conteúdo da célula como o texto (valor matemático) atual
            tr.appendChild(td) //Coloca a célula (<td>) dentro da linha (<tr>) que foi criada no início do loop
        })

        corpoTabela.appendChild(tr)
    } //Fechamento do for

    
} //Fim do loop

//Localiza o botão pelo ID e diz que, ao clicar, deve rodar a função criarLinha
document.getElementById('bntGerar').addEventListener('click', criarLinha)