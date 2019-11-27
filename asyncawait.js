//async await
const wait = (ms) => new Promise(r => setTimeout(r, ms));
async function sayHi(){
    console.log('hi');
    await wait(5000)
    console.log('I am smsm'); 
}

sayHi().then(()=>{
    console.log("hello my friends");
    
}); //