var robot = require("robotjs");
const { sleep } = require("./exec_utils");

var n0 =  [41,541];

var n3 =  [91,543];
var n2 =  [91,575];
var n1 =  [91,604];

var n6 =  [137,543];
var n5 =  [137,575];
var n4 =  [137,604];

var n9 =  [185,543];
var n8 =  [185,575];
var n7 =  [185,604];

var n12 =  [226,543];
var n11 =  [226,575];
var n10 =  [226,604];

var n15 =  [510,543];
var n14 =  [510,575];
var n13 =  [510,604];

var n18 =  [539,543];
var n17 =  [539,575];
var n16 =  [539,604];

var n21 =  [564,543];
var n20 =  [564,575];
var n19 =  [564,604];

var n24 =  [599,543];
var n23 =  [599,575];
var n22 =  [599,604];

var n27 =  [629,543];
var n26 =  [629,575];
var n25 =  [629,604];

var n30 =  [657,543];
var n29 =  [657,575];
var n28 =  [657,604];

var n33 =  [690,543];
var n32 =  [690,575];
var n31 =  [690,604];

var n36 =  [716,543];
var n35 =  [716,575];
var n34 =  [716,604];


var m02 =  [782,690];
var m05 =  [824,690];
var m1 =   [856,690];
var m5 =   [892,690];
var m25 =  [928,690];
var m100 = [964,690];

var bdes = [504,690];
var brea = [555,690];

var timer = 50;
var timerc = 100;


function doclick(times) {

    for (let index = 0; index < times; index++) {
        robot.mouseClick();
        sleep(timer);
        
    }

    


}




function doclicks(click,times) {

    switch (click) {
        case 1: 
            robot.moveMouse(n1[0],n1[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 2: 
            robot.moveMouse(n2[0],n2[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 3: 
            robot.moveMouse(n3[0],n3[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 4: 
            robot.moveMouse(n4[0],n4[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 5: 
            robot.moveMouse(n5[0],n5[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 6: 
            robot.moveMouse(n6[0],n6[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 7: 
            robot.moveMouse(n7[0],n7[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 8: 
            robot.moveMouse(n8[0],n8[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 9: 
            robot.moveMouse(n9[0],n9[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 10: 
            robot.moveMouse(n10[0],n10[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 11: 
            robot.moveMouse(n11[0],n11[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 12: 
            robot.moveMouse(n12[0],n12[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 13: 
            robot.moveMouse(n13[0],n13[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 14: 
            robot.moveMouse(n14[0],n14[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 15: 
            robot.moveMouse(n15[0],n15[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 16: 
            robot.moveMouse(n16[0],n16[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 17: 
            robot.moveMouse(n17[0],n17[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 18: 
            robot.moveMouse(n18[0],n18[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 19: 
            robot.moveMouse(n19[0],n19[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 20: 
            robot.moveMouse(n20[0],n20[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 21: 
            robot.moveMouse(n21[0],n21[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 22: 
            robot.moveMouse(n22[0],n22[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 23: 
            robot.moveMouse(n23[0],n23[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 24: 
            robot.moveMouse(n24[0],n24[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 25: 
            robot.moveMouse(n25[0],n25[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 26: 
            robot.moveMouse(n26[0],n26[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 27: 
            robot.moveMouse(n27[0],n27[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 28: 
            robot.moveMouse(n28[0],n28[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 29: 
            robot.moveMouse(n29[0],n29[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 30: 
            robot.moveMouse(n30[0],n30[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 31: 
            robot.moveMouse(n31[0],n31[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 32: 
            robot.moveMouse(n32[0],n32[1]);           
            doclick(times);
            sleep(timer);
            break;
        case 33: 
            robot.moveMouse(n33[0],n33[1]);           
            doclick(times);
            sleep(timer);
            break;    
        case 34: 
            robot.moveMouse(n34[0],n34[1]);           
            doclick(times);
            sleep(timer);
            break;    
        case 35: 
            robot.moveMouse(n35[0],n35[1]);           
            doclick(times);
            sleep(timer);
            break;    
        case 36: 
            robot.moveMouse(n36[0],n36[1]);           
            doclick(times);
            sleep(timer);
            break;    

        default:
            break;
    }
}




function clickmoney(coin) {
    
    robot.moveMouse(coin[0],coin[1]);           
    robot.mouseClick();
    sleep(timer);

}

function clicknumbers(array,times) {

    for (let index = 0; index < 37; index++) {
        //console.log(array[index]);
        if (array[index]==1) {
               
                doclicks(index,times);
                
        }
          
    }
}



function dobet(bet) {
    
    var coin = Number(bet.bet_quantity)
    var array = bet.bet_array

    console.log("coin" + coin);

    switch (coin) {
        case 0.2:
            clickmoney(m02)
            sleep(100)
            clicknumbers(array,1)
            break;
        case 0.4:
            clickmoney(m02)
            sleep(100)
            clicknumbers(array,2)
            break;   
        case 1:
            clickmoney(m1)
            sleep(100)
            clicknumbers(array,1)
            break;   
        case 2:
            clickmoney(m1)
            sleep(100)
            clicknumbers(array,2)
            break;  
        case 5:
            clickmoney(m5)
            sleep(100)
            clicknumbers(array,1)
            break; 
        case 10:
            clickmoney(m5)
            sleep(100)
            clicknumbers(array,2)
            break;   
        default:
            break;
    }



}


exports.n0 = n0,   
exports.n1 = n1,   exports.n2 = n2,   exports.n3 = n3,   exports.n4 = n4,   exports.n5 = n5,   exports.n6 = n6,   exports.n7 = n7,   exports.n8 = n8,   exports.n9 = n9,   exports.n10 = n10,
exports.n11 = n11, exports.n12 = n12, exports.n13 = n13, exports.n14 = n14, exports.n15 = n15, exports.n16 = n16, exports.n17 = n17, exports.n18 = n18, exports.n19 = n19, exports.n20 = n20,
exports.n21 = n21, exports.n22 = n22, exports.n23 = n23, exports.n24 = n24, exports.n25 = n25, exports.n26 = n26, exports.n27 = n27, exports.n28 = n28, exports.n29 = n29, exports.n30 = n30,
exports.n31 = n31, exports.n32 = n32, exports.n33 = n33, exports.n34 = n34, exports.n35 = n35, exports.n36 = n36,

exports.m02  = m02,
exports.m05  = m05,
exports.m1   = m1,
exports.m5   = m5,
exports.m25  = m25,
exports.m100 = m100,

exports.bdes=bdes,
exports.brea=brea,

exports.dobet=dobet