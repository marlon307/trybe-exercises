// const myExpenses = [{
//     gym: 99,
//   },
//   {
//     ifood: 200,
//   },
//   {
//     phone: 60,
//   },
//   {
//     internet: 100,
//   },
// ];

// const myIncome = 1000;

// const monthlyBudget = (myIncome, myExpenses, callback) => {
//   const totalExpenses = callback(myExpenses);
//   const totalAfterExpenses = myIncome - totalExpenses;

//   console.log(`Balanço do mês:
//     Recebido: R$${myIncome},00
//     Gasto: R$${totalExpenses},00
//     Saldo: R$${totalAfterExpenses},00 `);
// };

// const handleExpenses = myExpenses => {
//   const eachValue = myExpenses.map((item => Object.values(item)));
//   const totalExpense = eachValue.reduce((acc, curr) => acc += curr[0], 0);
//   return totalExpense;
// };

// monthlyBudget(myIncome, myExpenses, handleExpenses);

// Balanço do mês:
//     Recebido: R$1000,00
//     Gasto: R$459,00
//     Saldo: R$541,00


// const assert = require('assert');

// const userFullName = ({
//   firstName,
//   lastName
// }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({
//   firstName,
//   nationality
// }) => `${firstName} is ${nationality}`;

// const getUser = (paramCallback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return paramCallback(userToReturn);
// };

// console.log(getUser(userFullName));
// console.log(getUser(userNationality));

// assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
// assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser


const userFullName = ({
  firstName,
  lastName
}) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({
  firstName,
  nationality
}) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (paramCallback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(paramCallback(user));
  }, delay());

};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
