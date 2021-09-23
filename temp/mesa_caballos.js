let combinaciones_totales = 0;
let combi = [];
let combi_bin = [];
let combi_hex = [];


function gen_combi() {

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
                                                                                                                                                                                                                               //console.log(i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21,i22,i23,i24,i25,i26,i27,i28,i29,i30,i31,i32,i33,i34,i35,i36);
                                                                            let v = i1+i2+i3+i4+i5+i6+i7+i8+i9+i10+i11+i12+i13+i14+i15+i16+i17+i18;
                                                                                                                                                        
                                                                                                                                                        

                                                                            if (v == 9) {
                                                                                combinaciones_totales = combinaciones_totales + 1;
                                                                                combi.push([i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18]);     
                                                                                                                                                                              


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

return combi;

}


function gen_binario(){

  
    for (let index = 0; index < combi.length; index++) {
        
        const element = combi[index];
        
        let temp = [];
        temp[0]=0;
        //1-4
        if (element[0]==1) {temp[1]=1;temp[4]=1;} else {temp[1]=0;temp[4]=0;}
        //2-5
        if (element[1]==1) {temp[2]=1;temp[5]=1;} else {temp[2]=0;temp[5]=0;}
        //3-6
        if (element[2]==1) {temp[3]=1;temp[6]=1;} else {temp[3]=0;temp[6]=0;}
        //7-10
        if (element[3]==1) {temp[7]=1;temp[10]=1;} else {temp[7]=0;temp[10]=0;}
        //8-11
        if (element[4]==1) {temp[8]=1;temp[11]=1;} else {temp[8]=0;temp[11]=0;}
        //9-12
        if (element[5]==1) {temp[9]=1;temp[12]=1;} else {temp[9]=0;temp[12]=0;}
        //13-16
        if (element[6]==1) {temp[13]=1;temp[16]=1;} else {temp[13]=0;temp[16]=0;}
        //14-17
        if (element[7]==1) {temp[14]=1;temp[17]=1;} else {temp[14]=0;temp[17]=0;}
        //15-18
        if (element[8]==1) {temp[15]=1;temp[18]=1;} else {temp[15]=0;temp[18]=0;}
        //19-22
        if (element[9]==1) {temp[19]=1;temp[22]=1;} else {temp[19]=0;temp[22]=0;}
        //20-23
        if (element[10]==1) {temp[20]=1;temp[23]=1;} else {temp[20]=0;temp[23]=0;}
        //21-24
        if (element[11]==1) {temp[21]=1;temp[24]=1;} else {temp[21]=0;temp[24]=0;}
        //25-28
        if (element[12]==1) {temp[25]=1;temp[28]=1;} else {temp[25]=0;temp[28]=0;}
        //26-29
        if (element[13]==1) {temp[26]=1;temp[29]=1;} else {temp[26]=0;temp[29]=0;}
        //27-30
        if (element[14]==1) {temp[27]=1;temp[30]=1;} else {temp[27]=0;temp[30]=0;}
        //31-34
        if (element[15]==1) {temp[31]=1;temp[34]=1;} else {temp[31]=0;temp[34]=0;}
        //32-35
        if (element[16]==1) {temp[32]=1;temp[35]=1;} else {temp[32]=0;temp[35]=0;}
        //33-36
        if (element[17]==1) {temp[33]=1;temp[36]=1;} else {temp[33]=0;temp[36]=0;}

        combi_bin.push(temp);

    }

}

function gen_hex(){

    

    for (let index = 0; index < combi_bin.length; index++) {
        
        

        
        
        const element = combi_bin[index];
        

    }


}




// Generamos combinaciones de 18 con v=9
gen_combi();
console.log(combinaciones_totales);
console.log(combi.length);
console.log(combi[1]);

//Pasar a binario [array con 36] diferente para cada tipo de apuesta
gen_binario()
console.log(combi_bin.length);
console.log(combi_bin[1]);

//Generamos el array definitivo
gen_hex();


//exports.combi_hex=combi_hex;   exportamos los datos.... si se puede¿?¿?¿?
