//Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Procure o índice do valor "Portfólio" do array menu :

let menuService = ['Home', 'Serviços', 'Portfólio', 'Links'];

let indexOfPortfolio;

for (var i = 0; i < menuService.length; i++) {
  if (menuService[i] == 'Portfólio') {
    indexOfPortfolio = i;
  }
}

console.log(indexOfPortfolio);


// Adicione o valor "Contato" no final do array menu :

menuService.push('Contato');

console.log(menuService);
