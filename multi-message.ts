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
