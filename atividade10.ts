/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();
console.log(`====================================`)
console.log(`====================================`)
console.log(`========   INSVESTIGAÇÃO   =========`)
console.log(`====================================`)
console.log(`====================================`)

let pergunta1 = (teclado(`Telefonou para a vítima? digite sim e não: `))
let pergunta2 = (teclado(`Esteve no local do crime? digite sim e não: `))
let pergunta3 = (teclado(`Mora perto da vítima? digite sim e não: `))
let pergunta4 = (teclado(`Devia para a vítima? digite sim e não: `))
let pergunta5 = (teclado(`Já trabalhou com a vítima? digite sim e não: `))

let classificao: number = 0;

if (pergunta1 == 'sim') {
  classificao++;
} 
if (pergunta2 == `sim`) {
  classificao++;
} 
if (pergunta3 == `sim`) {
  classificao++;
} 
if (pergunta4 == `sim`) {
  classificao++;
} 
if (pergunta5 == `sim`) {
  classificao++;
}


if (classificao <= 2) {
  console.log(`Pessoa Suspeita`)
} else if (classificao >= 3 && classificao <= 4) {
  console.log(`Pessoa Cúmplice`)
} else (classificao == 5) {
  console.log(`Pessoa é o Assasino`)
}