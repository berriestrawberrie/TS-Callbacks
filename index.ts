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

