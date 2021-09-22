/*


const http = require('http')

const data = JSON.stringify({
    spin: '1'
  })

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res.headers)



  res.on('data', d => {
    console.log(d.toString());
    process.stdout.write(d)
  })




})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}




function myFunc(arg) {
    console.log(`arg was => ${arg}`);
  }
  

  




for (let index = 0; index < 4; index++) {
    
    



     //var spin = randomIntFromInterval(0, 36);
     setTimeout(myFunc, 1500, 'funky');
     //console.log(spin);
      

}    
   
*/


const { windowManager } = require ("node-window-manager");
var robot = require("robotjs");
const tesseract = require("node-tesseract-ocr");

windowManager.requestAccessibility();   //for mac






function getwindow(title) {

  let windows = windowManager.getWindows();

  for (let index = 0; index < windows.length; index++) {
    
    //console.log(windows[index].getBounds());

    if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
      return windows[index];
    }
    
  }

  return null;
  
}


getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
getwindow('Casino en vivo - Mozilla Firefox').getBounds();
getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1000, height: 720 });
console.log(getwindow('Casino en vivo - Mozilla Firefox').bringToTop());
console.log(getwindow('Casino en vivo - Mozilla Firefox').getBounds().height);


robot.moveMouse(100, 100);



