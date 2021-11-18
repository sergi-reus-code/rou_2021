var child_process = require('child_process');
var open = require("open");


async function open_firefox(params) {
    //await open("https://www.888casino.es/", "firefox");
    await open('https://www.888casino.es/', {app: {name: "firefox", arguments: []}});//'--kiosk'
}





//riu
child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\master\\masterdef.js parm1 parm2");
child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\spy\\spydef.js parm1 parm2");
child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\exec\\exec.js parm1 parm2");

open_firefox();


