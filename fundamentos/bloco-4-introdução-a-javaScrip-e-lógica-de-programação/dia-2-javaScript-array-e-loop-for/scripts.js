// Arrays (listas)
// Para fixar 1:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

/*------------------------------------------------------*/

// Para fixar 2:

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

/*------------------------------------------------------*/

// Para fixar 3:

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu);

/*------------------------------------------------------*/

// For

// Para fixar:

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
let i;

for(i=0; i<groceryList.length; i++){
    console.log(groceryList[i]);
}

console.log('');

/*------------------------------------------------------*/

// For/of

// Para fixar:

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let name of names){
    console.log(name);
}