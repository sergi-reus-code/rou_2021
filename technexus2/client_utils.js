
function rnd01(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}



function task1(params_task1){
  console.log("start task 1");

  setTimeout(() => {
    console.log('This will not run ');
  }, 0);

  sleep(1000)
  console.log("finish task 1");




  

}


function task2(params_task1){
  console.log("start task 2");




  console.log("finish task 2");

    
}


function task3(params_task1){

  console.log("start task 3");




  console.log("finish task 3");
    
}


  exports.task1 = task1,
  
  exports.task2 = task2,
  
  exports.task3 = task3