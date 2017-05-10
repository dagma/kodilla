process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/node-version':
				process.stdout.write('Node version: ' + process.versions.node + '\n');
				break;
			case '/language':
				process.stdout.write('User language: ' + process.env.LANG + '\n');
				break;
			default:
				process.stderr.write('Wrong instruction\n');
		}
	}
});