/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, caso não diga o(s) motivo(s).
Nome: João Otávio Petri da Silva
*/

console.log(`================================`)
console.log(`=       Doação de Sangue       =`)
console.log(`================================`)  

let teclado = require (`prompt-sync`)()
let idade = parseInt(teclado(`Digite a sua idade: `))
let peso = parseInt(teclado(`Digite a seu peso: `))

if (idade >= 18 && idade < 67 && peso > 60) {
    console.log(`Você pode doar sangue`);
  } else if (idade < 18 && idade > 67 && peso < 60) 
    console.log(`Você não pode doar sangue`);