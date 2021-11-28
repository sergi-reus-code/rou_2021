const cron = require('node-cron')

cron.schedule('*/2 * * * *' ,()=>{

    console.log("dfdsf" + Date.now());

})