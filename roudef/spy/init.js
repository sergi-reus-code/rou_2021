var child_process = require('child_process');
var open = require("open");
var robot = require("robotjs");
const { getwindow, getwindow_888, sleep, tomafoto} = require ("./spy_utils/spy_utils_image");











async function open_firefox(params) {
    //await open("https://www.888casino.es/", "firefox");
    await open('https://www.888casino.es/', {app: {name: "firefox", arguments: []}});//'--kiosk'
    sleep(5000)
    var window = getwindow_888('Casino Online | Juegos de Casino en 888Casino');
    window.bringToTop();
    window.getBounds();
    window.setBounds({ x: -5, y: -0, width: 1024, height: 692 });
    window.bringToTop();
}

//riu
child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\master\\masterdef.js parm1 parm2");
child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\spy\\spydef.js parm1 parm2");
child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\exec\\exec.js parm1 parm2");

async function open_masterdef(params) {

    await child_process.exec("start cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\master\\masterdef.js parm1 parm2");
    var window = getwindow_888('Casino Online | Juegos de Casino en 888Casino');
    window.bringToTop();
    window.getBounds();
    window.setBounds({ x: -5, y: -0, width: 1024, height: 692 });
    window.bringToTop();
}




open_firefox();

//open_masterdef();


