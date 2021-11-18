var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep, tomafoto} = require ("./spy_utils/spy_utils_image");














function main_loop(){
  
 

}
  


/**
* Previous work
*//*
getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
getwindow('Casino en vivo - Mozilla Firefox').getBounds();
getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1024, height: 760 });
getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
*/
//casino online | juegos de casino en 888casino

getwindow('Casino Online | Juegos de Casino en 888Casino').bringToTop();
getwindow('Casino Online | Juegos de Casino en 888Casino').getBounds();
getwindow('Casino Online | Juegos de Casino en 888Casino').setBounds({ x: 0, y: 0, width: 1024, height: 760 });
getwindow('Casino Online | Juegos de Casino en 888Casino').bringToTop();



/**
* Main loop
*/
  
setInterval(main_loop, 1000);