const fs = require('fs')
spin_num = 0;
combi_array30 = []
combi_array30_ordered = []
tirada1 = false
tirada2 = false



function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function push_array30(spin,rep){
  if (!combi_array30.includes(spin))  {
    if (combi_array30.length==Number(rep)) {
      combi_array30.pop();
    }
    combi_array30.unshift(spin)
  } else {

    var pos = combi_array30.indexOf(spin);  
    //quitar el numero i poner al principio
    //console.log(spin + " -> " + pos);
    combi_array30.splice(pos,1);
    combi_array30.unshift(spin)

  }

  combi_array30_ordered = combi_array30.slice();

   combi_array30_ordered.sort(function(a, b){return a - b});

var chk = calc_chk30(combi_array30)

var txt1 = spin_num + " ; " +spin+ "; [" + combi_array30.toString()+"]."+combi_array30.length
var txt2 = spin_num + " ; " +spin+ "; [" + combi_array30_ordered.toString()+"] ; "+combi_array30_ordered.length + " ; " + chk
//var txt1 = combi_array30.toString() + "," + spin_num+"."+combi_array30.length

//console.log(chk);

if (chk > 0) {
 




  if ((tirada1 == true) && (tirada2 == true)) {
    //reset all
    tirada1 = false
    tirada2 = false
   
    
    combi_array30 = []
    
  }

  if ((tirada1 == true) & (tirada2 == false)) {
    fs.appendFileSync('test.txt',txt2 + "\n");
    console.log(txt2);
    tirada2 = true
    
  }

  if (tirada1 == false) {
    fs.appendFileSync('test.txt',txt2 + "\n");
    console.log(txt2);
    tirada1 = true
    
  }





  
}



//fs.appendFileSync('test.txt',txt1 + "\n");
//fs.appendFileSync('test.txt',txt2 + "\n");
//fs.appendFileSync('test.txt',"\n");
return chk

}



function check_win(spin){


  



}


function calc_chk30(ca){

var chk = ca[0]+ca[1]+ca[2]+ca[3]+ca[4]+ca[5]+ca[6]+ca[7]+ca[8]+ca[9]+ca[10]+
ca[11]+ca[12]+ca[13]+ca[14]+ca[15]+ca[16]+ca[17]+ca[18]+ca[19]+ca[20]+
ca[21]+ca[22]+ca[23]+ca[24]+ca[25]+ca[26]+ca[27]+ca[28]+ca[29]
//+ca[30]+ca[31]+ca[32]+ca[33]+ca[34]+ca[35]+ca[36]

return chk

}
function calc_chk35(ca){

  var chk = ca[0]+ca[1]+ca[2]+ca[3]+ca[4]+ca[5]+ca[6]+ca[7]+ca[8]+ca[9]+ca[10]+
  ca[11]+ca[12]+ca[13]+ca[14]+ca[15]+ca[16]+ca[17]+ca[18]+ca[19]+ca[20]+
  ca[21]+ca[22]+ca[23]+ca[24]//+ca[25]+ca[26]+ca[27]+ca[28]+ca[29]+
  //ca[30]+ca[31]+ca[32]+ca[33]+ca[34]
  
  return chk
  
  }





//1 apuesta y plego
function stra1(params) {
  
}

//1 apuesta y si pierdo reapuesto
function stra2(params) {
  
}

//2 apuesta y plego
function stra3(params) {
  
}
//2 apuesta y si pierdo la segunda reapuesto
function stra4(params) {
  
}















if (fs.existsSync('test.txt')) { fs.unlink('test.txt', function (err) { if (err) throw err; }); }


setInterval(() => {

        var spin = randomInt(0,36);
        spin_num++

        //check previous bet
        check_win(spin);


        //actualizar array
        push_array30(msg_out.spin,30)


        //send spin & receive bet
        //bet = push_array30(msg_out.spin,30)

        //execute bet



        

        push_array30(msg_out.spin,30)
        

        


}, 100);



  


