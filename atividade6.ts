/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno:João Otávio Petri da Silva
*/
let teclado = require(`prompt-sync`)();
let nota1 = 0
nota1 = parseInt(teclado(`Digite o valor da primeira nota:`));
let nota2 = 0
nota2 = parseInt(teclado(`Digite o valor da segunda nota:`));

let media: number = (nota1 + nota2) / 2;

if (media >= 8.5 && media <= 10) {
  console.log(`A nota é A `);
} else if (media >= 7 && media < 8.5) {
  console.log(`A nota é B`);
} else if (media >= 5 && media < 7) {
  console.log(`A nota é C`)
} else if (media >= 3 && media < 5) {
  console.log(`A nota é D`)
} else {
  console.log(`A nota é E`)
}
