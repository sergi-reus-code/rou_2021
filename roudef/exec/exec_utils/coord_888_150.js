var robot = require("robotjs");
const { sleep } = require("./exec_utils");

var n0 =  [83,655];

var n3 =  [141,616];
var n2 =  [141,655];
var n1 =  [141,701];

var n6 =  [197,616];
var n5 =  [197,655];
var n4 =  [197,701];

var n9 =  [257,616];
var n8 =  [257,655];
var n7 =  [257,701];

var n12 =  [317,616];
var n11 =  [317,655];
var n10 =  [317,701];

var n15 =  [376,616];
var n14 =  [376,655];
var n13 =  [376,701];

var n18 =  [437,616];
var n17 =  [437,655];
var n16 =  [437,701];

var n21 =  [494,616];
var n20 =  [494,655];
var n19 =  [494,701];

var n24 =  [551,616];
var n23 =  [551,655];
var n22 =  [551,701];

var n27 =  [610,616];
var n26 =  [610,655];
var n25 =  [610,701];

var n30 =  [668,616];
var n29 =  [668,655];
var n28 =  [668,701];

var n33 =  [729,616];
var n32 =  [729,655];
var n31 =  [729,701];

var n36 =  [785,616];
var n35 =  [785,655];
var n34 =  [785,701];


var m01 =  [566,852];
var m1 =   [609,852];
var m2 =   [653,852];
var m5 =   [697,852];

var bdes = [504,690];
var brea = [555,690];

var red = [100,100]
var red = [100,100]

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
        case 0.1:
            clickmoney(m01)
            sleep(100)
            clicknumbers(array,1)
            break;
        case 0.2:
            clickmoney(m01)
            sleep(100)
            clicknumbers(array,2)
            break;   
        case 0.5:
            clickmoney(m01)
            sleep(100)
            clicknumbers(array,5)
            break;   
        case 1:
            clickmoney(m1)
            sleep(100)
            clicknumbers(array,1)
            break;  
        case 2:
            clickmoney(m2)
            sleep(100)
            clicknumbers(array,1)
            break; 
        case 5:
            clickmoney(m5)
            sleep(100)
            clicknumbers(array,1)
            break;   
        default:
            break;
    }



}



function do_timer_bet() {
    
    //clickmoney(m01)
    //sleep(100)
    
    //console.log("pecador!!!! haz apuesta!!!!!!!!!!!!!");
    
    //clicknumbers(array,1)

 

}


exports.dobet=dobet,
exports.do_timer_bet =do_timer_bet