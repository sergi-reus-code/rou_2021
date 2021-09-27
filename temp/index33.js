/**
 * Variables globales    
 */
 var fs = require('fs'); 

let combinaciones_totales = 0;
let indice_array = 0;

let combi = [];





function gen_combi_36_18() {

    combinaciones_totales = 0;

    var fs = require('fs');

    fs.unlink('2e36_18.txt.txt', function (err) {
      if (err) throw err;
      console.log('File deleted!');
    }); 

    //fs = openSync('2e36_18.txt.txt', 'w');


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
                                                                            
                                                                            //var nombre_archivo = "C:\\combi\\" + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18+ ".txt"
                                                                            
                                                                            //console.log(i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18);
                                                                            //console.log(nombre_archivo);
                                                                            
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
                                                                                                                                                    let v = i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i19 + i20 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28 + i29 + i30 + i31 + i32 + i33 + i34 + i35 + i36;
                                                                                                                                                    //if(combinaciones_totales > 9999 ){return;}
                                                                                                                                                    if (v == 18) {
                                                                                                                                                        combinaciones_totales = combinaciones_totales + 1;
                                                                                                                                                        var data = i1.toString() + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i19 + i20 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28 + i29 + i30 + i31 + i32 + i33 + i34 + i35 + i36 + "\r";
                                                                                                                                                        //var data = i19.toString() + i20 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28 + i29 + i30 + i31 + i32 + i33 + i34 + i35 + i36 + "\r";
                                                                                                                                                        //var data = "" , i1n , i2 , i3 , i4 , i5 , i6 , i7 , i8 , i9 , i10 , i11 , i12 , i13 , i14 , i15 , i16 , i17 , i18 , i19 , i20 , i21 , i22 , i23 , i24 , i25 , i26 , i27 , i28 , i29 , i30 , i31 , i32 , i33 , i34 , i35 , i36, "\\\r");
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        //combi.push(1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21,i22,i23,i24,i25,i26,i27,i28,i29,i30,i31,i32,i33,i34,i35,i36,0,0,0);     
                                                                                                                                                        //combi.push([256,256,256,256,0,0,0]);  
                                                                                                                                                        //console.log(combinaciones_totales);
                                                                                                                                                        
                                                                                                                                                        
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





function test_combi(){

    for (let i = 0; i < combi.length; i++) {
        
       
        console.log(combi);
        
    }

}









/**
 * Inicio programa test de combinaciones
 */
console.log("Inicio programa test de combinaciones....");

timestamp = Date.now();

gen_combi_36_18();

timestamp2 = Date.now();

console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos");
//console.log("se han hecho : " , combi.length , " combinaciones");

//test_combi();

//timestamp3 = Date.now();

//console.log(" ha tardado : " , (timestamp3 - timestamp2)/1000 , "segundos");
//console.log("Fin programa combi, combinaciones totales : " +  combinaciones_totales.length);

//console.log("se han hecho : " , combi.length , " combinaciones");