//ASSIGNEMTN 1
    console.log(`   --ASSIGNMENT 1 DELAYED GREETING---
        `);
    type printHelloFunction = (message:string) => void;

    const helloCall = (printHello: printHelloFunction):void =>{
        const message: string = "Hello from callback!";
        printHello(message);
    }
    const printHello = (message: string): void =>{
        console.log(message);
    }
    helloCall(printHello);

//ASSIGNMENT 2
    type delayHelloFunction = (message: string)=>void ;
    const sayHelloLater = (delayHello: delayHelloFunction):void =>{
      setTimeout(()=>{
        const message: string = "Hi, I am late!";
        delayHello(message);
      },2000);
    }
    const delayHello = (message: string):void =>{
        console.log(`
    --ASSIGNMENT 2 DELAYED GREETING---
    `,message);
    }
    sayHelloLater(delayHello);
//ASSIGNMENT 3 
    console.log(`
    --ASSIGNMENT 3 MATH CALLBACK---
    `);
    type printResultFunction = (result:number) => void;

    const math = (a:number,b:number, printResult: printResultFunction):void =>{
        const result:number =  a + b;
        printResult(result);
    }
    const printResult= (result:number):void =>{
        console.log("Sum of the numbers is: ", result);
    }
    math(4,5,printResult);
//ASSIGNMENT 4
    console.log(`
    --ASSIGNMENT 4 UPPERCASE---
    `);
    type makeUpperFunction = (text:string) => string ;
    const convertUpper = (text:string, makeUpper: makeUpperFunction):void =>{
        console.log(makeUpper(text));
    } 
    const makeUpper = (text:string):string =>{
        const upperCase = text.toUpperCase();
        return upperCase;
    }
    convertUpper("make this aLl UpperCase", makeUpper);
//ASSIGNMENT 4
    console.log(`
    --ASSIGNMENT 4 UPPERCASE---
    `);