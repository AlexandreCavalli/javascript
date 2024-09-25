let num = [5,8,2,9,3]
num.push(1) 
 
console.log(num)
console.log(`o vetor tem ${num.length} posições`) 
console.log(`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)
if (pos == -1) {
    console.log('erro')
} else {
    console.log(`o valor 8 está na posição ${pos}`)
}
