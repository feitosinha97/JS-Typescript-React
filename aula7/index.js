// não podemos criar variáveis com palavras reservadas pela linguagem javascript
// variáveis precisam ter nomes significativos
// não pode começar o nome de uma variável com um número
// não podem conter espaços ou traços
// utilizamos camelCase (primeira palavra com letra minúscula e segunda com maiúscula para nomes compostos)
// ex.: let nomeCompletoDoCliente
// variáveis são case sensitive
// não podemos redeclarar variáveis com let, pode-se modificar o valor da variável SEM o let (como no exemplo acima)
// não utilize var, utilize const
// não pode modificar o valor de uma constante
const nome = 'joão';
console.log(nome);
// com a const, tem sempre que declarar o valor dela, não pode deixar undefined
// nome = 'Otávio'; não seria possível modificar o valor da constante
// operadores aritméticos: + - * / 
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
// console.log(resultadoTriplicado);
// string = texto | fora de aspas = number = número
// pra descobrir o tipo da variável:
console.log(typeof primeiroNumero);
console.log(primeiroNumero + segundoNumero); // concatenação
console.log(typeof(primeiroNumero + segundoNumero)); // o tipo se torna uma string porque o primeiro valor é uma string
