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