const calculateAverage = (note1, note2, note3) => {
	const average = (note1 + note2 + note3)/3;
	return (average<5 ? 'Reprovado' : average<7? 'Recuperação' :'Aprovado')
}

console.log(calculateAverage(9,6,6));