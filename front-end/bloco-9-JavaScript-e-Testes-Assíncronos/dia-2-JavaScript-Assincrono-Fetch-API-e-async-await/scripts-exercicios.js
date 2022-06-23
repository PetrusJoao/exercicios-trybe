// 1. Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos praticar!

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const jokeText = document.getElementById('jokeContainer');
console.log(jokeText);
const getJokeId = document.getElementById('jokeId');

const jokeTextDest = document.getElementById('jokeContainerDest');
const getJokeIdDest = document.getElementById('jokeIdDest');

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

/* const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      jokeText.innerText = data.joke;
      getJokeId.innerText = `ID: ${data.id}`;
    });
}; */

const AsyncFunc = async () => {
  const JokeFetch = await fetch(API_URL, myObject);
  const response = await JokeFetch.json();
  const responseData = response;
  console.log(responseData);
  const { joke, id } = response;
    jokeText.innerText = responseData.joke;
    getJokeId.innerText = `ID: ${responseData.id}`;

    jokeTextDest.innerText = joke;
    getJokeIdDest.innerText = `ID: ${id}`;
}

window.onload = () => AsyncFunc();
