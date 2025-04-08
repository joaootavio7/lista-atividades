
let teclado = require(`prompt-sync`)();

console.log(`   ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨`)
console.log(`¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨`)
console.log(`¨¨       Posto de Gasolina      ¨¨`)
console.log(`¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨`)
console.log(`   ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨`)

let gasolina: number = parseInt(teclado(`Digite a quantidade de Gasolina: `))
let etanol: number = parseInt(teclado(`Digite a quantidade de Etanol: `))

let preço1: number = gasolina * 5.50 
console.log (`O valor a ser pago é ${preço1}`)

let preço2: number = etanol * 4.00
console.log (`O valor a ser pago é ${preço2}`)

if(preço1 = 20){
let desconto: number = preço1 - 5.5
console.log(`O valor com desconto é ${desconto}`)
}

if(preço2 = 20){
let desconto2: number = preço2 - 5.5
console.log(`O valor com desconto é ${desconto2}`)
}


