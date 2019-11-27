//callback
function first(){
    console.log("first");
}

function second(callback){
    console.log("second");
    callback();
}

second(()=>{
    first();
});
