var robot = require("robotjs");
const { sleep } = require("./exec_utils");

var n0 =  [57,628];

var n3 =  [116,585];
var n2 =  [116,628];
var n1 =  [116,672];

var n6 =  [171,585];
var n5 =  [171,628];
var n4 =  [171,672];

var n9 =  [231,585];
var n8 =  [231,628];
var n7 =  [231,672];

var n12 =  [290,585];
var n11 =  [290,628];
var n10 =  [290,672];

var n15 =  [348,585];
var n14 =  [348,628];
var n13 =  [348,672];

var n18 =  [407,585];
var n17 =  [407,628];
var n16 =  [407,672];

var n21 =  [465,585];
var n20 =  [465,628];
var n19 =  [465,672];

var n24 =  [524,585];
var n23 =  [524,628];
var n22 =  [524,672];

var n27 =  [586,585];
var n26 =  [586,628];
var n25 =  [586,672];

var n30 =  [640,585];
var n29 =  [640,628];
var n28 =  [640,672];

var n33 =  [702,585];
var n32 =  [702,628];
var n31 =  [702,672];

var n36 =  [760,585];
var n35 =  [760,628];
var n34 =  [760,672];


var m01 =  [537,822];
var m1 =  [582,822];
var m2 =   [626,822];
var m5 =   [670,822];
var m25 =  [715,822];
var m100 = [757,822];

var mred = [379,748];
var mblack = [495,748];

var bdes = [496,822];
var brea = [805,822];

var timer = 35;
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
        case 0.1:
            clickmoney(m01)
            sleep(25)
            clicknumbers(array,1)
            break;
        case 0.2:
            clickmoney(m01)
            sleep(25)
            clicknumbers(array,2)
            break;   
        case 0.4:
            clickmoney(m01)
            sleep(25)
            clicknumbers(array,4)
            break;  
        case 0.8:
            clickmoney(m01)
            sleep(25)
            clicknumbers(array,8)
            break; 
        case 1.6:
            clickmoney(m1)
            sleep(25)
            clicknumbers(array,1)
            sleep(25)
            clickmoney(m01)
            sleep(25)
            clicknumbers(array,6)
            break;   
        case 3.2:
            clickmoney(m1)
            sleep(25)
            clicknumbers(array,3)
            sleep(25)
            clickmoney(m01)
            sleep(25)
            clicknumbers(array,2)
             break; 

        case 6.4:
            clickmoney(m2)
            sleep(25)
            clicknumbers(array,3)
            sleep(25)
            clickmoney(m01)
            sleep(25)
            clicknumbers(array,4)
            break; 









        default:
            break;
    }



}



function do_timer_bet(bet) {
    

        
            clickmoney(m01)
            sleep(50)
            clickmoney(mred) // apretar rojo
            sleep(50)
            clickmoney(mblack) // apretar negre

  
}






exports.n0 = n0,   
exports.n1 = n1,   exports.n2 = n2,   exports.n3 = n3,   exports.n4 = n4,   exports.n5 = n5,   exports.n6 = n6,   exports.n7 = n7,   exports.n8 = n8,   exports.n9 = n9,   exports.n10 = n10,
exports.n11 = n11, exports.n12 = n12, exports.n13 = n13, exports.n14 = n14, exports.n15 = n15, exports.n16 = n16, exports.n17 = n17, exports.n18 = n18, exports.n19 = n19, exports.n20 = n20,
exports.n21 = n21, exports.n22 = n22, exports.n23 = n23, exports.n24 = n24, exports.n25 = n25, exports.n26 = n26, exports.n27 = n27, exports.n28 = n28, exports.n29 = n29, exports.n30 = n30,
exports.n31 = n31, exports.n32 = n32, exports.n33 = n33, exports.n34 = n34, exports.n35 = n35, exports.n36 = n36,

exports.m01  = m01,
exports.m2  = m2,
exports.m1   = m1,
exports.m5   = m5,
exports.m25  = m25,
exports.m100 = m100,

exports.bdes=bdes,
exports.brea=brea,

exports.dobet=dobet,

exports.do_timer_bet=do_timer_bet