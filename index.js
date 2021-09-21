/**
 * Variables globales    
 */

let resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let resultados_binarias = 0;
let repeticiones_binarias = 0;

let resultados_terciarias = 0;
let repeticiones_terciarias = 0;

let resultados_cuaternarias = 0;
let repeticiones_cuaternarias = 0;

let resultados_sexnarias = 0;
let repeticiones_sexnarias = 0;

let resultados_nuevenarias = 0;
let repeticiones_nuevenarias = 0;

let resultados_docearias = 0;
let repeticiones_docenarias = 0;

let resultados_tier = 0;
let repeticiones_tier = 0;
let resultados_no_tier = 0;
let repeticiones_no_tier = 0;

let resultados_orphelins = 0;
let repeticiones_orphelins = 0;
let resultados_no_orphelins = 0;
let repeticiones_no_orphelins = 0;

let resultados_voisins = 0;
let repeticiones_voisins = 0;
let resultados_no_voisins = 0;
let repeticiones_no_voisins = 0;

let resultados_zero = 0;
let repeticiones_zero = 0;
let resultados_no_zero = 0;
let repeticiones_no_zero = 0;





let combinaciones_totales = 0;
let indice_array = 0;






function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function actualizar_resultados(spin) {

    switch (rndInt) {

        case 0: resultados[0] = resultados[0] + 1; break;
        case 1: resultados[1] = resultados[1] + 1; break;
        case 2: resultados[2] = resultados[2] + 1; break;
        case 3: resultados[3] = resultados[3] + 1; break;
        case 4: resultados[4] = resultados[4] + 1; break;
        case 5: resultados[5] = resultados[5] + 1; break;
        case 6: resultados[6] = resultados[6] + 1; break;
        case 7: resultados[7] = resultados[7] + 1; break;
        case 8: resultados[8] = resultados[8] + 1; break;
        case 9: resultados[9] = resultados[9] + 1; break;
        case 10: resultados[10] = resultados[10] + 1; break;
        case 11: resultados[11] = resultados[11] + 1; break;
        case 12: resultados[12] = resultados[12] + 1; break;
        case 13: resultados[13] = resultados[13] + 1; break;
        case 14: resultados[14] = resultados[14] + 1; break;
        case 15: resultados[15] = resultados[15] + 1; break;
        case 16: resultados[16] = resultados[16] + 1; break;
        case 17: resultados[17] = resultados[17] + 1; break;
        case 18: resultados[18] = resultados[18] + 1; break;
        case 19: resultados[19] = resultados[19] + 1; break;
        case 20: resultados[20] = resultados[20] + 1; break;
        case 21: resultados[21] = resultados[21] + 1; break;
        case 22: resultados[22] = resultados[22] + 1; break;
        case 23: resultados[23] = resultados[23] + 1; break;
        case 24: resultados[24] = resultados[24] + 1; break;
        case 25: resultados[25] = resultados[25] + 1; break;
        case 26: resultados[26] = resultados[26] + 1; break;
        case 27: resultados[27] = resultados[27] + 1; break;
        case 28: resultados[28] = resultados[28] + 1; break;
        case 29: resultados[29] = resultados[29] + 1; break;
        case 30: resultados[30] = resultados[30] + 1; break;
        case 31: resultados[31] = resultados[31] + 1; break;
        case 32: resultados[32] = resultados[32] + 1; break;
        case 33: resultados[33] = resultados[33] + 1; break;
        case 34: resultados[34] = resultados[34] + 1; break;
        case 35: resultados[35] = resultados[35] + 1; break;
        case 36: resultados[36] = resultados[36] + 1; break;

        default:

            console.log("error")

            break;
    }




}



function binarias_seguidas(spin) {

    let v = spin;

    if (v == 0 || v == 2 || v == 4 || v == 6 || v == 8 ||
        v == 10 || v == 12 || v == 14 || v == 16 || v == 18 ||
        v == 20 || v == 22 || v == 24 || v == 26 || v == 28 ||
        v == 30 || v == 32 || v == 34 || v == 36) {

        repeticiones_binarias = repeticiones_binarias + 1;

        if (repeticiones_binarias > resultados_binarias) {
            resultados_binarias = repeticiones_binarias;
        }

    } else {
        repeticiones_binarias = 0;
    }

}


function terciarias_seguidas(spin) {
    let v = spin;

    if (v == 0 || v == 1 || v == 2 || v == 3 || v == 4 ||
        v == 5 || v == 6 || v == 7 || v == 8 || v == 9 ||
        v == 10 || v == 11 || v == 12) {

        repeticiones_terciarias = repeticiones_terciarias + 1;

        if (repeticiones_terciarias > resultados_terciarias) {
            resultados_terciarias = repeticiones_terciarias;
        }

    } else {
        repeticiones_terciarias = 0;
    }

}




