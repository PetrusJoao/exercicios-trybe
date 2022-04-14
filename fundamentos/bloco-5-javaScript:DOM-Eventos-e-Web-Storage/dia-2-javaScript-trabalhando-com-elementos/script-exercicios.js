// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

const body = document.querySelector('body');
const filhodoBodyH1 = document.createElement('h1');
filhodoBodyH1.innerText = "Exercício 5.2 - JavaScript DOM"
body.appendChild(filhodoBodyH1);

// 2- Adicione a tag main com a classe main-content como filho da tag body;

const filhodoBodyMain = document.createElement('main.main-content');
body.appendChild(filhodoBodyMain);

// 3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const filhoDaMain = document.createElement('section.center-content');
filhodoBodyMain.appendChild(filhoDaMain);

// 4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const filhoDaSection = document.createElement('p');
filhoDaMain.appendChild(filhoDaSection);
filhoDaSection.innerText = "Texto teste para testar o texto."

