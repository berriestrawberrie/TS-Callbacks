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
