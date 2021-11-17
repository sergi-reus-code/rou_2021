var child_process = require('child_process');


var open = require("open");
open("https://www.888casino.es/", "firefox");

open("cmd", {arguments:"node C:\\Users\\Sergi\\Desktop\\rou_2021\\roudef\\master\\masterdef.js parm1 parm2"});
//open masterdef
//child_process.execSync("start cmd.exe /c node C:\\Users\\Sergi\\Desktop\\rou_2021\\roudef\\master\\masterdef.js parm1 parm2");



/*
var exec = require('child_process').exec; 
var child = exec('DISPLAY=:0.0 firefox', function (error, stdout, stderr) { if (error !== null) { console.log('exec error: ' + error); } });

*/