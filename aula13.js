var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia, flor do dia!!!')
} else if (hora <= 18) {
    console.log('Boa tarde, bora comecar os trabalhos?!')
} else if (hora > 18) {
    console.log('Boa noite, vamos dormir com a gata ?')
}
    

