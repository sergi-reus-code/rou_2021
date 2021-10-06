const { doesNotMatch } = require('assert');
var fs = require('fs'); 

let combinaciones_totales = 0;

let combi = [];



var fs = require('fs');



function borrar_archivos (linia){

    if (fs.existsSync('c:\\combi\\2e36_0_18.txt')) { fs.unlink('c:\\combi\\2e36_0_18.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_1_17.txt')) { fs.unlink('c:\\combi\\2e36_1_17.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_2_16.txt')) { fs.unlink('c:\\combi\\2e36_2_16.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_3_15.txt')) { fs.unlink('c:\\combi\\2e36_3_15.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_4_14.txt')) { fs.unlink('c:\\combi\\2e36_4_14.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_5_13.txt')) { fs.unlink('c:\\combi\\2e36_5_13.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_6_12.txt')) { fs.unlink('c:\\combi\\2e36_6_12.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_7_11.txt')) { fs.unlink('c:\\combi\\2e36_7_11.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_8_10.txt')) { fs.unlink('c:\\combi\\2e36_8_10.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_9_9.txt'))  { fs.unlink('c:\\combi\\2e36_9_9.txt',  function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_10_8.txt')) { fs.unlink('c:\\combi\\2e36_10_8.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_11_7.txt')) { fs.unlink('c:\\combi\\2e36_11_7.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_12_6.txt')) { fs.unlink('c:\\combi\\2e36_12_6.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_13_5.txt')) { fs.unlink('c:\\combi\\2e36_13_5.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_14_4.txt')) { fs.unlink('c:\\combi\\2e36_14_4.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_15_3.txt')) { fs.unlink('c:\\combi\\2e36_15_3.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_16_2.txt')) { fs.unlink('c:\\combi\\2e36_16_2.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_17_1.txt')) { fs.unlink('c:\\combi\\2e36_17_1.txt', function (err) { if (err) throw err; }); }
    if (fs.existsSync('c:\\combi\\2e36_18_0.txt')) { fs.unlink('c:\\combi\\2e36_18_0.txt', function (err) { if (err) throw err; }); }
    
} 


function gravar_archivos (file, data){

    switch (file) {
        //case 0:   fs.appendFileSync('c:\\combi\\2e36_0_18.txt',data); break;  DONE
        //case 1:   fs.appendFileSync('c:\\combi\\2e36_1_17.txt',data); break;  DONE
        //case 2:   fs.appendFileSync('c:\\combi\\2e36_2_16.txt',data); break;  DONE
        //case 3:   fs.appendFileSync('c:\\combi\\2e36_3_15.txt',data); break;
        //case 4:   fs.appendFileSync('c:\\combi\\2e36_4_14.txt',data); break;
        //case 5:   fs.appendFileSync('c:\\combi\\2e36_5_13.txt',data); break;
        //case 6:   fs.appendFileSync('c:\\combi\\2e36_6_12.txt',data); break;
        //case 7:   fs.appendFileSync('c:\\combi\\2e36_7_11.txt',data); break;
        //case 8:   fs.appendFileSync('c:\\combi\\2e36_8_10.txt',data); break;
        //case 9:   fs.appendFileSync('c:\\combi\\2e36_9_9.txt',data); break;
        //case 10:  fs.appendFileSync('c:\\combi\\2e36_10_8.txt',data); break;
        //case 11:  fs.appendFileSync('c:\\combi\\2e36_11_7.txt',data); break;
        //case 12:  fs.appendFileSync('c:\\combi\\2e36_12_6.txt',data); break;
        //case 13:  fs.appendFileSync('c:\\combi\\2e36_13_5.txt',data); break;
        //case 14:  fs.appendFileSync('c:\\combi\\2e36_14_4.txt',data); break;
        //case 15:  fs.appendFileSync('c:\\combi\\2e36_15_3.txt',data); break;
        //case 16:  fs.appendFileSync('c:\\combi\\2e36_16_2.txt',data); break;
        //case 17:  fs.appendFileSync('c:\\combi\\2e36_17_1.txt',data); break;
        //case 18:  fs.appendFileSync('c:\\combi\\2e36_18_0.txt',data); break;
        
        default:
            break;
    }
} 






function gen_combi_36_18(lim_inf, lim_sup,file) {

    combinaciones_totales = 0;

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
                                                                                                                                                    
                                                                                                                                                    let v = i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i19 + i20 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28 + i29 + i30 + i31 + i32 + i33 + i34 + i35 + i36;
                                                                                                                                                    let v_18 = i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18;
                                                                                                                                                    
                                                                                                                                                    //if(combinaciones_totales > 99999 ){return;}
                                                                                                                                                    
                                                                                                                                                    if (v == 18) {
                                                                                                                                                        
                                                                                                                                                        combinaciones_totales = combinaciones_totales + 1;
                                                                                                                                                        var data = i1.toString() + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i19 + i20 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28 + i29 + i30 + i31 + i32 + i33 + i34 + i35 + i36 +"-"+ combinaciones_totales + "\r";
                                                                                                                                                        //fs.appendFileSync('c:\\combi\\2e36_7_11.txt',data);                                                                                                                                           
                                                                                                                                                        //gravar_archivos(v_18,data);

                                                                                                                                                        if(lim_inf < combinaciones_totales && combinaciones_totales < lim_sup ) {fs.appendFileSync(file,data);} 
                                                                                                                                                        if(combinaciones_totales > lim_sup) {return;}
                                                                                                                                                                                                                                                                                             
                                                                                                                                                    
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
 * Inicio programa test de combinaciones
 */
console.log("Inicio programa test de combinaciones....");

timestamp = Date.now();

borrar_archivos();

/**
 * 
 * PUIGCERDA
 * 
 */
//gen_combi_36_18(0,100000000,'c:\\combi\\0_100000000.txt');                          //  100.000.000 combinaciones   // aprox 4,5GB por archivo
//gen_combi_36_18(100000000,200000000,'c:\\combi\\100000000_200000000.txt');          //  200.000.000 combinaciones
//gen_combi_36_18(200000000,300000000,'c:\\combi\\200000000_300000000.txt');          //  300.000.000 combinaciones
//gen_combi_36_18(300000000,400000000,'c:\\combi\\300000000_400000000.txt');          //  400.000.000 combinaciones
gen_combi_36_18(400000000,500000000,'c:\\combi\\400000000_500000000.txt');          //  500.000.000 combinaciones
gen_combi_36_18(500000000,600000000,'c:\\combi\\500000000_600000000.txt');          //  600.000.000 combinaciones
gen_combi_36_18(600000000,700000000,'c:\\combi\\600000000_700000000.txt');          //  700.000.000 combinaciones
gen_combi_36_18(700000000,800000000,'c:\\combi\\700000000_800000000.txt');          //  800.000.000 combinaciones
gen_combi_36_18(800000000,900000000,'c:\\combi\\800000000_900000000.txt');          //  900.000.000 combinaciones
gen_combi_36_18(900000000,1000000000,'c:\\combi\\900000000_1000000000.txt');        //1.000.000.000 combinaciones

/**
 * 
 * PUIGCERDA
 * 
 */
gen_combi_36_18(1000000000,1100000000,'c:\\combi\\1000000000_1100000000.txt');      //1.100.000.000 combinaciones
gen_combi_36_18(1100000000,1200000000,'c:\\combi\\1100000000_1200000000.txt');      //1.200.000.000 combinaciones
gen_combi_36_18(1200000000,1300000000,'c:\\combi\\1200000000_1300000000.txt');      //1.300.000.000 combinaciones
gen_combi_36_18(1300000000,1400000000,'c:\\combi\\1300000000_1400000000.txt');      //1.400.000.000 combinaciones
gen_combi_36_18(1400000000,1500000000,'c:\\combi\\1400000000_1500000000.txt');      //1.500.000.000 combinaciones
gen_combi_36_18(1500000000,1600000000,'c:\\combi\\1500000000_1600000000.txt');      //1.600.000.000 combinaciones
gen_combi_36_18(1600000000,1700000000,'c:\\combi\\1600000000_1700000000.txt');      //1.700.000.000 combinaciones
gen_combi_36_18(1700000000,1800000000,'c:\\combi\\1700000000_1800000000.txt');      //1.800.000.000 combinaciones
gen_combi_36_18(1800000000,1900000000,'c:\\combi\\1800000000_1900000000.txt');      //1.900.000.000 combinaciones
gen_combi_36_18(1900000000,2000000000,'c:\\combi\\1900000000_2000000000.txt');      //2.000.000.000 combinaciones

/**
 * 
 * RIU
 * 
 */
gen_combi_36_18(2000000000,2100000000,'c:\\combi\\2000000000_2100000000.txt');      //2.100.000.000 combinaciones
gen_combi_36_18(2100000000,2200000000,'c:\\combi\\2100000000_2200000000.txt');      //2.200.000.000 combinaciones
gen_combi_36_18(2200000000,2300000000,'c:\\combi\\2200000000_2300000000.txt');      //2.300.000.000 combinaciones
gen_combi_36_18(2300000000,2400000000,'c:\\combi\\2300000000_2400000000.txt');      //2.400.000.000 combinaciones
gen_combi_36_18(2400000000,2500000000,'c:\\combi\\2400000000_2500000000.txt');      //2.500.000.000 combinaciones
gen_combi_36_18(2500000000,2600000000,'c:\\combi\\2500000000_2600000000.txt');      //2.600.000.000 combinaciones
gen_combi_36_18(2600000000,2700000000,'c:\\combi\\2600000000_2700000000.txt');      //2.700.000.000 combinaciones
gen_combi_36_18(2700000000,2800000000,'c:\\combi\\2700000000_2800000000.txt');      //2.800.000.000 combinaciones
gen_combi_36_18(2800000000,2900000000,'c:\\combi\\2800000000_2900000000.txt');      //2.900.000.000 combinaciones
gen_combi_36_18(2900000000,3000000000,'c:\\combi\\2900000000_3000000000.txt');      //3.000.000.000 combinaciones

/**
 * 
 *  RIU
 * 
 */
gen_combi_36_18(3000000000,3100000000,'c:\\combi\\3000000000_3100000000.txt');      //3.100.000.000 combinaciones
gen_combi_36_18(3100000000,3200000000,'c:\\combi\\3100000000_3200000000.txt');      //3.200.000.000 combinaciones
gen_combi_36_18(3200000000,3300000000,'c:\\combi\\3200000000_3300000000.txt');      //3.300.000.000 combinaciones
gen_combi_36_18(3300000000,3400000000,'c:\\combi\\3300000000_3400000000.txt');      //3.400.000.000 combinaciones
gen_combi_36_18(3400000000,3500000000,'c:\\combi\\3400000000_3500000000.txt');      //3.500.000.000 combinaciones
gen_combi_36_18(3500000000,3600000000,'c:\\combi\\3500000000_3600000000.txt');      //3.600.000.000 combinaciones
gen_combi_36_18(3600000000,3700000000,'c:\\combi\\3600000000_3700000000.txt');      //3.700.000.000 combinaciones
gen_combi_36_18(3700000000,3800000000,'c:\\combi\\3700000000_3800000000.txt');      //3.800.000.000 combinaciones
gen_combi_36_18(3800000000,3900000000,'c:\\combi\\3800000000_3900000000.txt');      //3.900.000.000 combinaciones
gen_combi_36_18(3900000000,4000000000,'c:\\combi\\3900000000_4000000000.txt');      //4.000.000.000 combinaciones

/**
 * 
 *  RIU
 * 
 */
gen_combi_36_18(4000000000,4100000000,'c:\\combi\\4000000000_4100000000.txt');      //4.100.000.000 combinaciones
gen_combi_36_18(4100000000,4200000000,'c:\\combi\\4100000000_4200000000.txt');      //4.200.000.000 combinaciones
gen_combi_36_18(4200000000,4300000000,'c:\\combi\\4200000000_4300000000.txt');      //4.300.000.000 combinaciones
gen_combi_36_18(4300000000,4400000000,'c:\\combi\\4300000000_4400000000.txt');      //4.400.000.000 combinaciones
gen_combi_36_18(4400000000,4500000000,'c:\\combi\\4400000000_4500000000.txt');      //4.500.000.000 combinaciones
gen_combi_36_18(4500000000,4600000000,'c:\\combi\\4500000000_4600000000.txt');      //4.600.000.000 combinaciones





timestamp2 = Date.now();

console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos, en hacer : " + combinaciones_totales);


