'use strict' //Ativa o modo estrito do JS, que ajuda a capturar erros

function simularFinanciamento() {

    //Lê os três valores dos inputs e converte para número
    const valorTotal        = parseFloat(document.getElementById('valorTotal').value)
    const taxa              = parseFloat(document.getElementById('taxa').value)
    const numeroDeParcelas  = parseInt(document.getElementById('numeroDeParcelas').value)

    // Interrompe se algum campo estiver vazio ou inválido
    if (isNaN(valorTotal) || isNaN(taxa) || isNaN(numeroDeParcelas)) {
        alert('Preencha todos os campos corretamente.')
        return
    }

    //Parcela fixa: calculada uma única vez antes do loop
    const parcela = valorTotal / numeroDeParcelas

    //Saldo devedor começa igual ao valor total e vai diminuindo a cada mês
    let saldo = valorTotal

    //Seleciona o tbody e limpa as linhas anteriores
    const tbody = document.getElementById('corpoTabela')

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }

    //Loop de 1 até o número de parcelas — cada iteração representa um mês
    for (let mes = 1; mes <= numeroDeParcelas; mes++) {

        //Juros incidem sobre o saldo atual — por isso muda a cada mês
        const jurosMes = saldo * (taxa / 100)

        //Total pago nesse mês = parcela fixa + juros desse mês
        const totalMes = parcela + jurosMes

        //Cria a linha e as cinco células
        const tr              = document.createElement('tr')
        const tdMes           = document.createElement('td')
        const tdParcela       = document.createElement('td')
        const tdJuros         = document.createElement('td')
        const tdTotal         = document.createElement('td')
        const tdSaldo         = document.createElement('td')

        //Preenche cada célula — toFixed(2) garante duas casas decimais
        tdMes.textContent     = mes
        tdParcela.textContent = parcela.toFixed(2)
        tdJuros.textContent   = jurosMes.toFixed(2)
        tdTotal.textContent   = totalMes.toFixed(2)

        //Atualiza o saldo ANTES de exibir — desconta a parcela do mês atual
        saldo = saldo - parcela
        tdSaldo.textContent   = saldo.toFixed(2)

        //Aplica as classes de cor definidas no CSS
        tdParcela.classList.add('col-parcela')
        tdJuros.classList.add('col-juros')
        tdTotal.classList.add('col-total')
        tdSaldo.classList.add('col-saldo')

        //Monta a linha e adiciona ao tbody
        tr.appendChild(tdMes)
        tr.appendChild(tdParcela)
        tr.appendChild(tdJuros)
        tr.appendChild(tdTotal)
        tr.appendChild(tdSaldo)
        tbody.appendChild(tr)
    }
}