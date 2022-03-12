import readline from 'readline-sync';

const reverseString = (string) => {
	let strReverse = '';
	for (let i = string.length - 1; i >= 0; i--) {
		strReverse += string[i];
	}
	return strReverse;
};

console.clear();

const inputString = readline.question('Digite uma string para reverter: ');

console.log('\nA string para revertida é: ' + reverseString(inputString));
