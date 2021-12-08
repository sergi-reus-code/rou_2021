const cron = require('node-cron')
var child_process = require('child_process');
const utils = require("./utils/utils");
var path = require("path");



function open_init() {
    
    child_process.exec(`start \"exec\" cmd.exe /c node ${__dirname}\\initPS.js ${process.argv[3]}`);
 
}




//cron.schedule('*/1 * * * *' ,() => {
   open_init();
//})
