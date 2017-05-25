const average = (...args) => {
	let wynik = 0;
	if (args.length !== 0) {
		let suma = 0;
		args.forEach(function(arg) {
			suma = suma + arg;
		});
		wynik = suma / args.length;
	}
	return wynik;
};


const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [...numbers] = grades;

console.log(average(...numbers));
