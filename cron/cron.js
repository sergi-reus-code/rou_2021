const cron = require('node-cron')

//   */30 * * * *   -> Cada minuto divisible por 30
//   0,30 * * * *cada minuto cero y 30 


cron.schedule('0,30 * * * *' ,()=>{

    console.log(Date.now().toString());

})