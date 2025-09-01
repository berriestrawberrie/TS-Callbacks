//ASSIGNMENT 9 
    console.log(`
    --ASSIGNMENT 9 MATH OPTIONS---
    `);
    type calculateFunction = (a:number, b:number, operation:string) => void;

    const mathOptions = (a:number, b:number, operation:string, calculate: calculateFunction) => {

        calculate(a,b,operation);
    }

    const calculate= (a:number, b:number, operation:string):void=>{
        let result:number;

        switch(operation){
            case "add":
                result = a + b;
                return console.log("Sum is: ", result);
            case "subtract":
                result = a - b;
                return console.log("Difference is: ", result);
            case "divide":
                result = a / b;
                return console.log("Quotient is: ", result);
            case "multiply":
                result = a * b;
                return console.log("Product is: ", result);
        }

    }
    mathOptions(5,2,"add",calculate);
    mathOptions(5,2,"subtract",calculate);
    mathOptions(5,2,"divide",calculate);
    mathOptions(5,2,"multiply",calculate);