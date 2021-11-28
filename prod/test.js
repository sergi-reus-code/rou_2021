const { createWorker } = require('tesseract.js');
var Jimp = require('jimp');

const image = ('./11.png');


const worker = createWorker();


async function ttt(lenna){
  
  var color = await lenna.getPixelColor(1, 1);
  console.log(color);

}



async function tt(params) {

  var color = 0;
  var texto=0;


  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(image);
  
  if (text == 1) {
    console.log("eeeeerrrrr" + text);
 
        // open a file called "lenna.png"
        await Jimp.read('./11.png')
        .then(image => {
          color = image.getPixelColor(1, 1);
          console.log(color);
        })
        .catch(err => {
          // Handle an exception.
        });
 }

 if (color==4294967295) {
    texto = 11;
 }


  
  console.log("eooo" + texto);
  await worker.terminate();
}










tt();