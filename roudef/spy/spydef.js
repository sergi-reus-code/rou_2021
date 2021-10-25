



/*



function main_loop(){
  
    
    gui.renderGUI(last_apuesta);

    var spin = prompt('Introduce Spin: ');
    
    spin = Number(spin);
    combi_totales++;
    
    update_combi_pool([combi_totales, spin]);

    let current_apuesta = get_best_bet();
    last_apuesta = [...current_apuesta];

    if(current_apuesta[39]==18){

        gui.renderBOTTOM(current_apuesta);


    let pp = prompt('Quieres apostar: Introduce . + Intro ---->  ');

    if (pp === "."){
        
        console.log("apuesto");    
        
                    
            wm.apostar_numero(current_apuesta);
            
        

    }

    




    console.log(current_apuesta + " - " + Number(get_chk(current_apuesta)));

    }




}
    */









if (process.argv[2] == "testm") {
    
    console.log("Iniciando en modo.... TEST MANUAL (Entrada de datos manual)");
    //setInterval(test_loop, 5);

} else if (process.argv[2] == "testa"){
    
    console.log("Iniciando en modo.... TEST AUTOMATICO (Entrada de datos automatica desde WEB)");
    //setInterval(test_loop, 5);

} else {

    console.log("Iniciando en modo.... MODO NORMAL (Todo automatico)");
    //setInterval(main_loop, 1000);

}
  

