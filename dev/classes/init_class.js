const open = require("open");
var robot = require("robotjs");
const { windowManager } = require ("node-window-manager");
windowManager.requestAccessibility(); 



module.exports = class Init {
  
  constructor() {
    this.browser_opened = false;
    this.browser_resized = false;
    this.browser_ready = false;


   }

  sleep(ms){
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

  async open_browser() {
    await open('https://www.888casino.es/', {app: {name: "firefox", arguments: []}});//'--kiosk'
    this.sleep(10000)
    this.resize_browser();
    this.sleep(2000)
    this.poner_bien()
    this.browser_ready = true;
    
  }

  resize_browser(){
    var window = getwindow_888('Casino Online | Juegos de Casino en 888Casino');
    window.bringToTop();
    window.getBounds();
    window.setBounds({ x: -0, y: -0, width: 1300, height: 880 });  
    window.bringToTop();
  }

  async poner_bien(){

    var pos_iniciar = [1151,104]
    this.sleep(2000)
    await robot.moveMouse(pos_iniciar[0],pos_iniciar[1]); 
    this.sleep(2000)
    var color = robot.getPixelColor(pos_iniciar[0],pos_iniciar[1])
    if (color == "7ff800") { this.sleep(500);  await robot.mouseClick(); }
  
  
    var pos_iniciar_sesion = [557,529]
    this.sleep(2000)
    await robot.moveMouse(pos_iniciar_sesion[0],pos_iniciar_sesion[1]);
    this.sleep(2000)
    var color = robot.getPixelColor(pos_iniciar_sesion[0],pos_iniciar_sesion[1])
    if (color == "171717") { this.sleep(500);  await robot.mouseClick(); }
  
    
    var check_splash_window = [1039,224]
    this.sleep(4000)
    await robot.moveMouse(check_splash_window[0],check_splash_window[1]); 
    this.sleep(2000)
    var color = robot.getPixelColor(check_splash_window[0],check_splash_window[1])
    if (color == "ffffff") {  this.sleep(500); await robot.mouseClick(); }
  
    
    var click_recientes = [360,855]
    this.sleep(2000)
    await robot.moveMouse(click_recientes[0],click_recientes[1]); 
    this.sleep(2000)
    var color = robot.getPixelColor(click_recientes[0],click_recientes[1])
  //  if (color == "79e614" || color == "79e715" ) { 
        this.sleep(500);
         await robot.mouseClick(); 
   //     }
  
    //esperamos la sincronización
    this.sleep(10000)
  
  
    var moveto_video = [1124,171]
    await robot.moveMouse(moveto_video[0],moveto_video[1]); 
    this.sleep(2000)
    var moveto_video_classic = [1124,250]
    await robot.moveMouse(moveto_video_classic[0],moveto_video_classic[1]); 
    this.sleep(2000)
    await robot.mouseClick();
    this.sleep(2000)
  
  
    var moveto_prev = [1273,224]
    await robot.moveMouse(moveto_prev[0],moveto_prev[1]); 
    this.sleep(500)
    await robot.mouseClick();
    this.sleep(500)
    await robot.mouseClick();
  
  
    var moveto_setup = [1195,171]
    await robot.moveMouse(moveto_setup[0],moveto_setup[1]); 
    this.sleep(250)
    await robot.mouseClick();
    this.sleep(250)
    var moveto_video = [1053,238]
    await robot.moveMouse(moveto_video[0],moveto_video[1]); 
    this.sleep(250)
    await robot.mouseClick();
    this.sleep(250)
    var moveto_baja = [1207,359]
    await robot.moveMouse(moveto_baja[0],moveto_baja[1]); 
    this.sleep(250)
    await robot.mouseClick();
    this.sleep(250)
    var moveto_cerrar = [1273,211]
    await robot.moveMouse(moveto_cerrar[0],moveto_cerrar[1]); 
    this.sleep(250)
    await robot.mouseClick();
    this.sleep(250)
  
  }












}


  function getwindow_888(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      const finestra = windows[index].getTitle().toLowerCase().toString();

      if(finestra.includes("888")){

        console.log(windows[index].getTitle().toLowerCase());
        console.log(index);
        return windows[index];
      }

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        
        return windows[index];
      }
    
    }
  
    return null;
    
}






