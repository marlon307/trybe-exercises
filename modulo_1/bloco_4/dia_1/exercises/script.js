var a = 20;

var b = 30;

var c = 40;

var result = true;

//parte 2

if (a > b) {
    console.log(a + ' é maior que ' + b);
} else {
    console.log(b + ' é maior que ' + a);
}

//parte 3

switch (c){
    case 20:
        console.log('20 é o maior');
        break;
    case 30: 
        console.log('30 é o maior');
        break
    default:
        console.log('40 é o maior');
}

//parte 4

switch (result) {
    case true:
        console.log('Positivo');
        break;
    case false:
        console.log('Negativo');
        break
    default: 
        console.log('null');
}

//parte 5

var angle_1 = 60;
var angle_2 = 60;
var angle_3 = 60;

if ((angle_1 + angle_2 + angle_3) % 3 === 0) {
    console.log('true');
} else {
    console.log('false');
}

//parte 6


var piece = 'Cavalo';

switch (piece.toLocaleLowerCase()){
    case 'cavalo':
        console.log('Cavalo anda em (L) uma casa para frente e tres para direita ou esquerda');
        break;
    default:
        console.log('Não sabemos ainda o que essa peça faz ;(');

}

//Parte 7

var porcentagem = 73;

if (porcentagem >= 90) {
    console.log('Resultado A');
} else if (porcentagem >= 80) {
    console.log('Resultaod B');
} else if (porcentagem >= 70) {
    console.log('Resultado C');
} else if (porcentagem >= 60) {
    console.log('Resultado D');
}  else if (porcentagem >= 50) {
    console.log('Resultado E');
} else if (porcentagem < 50) {
    console.log('Resultado F');
}

//Parte 8

var numberX = 5;
var numberY = 11;
var numebrZ = 15;

if(numberX % 2 == 0 || numberY % 2 == 0 || numebrZ % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}
