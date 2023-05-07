const Btnadc = document.getElementById('Btnadc');
const lista = document.getElementById('lista');
const Btnfinalizar = document.getElementById('Btnfinalizar');
const res = document.getElementById('res');
const num = document.getElementById('num');
const valores = [];


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    }  else {
        return false        
    }
}


function InLista(n, valores) {
    if (valores.indexOf(Number(n)) != -1) {
        return true
    }  else {
        return false        
    }
}


function adicionar() {
        if(isNumero(num.value) && !InLista(num.value, valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
        } else {
            window.alert('[ERRO] Dado inválido!')
        }
        num.value = ''
        num.focus()
}


function finalizar() {
    if (valores.length == 0) {
        window.alert('[ERRO] Dado inválido!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>O total de valores adicionados: ${tot}</p>`
        res.innerHTML += `<p>O maior valor adicionado: ${maior}</p>`
        res.innerHTML += `<p>O menor valor adicionado: ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores adicionados: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores adicionados: ${media}</p>`
    }
}
