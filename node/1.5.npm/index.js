var OSinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/sayhello':
				process.stdout.write('hello!\n');
				break;
			case '/getOSinfo':
				process.stdout.write('Tutaj będzie info o systemie!\n');
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction! \n');
		};
	}
});
