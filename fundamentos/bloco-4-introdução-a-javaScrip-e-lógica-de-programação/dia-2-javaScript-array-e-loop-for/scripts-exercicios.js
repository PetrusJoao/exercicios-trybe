// Exercício 1: Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i;

for(i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

console.log("");

// Exercício 2: Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for(i=0; i<numbers.length; i++){
    soma = soma + numbers[i];
}

console.log(soma);

console.log("");

// Exercício 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let count = 0, mediaAritmetica;

for(i=0; i<numbers.length; i++){
    count++;
}

mediaAritmetica = soma / count;

console.log("Média aritmética: " + mediaAritmetica);

console.log("");

// Exercício 4: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(mediaAritmetica > 20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}

console.log("");

// Exercício 5: Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = 0;

for(i=0; i<numbers.length; i++){
    if(numbers[i]>maior){
        maior = numbers[i];
    }
}

console.log("O maior número é: " + maior);


console.log("");

// Exercício 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0;

for(i=0; i<numbers.length; i++){
    if(numbers[i] % 2 != 0){
        impar = impar + 1;
    }
}
if(impar != 0){
    console.log("Quantidade de números ímpar: " + impar);
}else{
    console.log("nenhum valor ímpar encontrado");
}

console.log("");

// Exercício 7: Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = 101;

for(i=0; i<numbers.length; i++){
    if(numbers[i] < menor){
        menor = numbers[i];
    }
}

console.log("O menor número é: " + menor);

console.log("");

// Exercício 8: Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numeros = [];

for(i=1; i<26; i++){
    numeros.push(i);
}

console.log(numeros);

console.log("");

// Exercício 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let divisao = [];

for(i=0; i<numeros.length; i++){
    divisao[i] = numeros[i] / 2;
}

console.log(divisao);