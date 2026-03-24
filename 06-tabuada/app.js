'use strict' //Ativa o modo estrito do JS, que ajuda a capturar erros

function gerarTabuada() {
    const numero = parseFloat(document.getElementById('numero').value)

    //Interrompe a função se o campo estiver vazio ou com valor inválido
    if (isNaN(numero)) {
        alert('Digite um número válido.')
        return 
    }

    const tbody = document.getElementById('corpoTabela')

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }

    for (let n = 1; n <= 10; n++) {

        const adicao      = numero + n
        const subtracao   = numero - n
        const multiplicao = numero * n
        const divisao     = (numero / n).toFixed(2)

        const tr = document.createElement('tr')

        const tdN           = document.createElement('td')
        const tdAdicao      = document.createElement('td')
        const tdSubtracao   = document.createElement('td')
        const tdMultiplicao = document.createElement('td')
        const tdDivisao     = document.createElement('td')

        tdN.textContent           = n
        tdAdicao.textContent      = adicao
        tdSubtracao.textContent   = subtracao
        tdMultiplicao.textContent = multiplicao
        tdDivisao.textContent     = divisao

        if (subtracao < 0) {
            tdSubtracao.classList.add('negativo')
        }

        tr.appendChild(tdN)
        tr.appendChild(tdAdicao)
        tr.appendChild(tdSubtracao)
        tr.appendChild(tdMultiplicao)
        tr.appendChild(tdDivisao)

        tbody.appendChild(tr)
    }
}