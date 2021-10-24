var clc = require("cli-color");



function renderGUI(apuesta){

    console.clear();
    console.log(clc.red(`Saldo : ${500}                                      ` ) + clc.blue("Hora - dia"));
    
    var msg = clc.xterm(202).bgXterm(236);
    
    var pp = 10;
    console.log(msg(`======================================================================================================`));
    console.log(msg(`||     ||  ${03}  ||  ${06}  ||  ${09}  ||  ${12}  ||  ${15}  ||  ${18}  ||  ${21}  ||  ${24}  ||  ${27}  ||  ${30}  ||  ${33}  ||  ${36}  ||`));
    console.log(msg(`||     ||=============================================================================================`));
    console.log(msg(`||  ${0}  ||  ${02}  ||  ${05}  ||  ${08}  ||  ${11}  ||  ${14}  ||  ${17}  ||  ${20}  ||  ${23}  ||  ${26}  ||  ${29}  ||  ${32}  ||  ${35}  ||`));
    console.log(msg(`||     ||=============================================================================================`));
    console.log(msg(`||     ||  ${01}  ||  ${04}  ||  ${07}  ||  ${10}  ||  ${13}  ||  ${16}  ||  ${19}  ||  ${22}  ||  ${25}  ||  ${28}  ||  ${31}  ||  ${34}  ||`));
    console.log(msg(`======================================================================================================`));
    
    /*
    var text = ".........\n" + ". Hello .\n" + ".........\n";
    
    var text = ".........\n" + ". Hello .\n" + ".........\n";
    
    var style = { ".": clc.yellowBright("X") };
    
    process.stdout.write(clc.art(text, style));
    
    var clc = require("cli-color");
    
    process.stdout.write(
      clc.columns([
        [clc.bold("First Name"), clc.bold("Last Name"), clc.bold("Age")],
        ["John", "Doe", 34],
        ["Martha", "Smith", 20],
        ["Jan", "Kowalski", 30]
      ])
    );
    
    
    */
    
    
    //var error = clc.red.bold.bgCyan;
    //var warn = clc.yellow;
    //var notice = clc.blue;
    
    //console.log(error("Error!") + warn("Warning"));
    //console.log(warn("Warning"));
    //console.log(notice("Notice"));

}


function renderBOTTOM(apuesta){

    
    console.log(clc.red(`Apuesta detectada : adsxdfsvzxvzxcvxzcvxzcvzxcvzxc` ) + clc.blue("Hora - dia"));
    
    var msg = clc.xterm(202).bgXterm(236);
    
    
    var text = ".........\n" + ". Hello .\n" + ".........\n";
    
    var text = ".........\n" + ". Hello .\n" + ".........\n";
    
    var style = { ".": clc.yellowBright("X") };
    
    process.stdout.write(clc.art(text, style));
    
    
    
    process.stdout.write(
      clc.columns([
        [clc.bold("First Name"), clc.bold("Last Name"), clc.bold("Age")],
        ["John", "Doe", 34],
        ["Martha", "Smith", 20],
        ["Jan", "Kowalski", 30]
      ])
    );
    
    
    
    
    
    var error = clc.red.bold.bgCyan;
    var warn = clc.yellow;
    var notice = clc.blue;
    
    console.log(error("Error!") + warn("Warning"));
    console.log(warn("Warning"));
    console.log(notice("Notice"));

}


exports.renderGUI = renderGUI;
exports.renderBOTTOM = renderBOTTOM;
