/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 33;
const peso = 84;
const alturaEmM = 1.80;
let imc; // peso / (altura*altura)
imc = peso / (alturaEmM*alturaEmM);
let anoNascimento;
let anoAtual
anoAtual = 2022;
anoNascimento = anoAtual - idade;
console.log(imc);
console.log(anoNascimento);
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(nome + ' nasceu em ' + anoNascimento + '.');
// 3 diferentes formas de imprimir. a segunda é a mais moderna