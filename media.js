import prompt from 'prompt-sync'
let ler =prompt();

console.log ('programa da média');

console.log ('\n informe a primeira nota:');
let nota1= Number(ler());

console.log ('\n informe a segunda nota:');
let nota2= Number(ler());

console.log ('\n informe a terceira nota:');
let nota3= Number(ler());

let soma =(nota1+ nota2+nota3)/3

let media = nota1+nota2+nota3/3;
console.log('A media é'+media);
console.log(`a media de ${nota1}=${nota2}e${media}`);