function cuaternarias_seguidas(spin) {
    let v = spin;

    if (v == 0 || v == 1 || v == 2 || v == 3 || v == 4 ||
        v == 5 || v == 6 || v == 7 || v == 8 || v == 9) {

        repeticiones_cuaternarias = repeticiones_cuaternarias + 1;

        if (repeticiones_cuaternarias > resultados_cuaternarias) {
            resultados_cuaternarias = repeticiones_cuaternarias;
        }

    } else {
        repeticiones_cuaternarias = 0;
    }

}

function sexnarias_seguidas(spin) {
    let v = spin;

    if (v == 0 || v == 1 || v == 2 || v == 3 || v == 4 ||
        v == 5 || v == 6) {

        repeticiones_sexnarias = repeticiones_sexnarias + 1;

        if (repeticiones_sexnarias > resultados_sexnarias) {
            resultados_sexnarias = repeticiones_sexnarias;
        }

    } else {
        repeticiones_sexnarias = 0;
    }

}


function nuevenarias_seguidas(spin) {
    let v = spin;

    if (v == 0 || v == 1 || v == 2 || v == 3 || v == 4) {

        repeticiones_nuevenarias = repeticiones_nuevenarias + 1;

        if (repeticiones_nuevenarias > resultados_nuevenarias) {
            resultados_nuevenarias = repeticiones_nuevenarias;
        }

    } else {
        repeticiones_nuevenarias = 0;
    }

}

function docenarias_seguidas(spin) {
    let v = spin;

    if (v == 0 || v == 1 || v == 2 || v == 3) {

        repeticiones_docenarias = repeticiones_docenarias + 1;

        if (repeticiones_docenarias > resultados_docearias) {
            resultados_docearias = repeticiones_docenarias;
        }

    } else {
        repeticiones_docenarias = 0;
    }

}



function tier_seguidas(spin) {
    let v = spin;

    if (v==33||v==16||v==24||v==5||v==10||v==23||v==8||v==30||v==11||v==36||v==13||v==27) {

        repeticiones_tier = repeticiones_tier + 1;

        if (repeticiones_tier > resultados_tier) {
            resultados_tier = repeticiones_tier;
        }

    } else {
        repeticiones_tier = 0;
    }

}


function tier_no_seguidas(spin) {
    let v = spin;

    if (v==0||v==1||v==2||v==3||v==4||v==6||v==7||v==9||v==12||v==14||v==15||v==17||v==18||v==19||v==20||v==21||v==22||v==25||v==26||v==28||v==29||v==31||v==32||v==34||v==35) {

        repeticiones_no_tier = repeticiones_no_tier + 1;

        if (repeticiones_no_tier > resultados_no_tier) {
            resultados_no_tier = repeticiones_no_tier;
        }

    } else {
        repeticiones_no_tier = 0;
    }

}




function orphelins_seguidas(spin) {
    let v = spin;

    if (v==1||v==20||v==14||v==31||v==9||v==6||v==34||v==17) {

        repeticiones_orphelins = repeticiones_orphelins + 1;

        if (repeticiones_orphelins > resultados_orphelins) {
            resultados_orphelins = repeticiones_orphelins;
        }

    } else {
        repeticiones_orphelins = 0;
    }

}




function orphelins_no_seguidas(spin) {
    let v = spin;

    if (v==2||v==3||v==4||v==5||v==7||v==8||v==10||v==11||v==12||v==13||v==15||v==16||v==18||v==19||v==21||v==22||v==23||v==24||v==25||v==26||v==27||v==28||v==29||v==30||v==31||v==33||v==34||v==36) {

        repeticiones_no_orphelins = repeticiones_no_orphelins + 1;

        if (repeticiones_no_orphelins > resultados_no_orphelins) {
            resultados_no_orphelins = repeticiones_no_orphelins;
        }

    } else {
        repeticiones_no_orphelins = 0;
    }

}






function voisins_seguidas(spin) {
    let v = spin;

    if (v==22||v==18||v==29||v==7||v==28||v==12||v==35||v==3||v==26||v==0||v==32||v==15||v==19||v==4||v==21||v==2||v==25) {

        repeticiones_no_voisins = repeticiones_no_voisins + 1;

        if (repeticiones_no_voisins > resultados_no_voisins) {
            resultados_no_voisins = repeticiones_no_voisins;
        }

    } else {
        repeticiones_no_voisins = 0;
    }

}






