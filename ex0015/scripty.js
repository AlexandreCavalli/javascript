function clicar() {
    var fano = document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    
    if (fano.value == 0 || fano.value > ano) {
        window.alert('verifique os dados') 
    } else {
        var genero = ''
        var calc = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
    if (fsex[0].checked) {
        genero = 'homem'
    if (calc >= 0 && calc < 10) {
        // criança
        img.setAttribute('src', 'bebe.jpg') 

    } else if (calc < 21) {
        // jovem
        img.setAttribute('src', 'bebe.jpg') 
    } else if (calc < 50) {
        // adulto
        img.setAttribute('src', 'bebe.jpg') 
    } else {
        // idoso
    }

    
    } else if (fsex[1].checked) {
        genero = 'mulher'
        if (calc >= 0 && calc < 10) {
            // criança
            img.setAttribute('src', 'bebe.jpg') 
         } else if (calc < 21) {
            // jovem
            img.setAttribute('src', 'bebe.jpg') 
         } else if (calc < 50) {
            // adulto
            img.setAttribute('src', 'bebe.jpg') 
         } else {
            // idoso
         }
    }
   
    res.innerHTML = `Detectamos ${genero} com ${calc} anos`
    res.appendChild(img) 
    res.style.textAlign = 'center'
}
}
