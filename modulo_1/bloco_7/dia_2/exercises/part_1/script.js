const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  console.log(`Olá Ana Silveira entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number} AP: ${order.address.apartment}.`);
}

customerInfo(order);


// order.order.pizza
const orderModifier = (order) => {
  const ord = Object.values(order);
  const pizza = Object.keys(order.order.pizza);
  const drinke = Object.values(order.order.drinks);
  const payment = Object.values(order.payment);

  console.log(`Olá ${ord[0]}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drinke[0].type} é R$ ${payment},00.`);
}

orderModifier(order);
