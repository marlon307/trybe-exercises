let n = 5;
let c = '';
console.log('///////////// 1');

//1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

for (let i = 0; i < n; i+=1) {
    console.log('*'.repeat(n)); 
}

console.log('///////////// 2');

//2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

for (let i = 0; i < n; i+=1) {
    c+= '*';
    console.log(c); 
}


console.log('///////////// 3');

//3. Agora inverta o lado do triângulo. Por exemplo:

for (let i = 0; i < n; i+=1) {
    console.log(' '.repeat(n-i) + '*'.repeat(i)); 
}

console.log('///////////// 4');

//4. Depois, faça uma pirâmide com n asteriscos de base:
for (let i = 0; i < n; i+=1) {
    
}