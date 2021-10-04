
array_slaves = [
[1,0,0,"1.txt"],
[2,0,0,"2.txt"],
[3,0,0,"3.txt"],
[4,0,0,"4.txt"],
[5,0,0,"5.txt"],
[6,0,0,"6.txt"],
[7,0,0,"7.txt"],
[8,0,0,"8.txt"],
[9,0,0,"9.txt"],
[10,0,0,"10.txt"]
];



const getConfig = () => {
    
  
    for (let i = 0; i < array_slaves.length; i++) {
        if (array_slaves[i][1] ==0 ) {
            array_slaves[i][1] = 1;
            return array_slaves[i];
        }
        
    }
};


exports.array_slaves = array_slaves;  
exports.getConfig = getConfig;
  



