/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`, se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome:João Otávio Petri da Silva
*/

let teclado = require(`prompt-sync`)();
let n1: number = parseInt(teclado(`Digite o primeiro número:`));
let n2: number = parseInt(teclado(`Digite o segundo número: `));

let controle = false

    if (n1 > n2) {
            console.log(`O número maior é ${n1}`);
            controle = true
        } else (n2 > n1) 
            console.log(`O número maior é ${n2}`);
            controle = true
        
    
 while (controle)

    