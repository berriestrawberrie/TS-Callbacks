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