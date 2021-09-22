const User = require('./db_manager/db_manager');

const db_manager = new User('Jim', 37, 'jim@example.com');

console.log(db_manager.getUserStats());

console.log(db_manager.gettest());
