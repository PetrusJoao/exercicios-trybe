/*
1- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/
let a = 1;
let b = 2;

let adicao = a + b;
let subtração = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a ** b;

console.log(adicao);
console.log(subtração);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

/*
2 e 3- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/

let elementoA = 3;
let elementoB = 4;

if (elementoA > elementoB){
    console.log("O elemento A é maior que o elemento B");
}else if (elementoA < elementoB){
    console.log("O elemento B é maior que o elemento A");
}else{
    console.log("O elemento A é igual ao elemento B");
}

/*
4- Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/

let elemento1 = 5;
let elemento2 = 6;
let elemento3 = 7;

if (elemento1 > elemento2 && elemento1 > elemento3){
    console.log("O elemento 1 é o maior");
}else if (elemento2 > elemento1 && elemento2 > elemento3){
    console.log("O elemento 2 é o maior");
}else if (elemento3 > elemento1 && elemento3 > elemento2){
    console.log("O elemento 3 é o maior");
}else{
    console.log("Todos os elementos são iguais");
}

/*
5- Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

let valor = 0;

if(valor > 0){
    console.log(true);
}else if(valor < 0){
    console.log(false);
}else{
    console.log("zero");
}

/* 
6- Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
*/

let angulo1 = 45;
let angulo2 = -90;
let angulo3 = -55;

if(angulo1+angulo2+angulo3 > 0 && angulo1+angulo2+angulo3 <= 180){
    console.log(true);
}else if(angulo1+angulo2+angulo3 > 180){
    console.log(false);
}else if(angulo1+angulo2+angulo3 <= 0){
    console.log("Error");
}

/*
7- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
*/

let peça = "Rei";

switch(peça.toLocaleLowerCase()){
    case "peão":
        console.log("movimenta apenas para frente");
    break;
    case "torre":
        console.log("movimenta em linha reta");
    break;
    case "bispo":
        console.log("movimenta em diagonal");
    break;
    case "cavalo":
        console.log("movimenta em L");
    break;
    case "rainha":
        console.log("movimenta em todas as direções");
    break;
    case "rei":
        console.log("movimenta apenas uma casa em qualquer direção");
    break;

    default:
        console.log("Peça inválida");
}

/*
8- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

let porcentagem = 101;

if(porcentagem >= 90){
    console.log("A");
}else if(porcentagem >= 80){
    console.log("B");
} else if(porcentagem >= 70){
    console.log("C");
}else if(porcentagem >= 60){
    console.log("D");
}else if(porcentagem >= 50){
    console.log("E");
}if(porcentagem < 50 && porcentagem >= 0){
    console.log("F");
}else{
    console.log("Valor inválido");
}

/*
9- Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

const num1 = 1;
const num2 = 2;
const num3 = 3;

if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
    console.log(true);
}else{
    console.log(false);
}

/*
10- Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    valorCustoTotal = valorCusto + impostoSobreOCusto
    lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

let valorCusto = 10;
let valorVenda = 15;
let impostoSobreOCusto = valorVenda * 20/100;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

if(valorCusto == 0 || valorVenda == 0){
    console.log("Erro: revise o valor de venda ou de custo");
}else{
    console.log("Seu lucro total foi de:" + lucro*1000);
}

/*
11- Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    INSS (Instituto Nacional do Seguro Social)
        Salário bruto até R$ 1.556,94: alíquota de 8%
        Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    IR (Imposto de Renda)
        Até R$ 1.903,98: isento de imposto de renda
        De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

*/

let salarioBruto = 1500;
let iNSS, impostoDeRenda;
let salarioLiquido;

if(salarioBruto <= 1.556,94){
    iNSS = salarioBruto * 8/100;
}else if(salarioBruto > 1.556,94 && salarioBruto <= 2.826,65){
    iNSS = salarioBruto * 9/100;
}else if(salarioBruto > 2.826,65 && salarioBruto <= 5.189,82){
    iNSS = salarioBruto * 11/100;
}else if(salarioBruto > 5.189,82){
    iNSS = salarioBruto * 570,88;
}

if(salarioBruto > 1.903,98 && salarioBruto <= 2.594,92){
    impostoDeRenda = salarioBruto * 7.5/100;
}else if(salarioBruto > 2.594,92 && salarioBruto <= 3.751,05){
    impostoDeRenda = salarioBruto * 15/100;
}else if(salarioBruto > 3.751,05 && salarioBruto <= 4.664,68){
    impostoDeRenda = salarioBruto * 22.5/100;
}else if(salarioBruto > 4.664,68){
    impostoDeRenda = salarioBruto * 27.5/100;
}

let descontoTotal = iNSS + impostoDeRenda;
salarioLiquido = salarioBruto - descontoTotal;

console.log(salarioLiquido);