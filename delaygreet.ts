//ASSIGNMENT 2
    console.log(`
    --ASSIGNMENT 2 DELAYED GREET---
    `);    type delayHelloFunction = (message: string)=>void ;
    const sayHelloLater = (delayHello: delayHelloFunction):void =>{
      setTimeout(()=>{
        const message: string = "Hi, I am late!";
        delayHello(message);
      },2000);
    }
    const delayHello = (message: string):void =>{
        console.log(message);
    }
    sayHelloLater(delayHello);