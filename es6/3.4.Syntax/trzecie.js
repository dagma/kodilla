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