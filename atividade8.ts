/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();
let angulo = parseInt(teclado(`Digite o valor do ângulo:`));
let angulo2 = parseInt(teclado(`Digite o valor do segundo ângulo:`));
let angulo3 = parseInt(teclado(`Digite o valor do terceiro ângulo:`));
if (angulo == 90) {
    console.log(`O Triângulo é Retângulo`);
  } else if (angulo2 == 90) 
    console.log(`O Triângulo é Retângulo`);
    else if (angulo3 == 90)
    console.log(`O Triângulo é Retângulo`);
  else if (angulo > 90)
    console.log(`O Triângulo é Obtusângulo`)
  else if (angulo2 > 90)
    console.log(`O Triângulo é Obtusângulo`)
  else if (angulo3 > 90)
    console.log(`O Triângulo é Obtusângulo`)
  else (angulo < 90 && angulo2 < 90 && angulo3 < 90)
    console.log(`O Triângulo é Acutângulo`)

