var child_process = require('child_process');
var open = require("open");


async function open_firefox(params) {
    //await open("https://www.888casino.es/", "firefox");
    await open('https://www.888casino.es/', {app: {name: "firefox", arguments: ['--kiosk']}});
}

//pgcda
//open("cmd", {arguments:"node /k C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\master\\masterdef.js parm1 parm2"});

//riu
//open masterdef
child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\master\\masterdef.js parm1 parm2");
child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\spy\\spydef.js parm1 parm2");
child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\exec\\exec.js parm1 parm2");

/*
var exec = require('child_process').exec; 
var child = exec('DISPLAY=:0.0 firefox', function (error, stdout, stderr) { if (error !== null) { console.log('exec error: ' + error); } });

*/

open_firefox();

console.log("eee");
