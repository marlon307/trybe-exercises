const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
customer1.number = 3424234234;
customer1.open = true;

console.log(customer1);


const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
customer2['number'] = 12341231;
console.log(customer2);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);


let object = {};

const creatPropObj = (obj, nParam, parmValue) => obj[nParam] = parmValue;

creatPropObj(object, 'Nome', 'Marlon');

console.log(object);
