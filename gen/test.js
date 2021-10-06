function firstFunction(_callback){
    // do some asynchronous work
    // and when the asynchronous stuff is complete

    




    _callback();    
}

function secondFunction(){
    // call first function and pass in a callback function which
    // first function runs when it has completed
    firstFunction(function() {
        console.log('huzzah, I\'m done!');
    });    
}


secondFunction();