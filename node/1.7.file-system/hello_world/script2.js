var greeting = require("./script1").greeting;
var name = require("./script1").name;
//console.log("My name is " + name + ". " + greeting);
//console.log(process.versions);
process.stdout.write(process.env.LANG);
//console.log(process.versions.node);