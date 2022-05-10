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
        marguerita: {
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
    // Adicione abaixo as informações necessárias.
    console.log(`Olá Ana Silveira, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`)
  }
  
//   customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const pizza = Object.keys(order.order.pizza);

    console.log(`"Olá ${order.name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total},00.`)

    const mudaNome = {
        name: 'Luiz Silva',
    }
    const mudaTotal = {
        payment: {
            total: 50,
        }
    }
    Object.assign(order, mudaNome, mudaTotal);

    console.log(`"Olá ${order.name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total},00.`)
  }
  
  orderModifier(order);

  // 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

  // 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  // 2.1- Modifique o nome da pessoa compradora.
  // 2.2 - Modifique o valor total da compra para R$ 50,00.

