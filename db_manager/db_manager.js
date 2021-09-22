//Node js class: Here a quick code example

// Basic class
'use strict';

let reg_bin = [];       // par-impar, rojo_negro, falta_pasa
let reg_ter = [];       // docenas y columnas
let mesa_lin_12 = [];   // 1/12 a linia  
let mesa_lin_9 = [];    // 1/9 a linia  
let mesa_lin_6 = [];    // 1/6 a linia  
let mesa_lin_3 = [];    // 1/3 a linia  
let mesa_lin_2 = [];    // 1/2 a linia  
let mesa_2lin_6 = [];   // 1/6 a doble linia  
let mesa_2lin_3 = [];   // 1/3 a doble linia  
let mesa_2lin_2 = [];   // 1/2 a doble linia  




























function regulares(){

  return 10;
  
}






























class db_manager{
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getUserStats() {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Email: ${this.email}
    `;
  }

  gettest(){

      return regulares();
  }

  iniciar_database(){
      //crear array de regulares





      return "Database inicializada";
    
  }

  check_update_database(){




  }





}







module.exports = db_manager;
