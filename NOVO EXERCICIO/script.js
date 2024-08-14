function clicou() {
    var num = document.getElementById('numero')
    var res = document.getElementById('res')
    if (num.value.length == 0) {
        window.alert('error')
    } else {
        let n = Number(num)
        let c = 1
        while ( c <= 10) {
            let item = document.createElement('option')
            item.text = `${num.value} x ${c} = ${num.value*c}`
            conta.appendChild(item) 
            c++
        }
    }
}