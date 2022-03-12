import readline from 'readline-sync';

const calculateAverage = (noteOne, noteTwo, noteThree) => {
	const average = (noteOne + noteTwo + noteThree) / 3;
	return average < 5 ? 'Reprovado' : average < 7 ? 'Recuperação' : 'Aprovado';
};

console.clear();

console.log('Digite suas notas.');
const testNoteOne = Number(readline.question('notaOne: '));
const testNoteTwo = Number(readline.question('notaTwo: '));
const testNoteThree = Number(readline.question('notaThree: '));

console.log('\n' + calculateAverage(testNoteOne, testNoteTwo, testNoteThree));
