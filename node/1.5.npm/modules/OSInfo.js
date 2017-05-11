var os = require('os');
var colors = require('colors');
var Timeconverter = require('./TimeConverter');

function getOSinfo() {
	var type = os.type();
	var release = os.release();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	var cpu = os.cpus()[0].model;
	var userInfo = os.userInfo();

	console.log(colors.gray('System: '), type);
	console.log(colors.red('Release: '), release);
	console.log(colors.blue('CPU model: '), cpu);
	process.stdout.write(colors.green('Uptime: ~: '));
	Timeconverter.print(os.uptime());
	console.log(colors.yellow('User name: '), userInfo.username);
	console.log('Home dir: ', userInfo.homedir);	
}

exports.print = getOSinfo;


