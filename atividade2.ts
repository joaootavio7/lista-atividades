/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome: João Otávo Petri da Silva
*/

let teclado = require(`prompt-sync`)();


let x = parseInt(teclado(`Digite o valor de x:`));
let y = parseInt(teclado(`Digite o valor de y: `));
let z=x;
console.log (`O valor de x é ${x} ja o valor de y é ${y}`);


let valores1: number = x=y;

console.log (`O valor de x é ${valores1}`);

let valores2: number = y=z;

console.log (`O valor de y é ${valores2}`);
