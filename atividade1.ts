/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: João Otávo Petri da Silva
*/
let teclado = require("prompt-sync")();
console.log("-----------------------");
console.log("-    Calculo volume   -");
console.log("-----------------------");
let pi = 3.14159;
let raio = parseInt(teclado("Digite o Raio da lata: "));
let altura = parseInt(teclado("Digite a Altura da lata:  "));
let volume = pi * (raio * raio) * altura;
console.log("O Volume da Lata \u00E9 " + volume);