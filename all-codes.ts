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
//ASSIGNMENT 5
    console.log(`
    --ASSIGNMENT 5 PIZZA ORDER---
    `);
    type deliverPizzaFunction = (order:string) => void;

    const pizzaOrder =(deliverPizza: deliverPizzaFunction) =>{
        console.log("I'll take a large pepperoni pizza..");
        setTimeout(()=>{
            const order:string = "Your order is ready!"
            deliverPizza(order);
        },3000);
    }
    const deliverPizza = (order:string):void => {
        console.log(order);
    }
    pizzaOrder(deliverPizza);
//ASSIGNMENT 6
    console.log(`
    --ASSIGNMENT 6 MULTIPLE MESSAGES---
    `);
    type printMessageFunction = (messages: string[], i:number) =>void;
    const multiMessage = (printMessage: printMessageFunction):void => {
        //ARRAY OF PHRASES
        const messages: string[] = ["My name is Bob", "My name is Susan", "My name is Anna"];
        for(let i:number = 0; i <3 ; i++){
            printMessage(messages, i);
        }
    }
    const printMessage = (messages: string[], i:number):void=> {
        
        console.log(messages[i]) ;
    }
    multiMessage(printMessage);

//ASSIGNMENT 7
    console.log(`
    --ASSIGNMENT 7 DOWNLOAD SIMULATION---
    `);
type dataDownloadFunction = (url:string)=> void;

const downloadSim = (url:string,dataDownload: dataDownloadFunction):void =>{
    setTimeout(()=>{
        dataDownload(url);
    },2000);
}
const dataDownload = (url:string):void =>{
    console.log(`Downloaded data from ${url}`);
}
downloadSim("https://testdatadownload/file.txt",dataDownload);

//ASSIGNMENT 8 
    console.log(`
    --ASSIGNMENT 8 SUCCESS AND ERROR---
    `);
    type printOutcomeFunction = () => void;
    const randomSuccess = (printSuccess: printOutcomeFunction, printFail:printOutcomeFunction)=>{
        const check:number = Math.round(Math.random());
        //SUCCESS
        if(check === 1 ){
            printSuccess();

        }else{
            printFail();
        }
        
    }
    const printSuccess = (): void=>{
        console.log("I'm a success");
    }
    const printFail = (): void=>{
        console.log("I'm a failure");
    }
    randomSuccess(printSuccess, printFail);
    randomSuccess(printSuccess, printFail);
    randomSuccess(printSuccess, printFail);
    randomSuccess(printSuccess, printFail);
    randomSuccess(printSuccess, printFail);
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

//ASSIGNMENT 10 
    console.log(`
    --ASSIGNMENT 10 CHAINED CALLBACKS---
    `);
    type startFunction = (chainMid: midFunction,chainEnd:endFunction) => void;
    type midFunction = (chain:endFunction) => void;
    type endFunction = () => void;
    //PASS BOTH FUNCTIONS IN START
    const chainStart = (chainMid: midFunction,chainEnd:endFunction):void=>{
        setTimeout(()=>{
        //DELAY FIRST PRINT AND NEXT FUNCTION
        console.log("Step 1 done.");
        chainMid(chainEnd);
        }, 1000);
    }
    //PASS END FUNCTION THROUGH MID
    const chainMid = (chainEnd: endFunction):void=>{
        //DELAY SECOND PRINT AND NEXT FUNCTION
        setTimeout(()=>{
            console.log("Step 2 done.");
            chainEnd();
        }, 1000);
    }
    const chainEnd = ():void=>{
        setTimeout(()=>{
            //DELAY FINAL PRINT OUT 
            console.log("Step 3 done.");
        },1000);
    }
    
    chainStart(chainMid,chainEnd);
