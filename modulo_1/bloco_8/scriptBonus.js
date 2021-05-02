const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = {
  mage,
  warrior,
  dragon
};
//1
const randDragon = () => Math.round(Math.random() * (dragon['strength'] - 15) + 15);
//2
const randWarrior = () => Math.round(Math.random() * (warrior['strength'] - warrior['weaponDmg']) + warrior['weaponDmg']);
//3
const randMage = () => {
  const calc = Math.round(Math.random() * (mage['intelligence'] * 2 - mage['intelligence']));
  const calcMan = mage['mana'] > 15 ? mage['mana'] - 15 : 'Não possui mana suficiente';
  return {
    gm: calc,
    mn: calcMan,
  }
}

//Parte 2
const gameActions = {
  roundW: () => turnoW(),
  roundM: () => turnoM(),
  roundD: () => turnoD(),
  resultRound: () => result(),
};

const turnoW = () => {
  const rand = randWarrior();
  dragon.healthPoints -= rand;
  warrior.damage === undefined ? warrior.damage = rand : warrior.damage += rand;
}

const turnoM = () => {
  const rand = randMage();
  dragon.healthPoints -= rand;
  mage.damage === undefined ? mage.damage = rand : mage.damage += rand;
}

const turnoD = () => {
  const rand = randDragon()
  mage.healthPoints -= rand;
  warrior.healthPoints -= rand;
  dragon.damage === undefined ? dragon.damage = rand : dragon.damage += rand * 2;
}

const result = () => {
  return battleMembers;
}

gameActions.roundW();
gameActions.roundM();
gameActions.roundD();

console.log(gameActions.resultRound());
