function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
/*Exercício 1: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira. 

Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for(let i = 0; i<dezDaysList.length; i++){
    let day = dezDaysList[i];
    const dezDays = document.createElement('li');
    dezDays.innerText = day;
    document.getElementById('days').appendChild(dezDays);
    dezDays.className = "day"

    if(day == 24 || day == 25 || day == 31 ){
        dezDays.classList.add("day-holiday");
    }
    if(day == 4 || day == 11 || day == 18 || day == 25){
        dezDays.classList.add("day-friday");
    }
}

/*Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
 */
const feriados = [24, 25, 31];
const botaoFeriado = document.createElement('button');
document.querySelector('.buttons-container').appendChild(botaoFeriado);
let pegaBotão = document.querySelector('button')
pegaBotão.id = "btn-holiday"
pegaBotão.innerText = "Feriados"

/*Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .*/

let clickFeriado = document.getElementById('btn-holiday')

clickFeriado.addEventListener("click", mudaCorHoliday);
clickFeriado.addEventListener("dblclick", voltaCorHoliday);

function mudaCorHoliday(){
    for(let i=0; i<feriados.length; i++){
    let diaFeriado = document.querySelectorAll(".day-holiday")[i];
    diaFeriado.style.backgroundColor = "red"
    }
}
function voltaCorHoliday(){
    for(let i=0; i<feriados.length; i++){
    let diaFeriadoMarcked = document.querySelectorAll(".day-holiday")[i];
    diaFeriadoMarcked.style.backgroundColor = "rgb(238,238,238)"
    }
}