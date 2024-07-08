var agora = new Date()
var diaSem = agora.getDay() 
console.log(`${diaSem}`)

    
var diaSem = 8

switch(diaSem) {
    case 0: 
        console.log('Domingo')
        break 
    case 1:
        console.log('Segunda-feira')  
        break
    case 2:
        console.log('terça-feira')  
        break 
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabado')
        break
    case 7:
        console.log('domingo')
        break
    default:
        console.log('dia invalido')
        break
}