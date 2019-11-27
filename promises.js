//promises
const callMeSmsm = () => {
    return new Promise((resolve,reject)=>{
        
        let error = true;
        if(error){
            reject(()=>{
                console.log("I can't call you ya smsm");
            })
        }else{
            resolve(()=>{
                console.log('Hi ya smsm');
            })
        }
    })
}

callMeSmsm().then((res=>{
    res();
})).catch(err=>{
    err();
})