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

let combinaciones_totales = 0;
let indice_array = 0;

let combi = [[indice_array,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];



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















function mostrar_resultados() {

    console.log(resultados);
    console.log("1.- Pares consecutivos (combinaciones binarias) :  ", resultados_binarias);
    console.log("2.- 1ª Decena consecutivas (combinaciones terciarias) :  ", resultados_terciarias);
    console.log("3.- Del 0 al 9 consecutivos (combinaciones cuaternarias):  ", resultados_cuaternarias);
    console.log("4.- Del 0 al 6 consecutivos (combinaciones sexnarias):  ", resultados_sexnarias);
    console.log("5.- Del 0 al 4 consecutivos (combinaciones nuevearias):  ", resultados_nuevenarias);
    console.log("6.- Del 0 al 3 consecutivos (combinaciones docenarias):  ", resultados_docearias);



}





function gen_combi2() {

    for (let i1 = 0; i1 < 2; i1++) {
        for (let i2 = 0; i2 < 2; i2++) {
            for (let i3 = 0; i3 < 2; i3++) {
                for (let i4 = 0; i4 < 2; i4++) {
                    for (let i5 = 0; i5 < 2; i5++) {
                        for (let i6 = 0; i6 < 2; i6++) {
                            for (let i7 = 0; i7 < 2; i7++) {
                                for (let i8 = 0; i8 < 2; i8++) {
                                    for (let i9 = 0; i9 < 2; i9++) {
                                        for (let i10 = 0; i10 < 2; i10++) {
                                            for (let i11 = 0; i11 < 2; i11++) {
                                                for (let i12 = 0; i12 < 2; i12++) {
                                                    for (let i13 = 0; i13 < 2; i13++) {
                                                        for (let i14 = 0; i14 < 2; i14++) {
                                                            for (let i15 = 0; i15 < 2; i15++) {
                                                                for (let i16 = 0; i16 < 2; i16++) {
                                                                    for (let i17 = 0; i17 < 2; i17++) {
                                                                        for (let i18 = 0; i18 < 2; i18++) {
                                                                            for (let i19 = 0; i19 < 2; i19++) {
                                                                                for (let i20 = 0; i20 < 2; i20++) {
                                                                                    for (let i21 = 0; i21 < 2; i21++) {
                                                                                        for (let i22 = 0; i22 < 2; i22++) {
                                                                                            for (let i23 = 0; i23 < 2; i23++) {
                                                                                                for (let i24 = 0; i24 < 2; i24++) {
                                                                                                    for (let i25 = 0; i25 < 2; i25++) {
                                                                                                        for (let i26 = 0; i26 < 2; i26++) {
                                                                                                            for (let i27 = 0; i27 < 2; i27++) {
                                                                                                                for (let i28 = 0; i28 < 2; i28++) {
                                                                                                                    for (let i29 = 0; i29 < 2; i29++) {
                                                                                                                        for (let i30 = 0; i30 < 2; i30++) {
                                                                                                                            for (let i31 = 0; i31 < 2; i31++) {
                                                                                                                                for (let i32 = 0; i32 < 2; i32++) {
                                                                                                                                    for (let i33 = 0; i33 < 2; i33++) {
                                                                                                                                        for (let i34 = 0; i34 < 2; i34++) {
                                                                                                                                            for (let i35 = 0; i35 < 2; i35++) {
                                                                                                                                                for (let i36 = 0; i36 < 2; i36++) {

                                                                                                                                                        //console.log(i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21,i22,i23,i24,i25,i26,i27,i28,i29,i30,i31,i32,i33,i34,i35,i36);
                                                                                                                                                        let v = i1+i2+i3+i4+i5+i6+i7+i8+i9+i10+i11+i12+i13+i14+i15+i16+i17+i18+i19+i20+i21+i22+i23+i24+i25+i26+i27+i28+i29+i30+i31+i32+i33+i34+i35+i36;
                                                                                                                                                        if (v == 18) {
                                                                                                                                                            combinaciones_totales = combinaciones_totales + 1;
                                                                                                                                                                                                                                                                                             



                                                                                                                                                        }

                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}








/**
 * Inicio programa
 */

console.log("Inicio programa....");





for (let index = 0; index < 500; index++) {     //array.length   34560000

    rndInt = randomIntFromInterval(0, 36);

    actualizar_resultados(rndInt);

    binarias_seguidas(rndInt);

    terciarias_seguidas(rndInt);

    cuaternarias_seguidas(rndInt);

    sexnarias_seguidas(rndInt);

    nuevenarias_seguidas(rndInt);

    docenarias_seguidas(rndInt);


}


mostrar_resultados();

console.log("Fin programa");

let now2= new Date();
console.log('La fecha actual es',now2);


gen_combi2();

let now= new Date();
console.log('La fecha actual es',now);


console.log("Fin programa combi, combinaciones totales : ", combinaciones_totales);

