var child_process = require('child_process');
var open = require("open");
var robot = require("robotjs");
const { clearInterval } = require('timers');
const { getwindow, getwindow_888, getwindow_spy, getwindow_masterdef, getwindow_exec,sleep, tomafoto} = require ("./init_utils/init_utils.js");
var firefoxdone =0;
var spydone =0;
var masterdefdone =0;
var execdone =0;

async function open_firefox() {
    await open('https://www.888casino.es/', {app: {name: "firefox", arguments: []}});//'--kiosk'
}

async function open_spy() {
    //Pgcda
    //child_process.exec("start \"spy\" cmd.exe /c node C:\\Users\\Sergi\\Desktop\\rou_2021\\prod\\spydef888.js parm1 parm2");.
    //Riu
    child_process.exec("start \"spy\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\prod\\spydef888.js parm1 parm2");
}

async function open_exec() {
    //Pgcda
    //child_process.exec("start \"exec\" cmd.exe /c node C:\\Users\\Sergi\\Desktop\\rou_2021\\prod\\exec888.js parm1 parm2");
    //Riu
    child_process.exec("start \"exec\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\prod\\exec888.js parm1 parm2");
}

function open_masterdef() {
    //Pgcda
    //child_process.exec("start \"masterdef\" cmd.exe /c node C:\\Users\\Sergi\\Desktop\\rou_2021\\prod\\masterdef.js parm1 parm2");
    //Riu
    child_process.exec("start \"masterdef\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\prod\\masterdef.js parm1 parm2");
}

function resize_firefox(){
    var window = getwindow_888('Casino Online | Juegos de Casino en 888Casino');
    window.bringToTop();
    window.getBounds();
    window.setBounds({ x: -0, y: -0, width: 1300, height: 880 });  
    window.bringToTop();
    firefoxdone++;
}

function resize_spy(){
    var window2 = getwindow_spy('spy');
    window2.bringToTop();
    window2.getBounds();
    window2.setBounds({ x: 1287, y: 0, width: 640, height: 300 });  
    window2.bringToTop();
    spydone++;
}

function resize_masterdef(){
    var window3 = getwindow_masterdef('masterdef');
    window3.bringToTop();
    window3.getBounds();
    window3.setBounds({ x: 1287, y: 292, width: 640, height: 421 });  //888 4K 150%
    window3.bringToTop();
    masterdefdone++;
}

function resize_exec(){
    var window4 = getwindow_exec('exec');
    window4.bringToTop();
    window4.getBounds();
    window4.setBounds({ x: 1287, y: 705, width: 640, height: 340 });  //888 4K 150%
    window4.bringToTop();
    execdone++;
}

async function poner_bien(){

    var pos_iniciar = [1151,104]
    sleep(2000)
    await robot.moveMouse(pos_iniciar[0],pos_iniciar[1]); 
    sleep(2000)
    var color = robot.getPixelColor(pos_iniciar[0],pos_iniciar[1])
    if (color == "7ff800") { sleep(500);  await robot.mouseClick(); }


    var pos_iniciar_sesion = [557,529]
    sleep(2000)
    await robot.moveMouse(pos_iniciar_sesion[0],pos_iniciar_sesion[1]);
    sleep(2000)
    var color = robot.getPixelColor(pos_iniciar_sesion[0],pos_iniciar_sesion[1])
    if (color == "171717") { sleep(500);  await robot.mouseClick(); }

    
    var check_splash_window = [1039,224]
    sleep(4000)
    await robot.moveMouse(check_splash_window[0],check_splash_window[1]); 
    sleep(2000)
    var color = robot.getPixelColor(check_splash_window[0],check_splash_window[1])
    if (color == "ffffff") {  sleep(500); await robot.mouseClick(); }

    
    var click_recientes = [360,855]
    sleep(2000)
    await robot.moveMouse(click_recientes[0],click_recientes[1]); 
    sleep(2000)
    var color = robot.getPixelColor(click_recientes[0],click_recientes[1])
  //  if (color == "79e614" || color == "79e715" ) { 
        sleep(500);
         await robot.mouseClick(); 
   //     }

    //esperamos la sincronizaci??n
    sleep(10000)


    var moveto_video = [1124,171]
    await robot.moveMouse(moveto_video[0],moveto_video[1]); 
    sleep(2000)
    var moveto_video_classic = [1124,250]
    await robot.moveMouse(moveto_video_classic[0],moveto_video_classic[1]); 
    sleep(2000)
    await robot.mouseClick();
    sleep(2000)


    var moveto_prev = [1273,224]
    await robot.moveMouse(moveto_prev[0],moveto_prev[1]); 
    sleep(500)
    await robot.mouseClick();
    sleep(500)
    await robot.mouseClick();


    var moveto_setup = [1195,171]
    await robot.moveMouse(moveto_setup[0],moveto_setup[1]); 
    sleep(250)
    await robot.mouseClick();
    sleep(250)
    var moveto_video = [1053,238]
    await robot.moveMouse(moveto_video[0],moveto_video[1]); 
    sleep(250)
    await robot.mouseClick();
    sleep(250)
    var moveto_baja = [1207,359]
    await robot.moveMouse(moveto_baja[0],moveto_baja[1]); 
    sleep(250)
    await robot.mouseClick();
    sleep(250)
    var moveto_cerrar = [1273,211]
    await robot.moveMouse(moveto_cerrar[0],moveto_cerrar[1]); 
    sleep(250)
    await robot.mouseClick();
    sleep(250)




    
    process.exit()

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

    if (firefoxdone==1 && execdone==1 && spydone==1 && masterdefdone==1) {
       
        poner_bien();

       
    } 

}, 1000);







