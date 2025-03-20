/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome: João Otávio Petri da Silva
*/

let teclado = require (`prompt-sync`)()
let total: number = 0

console.log(`+ =================================== +`)
console.log(`+ ===       Sistema da maçã       === +`)
console.log(`+ =================================== +`)

let maca: number = parseInt(teclado(`Digite a quantidade de maçã desejadas: `))

if (maca < 12){
total = maca * 0.30;
}
else if (maca >= 12){
total = maca *0.25;
}
else{
    console.log(`Algo deu errado!`)
}

console.log(`A quantidade de ${maca} o preço pago é R$ ${total}`)