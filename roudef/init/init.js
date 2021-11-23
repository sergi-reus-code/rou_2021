var child_process = require('child_process');
var open = require("open");
var robot = require("robotjs");
const { clearInterval } = require('timers');
const { getwindow, getwindow_888, getwindow_spy, getwindow_masterdef, getwindow_exec,sleep, tomafoto} = require ("./init_utils/init_utils.js");
var firefoxdone =0;
var spydone =0;
var masterdefdone =0;
var execdone =0;

async function open_firefox(time) {
    
    await open('https://www.888casino.es/', {app: {name: "firefox", arguments: []}});//'--kiosk'

}

function resize_firefox(time){

    var window = getwindow_888('Casino Online | Juegos de Casino en 888Casino');
    window.bringToTop();
    window.getBounds();
    //window.setBounds({ x: -0, y: -0, width: 900, height: 630 });  //888 4K 150% !!!!NO CAMBIAR NYUNCA!!!!!!!!!
    window.setBounds({ x: -0, y: -0, width: 1350, height: 945 });  //PUIGCERDA 888 2K 100% ---> 4K x 1.5
    window.bringToTop();
    firefoxdone++;

}

function resize_spy(time){

    var window2 = getwindow_spy('spy');
    window2.bringToTop();
    window2.getBounds();
    window2.setBounds({ x: 900, y: 0, width: 601, height: 600 });  //888 4K 150%
    window2.bringToTop();
    spydone++;

}

function resize_masterdef(time){

    var window3 = getwindow_masterdef('masterdef');
    window3.bringToTop();
    window3.getBounds();
    window3.setBounds({ x: 900, y: 600, width: 601, height: 600 });  //888 4K 150%
    window3.bringToTop();
    masterdefdone++;

}


function resize_exec(time){

    var window4 = getwindow_exec('exec');
    window4.bringToTop();
    window4.getBounds();
    window4.setBounds({ x: 0, y: 600, width: 601, height: 600 });  //888 4K 150%
    window4.bringToTop();
    execdone++;

}



async function open_spy(time) {
    
    if (process.argv[2] == "pgcda") {
        child_process.exec("start \"spy\" cmd.exe /c node C:\\Users\\Sergi\\Desktop\\rou_2021\\roudef\\spy\\spydef888.js parm1 parm2");
    } else {
        child_process.exec("start \"spy\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\spy\\spydef888.js parm1 parm2");
    }
}


async function open_exec(time) {
    
    if (process.argv[2] == "pgcda") {
        child_process.exec("start \"exec\" cmd.exe /c node C:\\Users\\Sergi\\Desktop\\rou_2021\\roudef\\exec\\exec888.js parm1 parm2");
    } else {
        child_process.exec("start \"exec\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\exec\\exec888.js parm1 parm2");
    }

}

function open_masterdef(time) {
    
    if (process.argv[2] == "pgcda") {
        child_process.exec("start \"masterdef\" cmd.exe /c node C:\\Users\\Sergi\\Desktop\\rou_2021\\roudef\\master\\masterdef.js parm1 parm2");
    } else {
        child_process.exec("start \"masterdef\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\roudef\\master\\masterdef.js parm1 parm2");
    }

}

open_firefox();
open_masterdef();
open_spy();
open_exec();



//Resize Spy
var sxx = setInterval(() => {

    if (spydone<1) {
        resize_spy()
    } else {
        clearInterval(sxx)
    }

}, 1000);


//Resize Masterdef
var mxx = setInterval(() => {

    if (masterdefdone<1) {
        resize_masterdef()
    } else {
        clearInterval(mxx)
    }

}, 2000);

//Resize Exec
var exx = setInterval(() => {

    if (execdone<1) {
        resize_exec()
    } else {
        clearInterval(exx)
    }

}, 3000);

//Resize Exec
var fxx = setInterval(() => {

    if (firefoxdone<1) {
        resize_firefox()
    } else {
        clearInterval(fxx)
    }

}, 5000);



setInterval(() => {

    if (firefoxdone==1 && execdone==1 && spydone==1 && masterdefdone==1 ) {
        process.exit()
    } 

}, 1000);








/*

const { windowManager } = require("./dist/index");

console.log(windowManager.requestAccessibility()); // required on macOS

const window = windowManager.getActiveWindow();
console.log(window.getTitle());

const bounds = window.getBounds();
console.log(bounds);

window.setBounds({ x: 0, y: 0 });
window.maximize();

setTimeout(() => {
  window.setBounds(bounds);
}, 1000);

console.log("Windows list");
windowManager.getWindows().forEach((window) => {
  if (window.isVisible()) {
    console.log(window.getTitle(), window.path);
  }
});

windowManager.on("window-activated", (window) => {
  console.log(window.path);
});

console.log("Monitors list");
windowManager.getMonitors().forEach((monitor) => {
  console.log(monitor.getWorkArea());
});


*/
