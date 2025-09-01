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
    