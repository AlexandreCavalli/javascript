
    var num = document.getElementById('num') // id do numero digitado no input
    var lista = document.getElementById('llista') // id do SELECT
    var res = document.getElementById('res') // id do valor que vai mostrar
    var valores = [] // vetor

    function Numero(n) {
        if(Number(n) >= 1 && Number(n) >= 100) {
            return true
        } else {
            return false 
        }
    }

    
    function inlista(n, l) {
        if (l.indexOf(Number(n)) != -1 ) {
            return true
        } else {
            return false
        } 
    }

    function adicionar() {
        if (num.value >= 1 && num.value <= 100 && !inlista(num.value, valores))  {
            valores.push(Number(num.value)) // aqui ele já está adicionando, porém não aparece
            let item = document.createElement('option') // adiciona no select, mas ainda não aparece
            item.text = `Valor ${num.value} adicionado` 
            lista.appendChild(item) // aqui aparece na lista
            res.innerHTML = '' 
        } else {
            window.alert('valor invalido ou já consta na lista')
        }
        num.value = ''
        num.focus()
    }

    function finalizar() {
        if (valores.length == '') {
            window.alert('digite um número')
        } else {
            let tot = valores.length
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados<p>`
        }
    }
    
