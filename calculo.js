import prompt from 'prompt-sync';
let ler=prompt();

console.log ('informe um número:');
let num= Number (ler());

let r = num % 2;

console.log(r);