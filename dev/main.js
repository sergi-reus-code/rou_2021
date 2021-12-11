var robot = require("robotjs");
const { createWorker } = require('tesseract.js');
var Jimp = require('jimp');


const utils_image = require ("./utils_main/spy_utils_image");
const utils = require('./utils_main/spy_utils');




async function detectar() {

  
  
    const worker = createWorker({
     // langPath: path.join(__dirname,  'lang-data'),
     // logger: m => console.log(m),

    });
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    await worker.setParameters({
      tessedit_char_whitelist: '0123456789',
    });


    try {
        const { data: { text } } = await worker.recognize('./last.png');
        var texto = Number(text)
    } catch (error) {
        console.log("2 " + error);
    }

    try {
        await worker.terminate();
    } catch (error) {
        console.log("3 " + error);
    }

    if (texto == 1) {
      
        var color = 0;
    
        await Jimp.read('./last.png')
            .then(image => {
                color = image.getPixelColor(1, 1);
                console.log(color);
            })
            .catch(err => {
                // Handle an exception.
            });

        if (color==4294967295) {
            texto = 11;
        }
    }

    send_spin_to_master(Number(texto))
  
}




function send_spin_to_master(spin) {
  
  var msg_out = utils.format_spin(spin);

  ioClient.emit('from_spy_to_master_spin',msg_out);

  console.log(JSON.stringify(msg_out));

}


function main_loop(){


  
  
  var colorNW = robot.getPixelColor(667, 396);  //Abajo derecha
  var colorW = robot.getPixelColor(623, 320);   //Arriba izquierda
  

  //NEGRO = 000000 , ROJO = ff0000 , VERDE = 00a031
  
  if (colorNW == "000000" || colorNW == "ff0000" || colorNW == "00a031" ) { 

    utils_image.tomafoto(625,355,45,38);
    utils_image.sleep(4000)
    detectar();
    

  }
  
  if (colorW == "000000" || colorW == "ff0000" || colorW == "00a031" ) {

    utils_image.tomafoto(625,320,45,38);
    utils_image.sleep(4000)
    detectar();
    

  }
  }



setInterval(main_loop, 500);