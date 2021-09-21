//import combi manager class
//import spy_manager class 


//iniciar combi_class.ini();


//const auth = require('./util/auth');





const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };