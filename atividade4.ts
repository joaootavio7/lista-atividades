/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();
let n1 = 0
n1 = parseInt(teclado(`Digite o valor do primeiro número:`));
let n2 = 0
n2 = parseInt(teclado(`Digite o valor do segundo número:`));
let n3 = 0
n3 = parseInt(teclado(`Digite o valor do terceiro número:`));

let controle = false;


if (n1 < n2 && n1 < n3) {
   if(n2 < n3) {
      console.log(`Ordem crescente: ${n1}, ${n2}, ${n3}`);
      controle = true;
   } else {
      console.log(`Ordem crescente: ${n1}, ${n3}, ${n2}`);
      controle = true;
   }
} else if(n2 < n1 && n2 < n3)
   if(n1 < n3) {
      console.log(`Ordem crescente: ${n2}, ${n1}, ${n3}`);
      controle = true;
} else {
 console.log(`Ordem crescente: ${n2}, ${n3}, ${n1}`)
 controle = true;
}
if(n3 < n1 && n3 < n2 ) {
if (n1 < n2) {
console.log(`Ordem crescente: ${n3}, ${n1}, ${n2}`)
controle = true;
} else {
 console.log(`Ordem crescente: ${n3}, ${n2}, ${n1}`)
 controle = true;}
}

