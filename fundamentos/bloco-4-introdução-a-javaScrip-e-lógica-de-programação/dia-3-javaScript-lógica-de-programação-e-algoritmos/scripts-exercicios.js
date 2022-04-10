/*/ Exercicio 1: Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let num = 10, fatorial = [], resultado = 1;
let i;

for(i=0; i<num;i++){
    fatorial[i] = num - i;    
}
for(i=0; i<num;i++){
    resultado = resultado * fatorial[i];    
}
console.log(fatorial);
console.log("Fatorial do número: "+resultado);

console.log("");*/

// Exercicio 2: Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let drow = [], word2 = [];
let aux, i, j;

/*for(i=0; i<word.length; i++){
    aux = word[i];
    word[i] = word[word.length-1];
    drow[i] = aux;
}*/

for(i=0, j = word.length-1; i<word.length && j >= 0; i++, j-- ) {
    drow[i] = word[j];
}

console.log(drow);

console.log("");

/*/ Exercicio 3: Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior, menor;

for(i=0; i<array.length; i++){
    if(array[i]<array[i+1]){
        maior = array[i];
    }else if(array[i]>array[i+1]){
        menor = array[i+1];
    }
}
for(i=0; i<array.length; i++){
    if(array[i]<array[i+1]){
        menor = array[i];
    }else if(array[i]>array[i+1]){
        menor = array[i+1];
    }
}

console.log("Maior palavra: " + maior);
console.log("Menor palavra: " + menor);

console.log("");*/

// Exercicio 4: m número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

