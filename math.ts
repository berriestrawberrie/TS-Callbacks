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
