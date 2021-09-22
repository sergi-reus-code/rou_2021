const User = require('./db_manager/db_manager');
const jim = new User('Jim', 37, 'jim@example.com');

console.log(jim.getUserStats());


