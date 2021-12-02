const cron = require('node-cron')
var child_process = require('child_process');
var robot = require("robotjs");


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function open_init() {
    //pgcda
    //child_process.exec("start \"exec\" cmd.exe /c node C:\\Users\\Sergi\\Desktop\\rou_2021\\prod\\init888.js parm1 parm2");
    //riu
    child_process.exec("start \"exec\" cmd.exe /c node C:\\Users\\Sergi_Desktop\\Desktop\\5_rou_2021\\prod\\init888.js parm1 parm2");
}

cron.schedule('*/1 * * * *' ,() => {

    var color_spy = robot.getPixelColor(1598,18) 

    console.log(color_spy);

    if (color_spy != "ffffff"){
        //cerramos todo
        //firefox
        /*
        robot.moveMouse(1258,23); 
        sleep(500)
        robot.mouseClick();
        sleep(500)

        //masterdef
        robot.moveMouse(1883,306); 
        sleep(500)
        robot.mouseClick();
        sleep(500)

        //exec
        robot.moveMouse(1883,719); 
        sleep(500)
        robot.mouseClick();
        sleep(500)

        console.log(Date.now().toString());
*/
       open_init();

    }

})