import readline from 'readline-sync';

const fizzBuzz = (input) => {
	if (Number.isNaN(input)) return 'Não é um número';
	if (input % 3 == 0 && input % 5 == 0) return 'FizzBuzz';
	if (input % 3 == 0) return 'Fizz';
	if (input % 5 == 0) return 'Buzz';
	return input;
};

console.clear();

const inputNumber = Number(readline.question('Digite o valor FizzBuzz: '));

console.log('\n' + fizzBuzz(inputNumber));
