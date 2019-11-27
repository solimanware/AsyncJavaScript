//Observable
const rxjs =  require('rxjs')

function observableExample(){
    
    const tellMeSomething$ = new rxjs.Observable(observer=>{
        observer.next('hi');
        observer.next('This is smsm');
        observer.next('Hello my friends')
    })

    tellMeSomething$.subscribe(res=>{
        console.log(res);
    },err=>{
        console.log(err);
    },()=>{
        //complete
    })

}
observableExample();