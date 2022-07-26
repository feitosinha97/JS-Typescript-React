//let nome = 'Henrique'; // string
// o comando var é mais antigo
/*
console.log(nome, 'nasceu em 1984.');
console.log('em 2000', nome, 'conheceu maria');
console.log(nome, 'casou-se com maria em 2012.');
console.log('maria teve 1 filho com', nome, 'em 2015');
console.log('o filho de', nome, 'se chama eduardo');
*/
let nome; // declarou a variável mas não definiu valor
nome = 'qualquer valor'; //inicializando a variável
console.log(nome);
nome = 'Otávio';
console.log(nome);
// não podemos criar variáveis com palavras reservadas pela linguagem javascript
// variáveis precisam ter nomes significativos
// não pode começar o nome de uma variável com um número
// não podem conter espaços ou traços
// utilizamos camelCase (primeira palavra com letra minúscula e segunda com maiúscula para nomes compostos)
// ex.: let nomeCompletoDoCliente
// variáveis são case sensitive
// não podemos redeclarar variáveis com let, pode-se modificar o valor da variável SEM o let (como no exemplo acima)
let nomeCliente = 'luiz';
nomeCliente = 'otávio';
console.log(nomeCliente);

