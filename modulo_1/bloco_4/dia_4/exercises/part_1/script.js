console.log('///////////Part 1');

let info = {
    personagem: [
        'Margarida',
        'Tio Patinhas',
    ],
    origem: [
        'Pato Donald',
        `Christmas on Bear Mountain, Dell's Four Color Comics #178`
    ],
    nota: [
        'Namorada do personagem principal nos quadrinhos do Pato Donald',
        'O último MacPatinhas'
    ],
};

console.log('Bem-vinda, ' + info.personagem);

console.log('///////////Part 2');

info['recorrente'] = ['Sim','Não'];

console.log(info);


console.log('///////////Part 3');

for (let key in info) {
    console.log(key);
}

console.log('///////////Part 4');

for (let key in info) {
    console.log(info[key]);
}

console.log('///////////Part 5');

console.log(info.personagem[0] + ' e ' + info.personagem[1]);
console.log(info.origem[0] + ' e ' + info.origem[1]);
console.log(info.nota[0] + ' e ' + info.nota[1]);

if (info.recorrente[0] == 'Sim' && info.recorrente[1] == 'Sim'){
    console.log('Ambos recorrentes');
}
