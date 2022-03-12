import readline from 'readline-sync';

const convertToFahrenheit = (value) => value * 1.8 + 32;

console.clear();

const celsius = readline.question('Digite o valor em Celsius para converter: ');

console.log('\nO valor em Fahrenheits é: ' + convertToFahrenheit(celsius));
