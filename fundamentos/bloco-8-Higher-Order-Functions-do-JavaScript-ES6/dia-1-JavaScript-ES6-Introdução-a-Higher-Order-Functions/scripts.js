// 1 - Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => {
    return 'Acordando!!';
};

// console.log(wakeUp());

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';

const breakfast = () => {
    return 'Bora tomar café!!';
};

// console.log(breakfast());

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';

const getBed = () => {
    return 'Partiu dormir!!';
};

// console.log(getBed());

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
// Ao chamar a função doingThings:
// doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const doingThings = (func) => func();

console.log(doingThings(wakeUp));

