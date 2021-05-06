let player = {
  firstName: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    sliver: 3
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

player['fullName'] = player.firstName + ' ' + player.lastName;

console.log('A jogadora ' + player.fullName + ' tem ' + player.age + ' anos de idade.');

console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.sliver + ' medalhas de prata.');
