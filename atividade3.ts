/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno:
*/
let teclado = require(`prompt-sync`)();
let letra = teclado(`Digite a Letra: `);
if (letra == `a` ||letra == `e` || letra == `i` || letra == `o` || letra == `u`) {
  console.log (`A letra que você digitou é vogal`)
} else console.log (`A letra que você digitou é não vogal`)
