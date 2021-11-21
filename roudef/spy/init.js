var child_process = require('child_process');
var open = require("open");
var robot = require("robotjs");
const { getwindow, getwindow_888, sleep, tomafoto} = require ("./spy_utils/spy_utils_image");

async function open_firefox(time) {
    
    await open('https://www.888casino.es/', {app: {name: "firefox", arguments: []}});//'--kiosk'
    sleep(3000)
    var window = getwindow_888('Casino Online | Juegos de Casino en 888Casino');
    window.bringToTop();
    window.getBounds();
    window.setBounds({ x: -0, y: -0, width: 900, height: 630 });  //888 4K 150% !!!!NO CAMBIAR NYUNCA!!!!!!!!!
    window.bringToTop();
}



async function open_spy(time) {
    
    sleep(time)
    var window = getwindow('spy');
    window.bringToTop();
    window.getBounds();
    window.setBounds({ x: 900, y: 0, width: 601, height: 600 });  //888 4K 150%
    window.bringToTop();

}

async function open_exec(time) {
    
    sleep(time)
    var window = getwindow('exec');
    window.bringToTop();
    window.getBounds();
    window.setBounds({ x: 0, y: 601, width: 900, height: 335 });  //888 4K 150%
    window.bringToTop();

}

function open_masterdef(time) {
    
    
    var window = getwindow('masterdef');
    window.bringToTop();
    window.getBounds();
    window.setBounds({ x: 900, y: 601, width: 600, height: 500 });  //888 4K 150%
    window.bringToTop();
    sleep(time)
}








//child_process.exec("start \"masterdef\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\master\\masterdef.js parm1 parm2");
//child_process.exec("start \"exec\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\exec\\exec888.js parm1 parm2");
//child_process.exec("start \"spy\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\spy\\spydef.js parm1 parm2");
open_firefox();

//console.log("pepep");
//open_masterdef(5000);

//sleep(1000);

//open_spy(0);

//sleep(1000);

//open_exec(0);
//sleep(5000);
//process.exit()
//sleep(2000)



//sleep(2000)
/*
var window = getwindow('spy');
//window.bringToTop();
window.getBounds();
window.setBounds({ x: 0, y: 601, width: 900, height: 335 });  //888 4K 150%
window.bringToTop();
sleep(2000)
var window = getwindow('exec');
//window.bringToTop();
window.getBounds();
window.setBounds({ x: 0, y: 601, width: 900, height: 335 });  //888 4K 150%
window.bringToTop();
sleep(2000)
var window = getwindow('masterdef');
//window.bringToTop();
window.getBounds();
window.setBounds({ x: 901, y: 601, width: 601, height: 500 });  //888 4K 150%
window.bringToTop();*/