function voisins_no_seguidas(spin) {
    let v = spin;

    if (v==1||v==5||v==6||v==8||v==9||v==10||v==11||v==13||v==14||v==16||v==17||v==20||v==23||v==24||v==27||v==30||v==31||v==33||v==34||v==36) {

        repeticiones_voisins = repeticiones_voisins + 1;

        if (repeticiones_voisins > resultados_voisins) {
            resultados_voisins = repeticiones_voisins;
        }

    } else {
        repeticiones_voisins = 0;
    }

}







function zero_seguidas(spin) {
    let v = spin;

    if (v==12||v==35||v==3||v==26||v==0||v==32||v==15) {

        repeticiones_zero = repeticiones_zero + 1;

        if (repeticiones_zero > resultados_zero) {
            resultados_zero = repeticiones_zero;
        }

    } else {
        repeticiones_zero = 0;
    }

}









function zero_no_seguidas(spin) {
    let v = spin;

    if (v==1||v==2||v==4||v==5||v==6||v==7||v==8||v==9||v==10||v==11||v==13||v==14||v==16||v==17||v==18||v==19||v==20||v==21||v==22||v==23||v==24||v==25||v==27||v==28||v==29||v==30||v==31||v==33||v==34||v==36) {

        repeticiones_no_zero = repeticiones_no_zero + 1;

        if (repeticiones_no_zero > resultados_no_zero) {
            resultados_no_zero = repeticiones_no_zero;
        }

    } else {
        repeticiones_no_zero = 0;
    }

}






function mostrar_resultados() {

    console.log(resultados);
    console.log("1.- Pares consecutivos (combinaciones binarias) :  ", resultados_binarias);
    console.log("2.- 1ª Decena consecutivas (combinaciones terciarias) :  ", resultados_terciarias);
    console.log("3.- Del 0 al 9 consecutivos (combinaciones cuaternarias):  ", resultados_cuaternarias);
    console.log("4.- Del 0 al 6 consecutivos (combinaciones sexnarias):  ", resultados_sexnarias);
    console.log("5.- Del 0 al 4 consecutivos (combinaciones nuevearias):  ", resultados_nuevenarias);
    console.log("6.- Del 0 al 3 consecutivos (combinaciones docenarias):  ", resultados_docearias);

    console.log("7a.- Tier consecutivos:  ", resultados_tier);
    console.log("7b.- Tier sin salir:  ", resultados_no_tier);
    console.log("8.- Orphelins consecutivos:  ", resultados_orphelins);
    console.log("8b.- Orphelins sin salir:  ", resultados_no_orphelins);
    console.log("9.- Voisins consecutivosr:  ", resultados_voisins);
    console.log("9b.- Voisins sin salir:  ", resultados_no_voisins);
    console.log("10.- Zero consecutivos:  ", resultados_zero);
    console.log("10b.- Zero sin salir:  ", resultados_no_zero);
    


}











/**
 * Inicio programa
 */


console.log("Inicio simulador de tiradas 2.0...");



for (let index = 0; index < 59520; index++) {     //100 años 70080000   //1 mes   

    
    rndInt = randomIntFromInterval(0, 36);


    actualizar_resultados(rndInt);

    binarias_seguidas(rndInt);

    terciarias_seguidas(rndInt);

    cuaternarias_seguidas(rndInt);

    sexnarias_seguidas(rndInt);

    nuevenarias_seguidas(rndInt);

    docenarias_seguidas(rndInt);

    tier_seguidas(rndInt);
    tier_no_seguidas(rndInt);

    

    orphelins_seguidas(rndInt);
    orphelins_no_seguidas(rndInt);

    voisins_seguidas(rndInt);
    voisins_no_seguidas(rndInt);

    zero_seguidas(rndInt)
    zero_no_seguidas(rndInt)

}





//mostrar_resultados();

console.log("Fin programa");

let now2= new Date();
console.log('La fecha actual es',now2);





let now= new Date();
console.log('La fecha actual es',now);


console.log("Fin programa combi, combinaciones totales : ", resultados);

mostrar_resultados();







const prompt = require('prompt-sync')({sigint: true});
 
// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
 
while (!foundCorrectNumber) {
  // Get user input
  let guess = prompt('Guess a number from 1 to 10: ');
  // Convert the string input to a number
  guess = Number(guess);
 
   // Compare the guess to the secret answer and let the user know.
 
 
  if (guess === numberToGuess) {
    console.log('Congrats, you got it!');
    foundCorrectNumber = true;
  } else {
    console.log('Sorry, guess again!');
  }
}