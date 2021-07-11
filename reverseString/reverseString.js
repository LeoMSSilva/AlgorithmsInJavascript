function reverseString(str) {
	let strReverse = '';
	for (let i = str.length - 1; i >= 0; i--) {
		strReverse += str[i];
	}
	return strReverse;
}

let resultRevertString = reverseString('Hello');

console.log(resultRevertString);
