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

// 5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const filhoEsquerdoDaMain = document.createElement('section.left-content');
filhodoBodyMain.appendChild(filhoEsquerdoDaMain);

// 6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const filhoDireitoDaMain = document.createElement('section.right-content');
filhodoBodyMain.appendChild(filhoDireitoDaMain);

// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

/*const filhoDaSectionEsquerda = document.createElement('img');
filhoDaSectionEsquerda.img.src = "https://picsum.photos/200";
filhoEsquerdoDaMain.appendChild(filhoDaSectionEsquerda);*/

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const filhoDaSectionDireita = document.createElement('ul');
filhoDireitoDaMain.appendChild(filhoDaSectionDireita);

let itemList = ["um", "dois", "tres", "quarto", "cinco", "seis", "sete", "oito", "nove", "dez"];

const lista = document.querySelectorAll('filhoDaSectionDireita');
for(let i=0; i<itemList.length; i++){
    let itens = itemList[i];

    let item = document.createElement('li');
    item.innerText = itens;
    filhoDaSectionDireita.appendChild(item);
}

// 9- Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

const filhoH3DaMain = document.createElement('h3');
filhoH3DaMain.innerText = "Titulo h3"
filhodoBodyMain.appendChild(filhoH3DaMain);

const filhoH3DaMain2 = document.createElement('h3');
filhoH3DaMain2.innerText = "Titulo 2 h3"
filhodoBodyMain.appendChild(filhoH3DaMain2);

const filhoH3DaMain3 = document.createElement('h3');
filhoH3DaMain3.innerText = "Titulo 3 h3"
filhodoBodyMain.appendChild(filhoH3DaMain3);