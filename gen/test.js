var combi = []; 

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
                                                                                                                                                        //var data = i1.toString() + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i19 + i20 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28 + i29 + i30 + i31 + i32 + i33 + i34 + i35 + i36 +"-"+ combinaciones_totales + "\r";
                                                                                                                                                        
                                                                                                                                                        //fs.appendFileSync('c:\\combi\\2e36_7_11.txt',data);                                                                                                                                           
                                                                                                                                                        //gravar_archivos(v_18,data);
                                                                                                                                                        
                                                                                                                                                        data = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21,i22,i23,i24,i25,i26,i27,i28,i29,i30,i31,i32,i33,i34,i35,i36];
                                                                                                                                                        
                                                                                                                                                        //combi.push(data);
                                                                                                                                                        if(lim_inf < combinaciones_totales && combinaciones_totales < lim_sup ) {combi.push(data);} 
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



















function firstFunction(_callback){
    // do some asynchronous work
    // and when the asynchronous stuff is complete

    gen_combi_36_18(0,10000000,"pepe");

    //txt_to_array 
    
    console.log("2wsda");

    _callback();    
}

function secondFunction(){
    // call first function and pass in a callback function which
    // first function runs when it has completed
    firstFunction(function() {
        console.log('huzzah, I\'m done!');

        console.log(combi);

    });    
}


secondFunction();