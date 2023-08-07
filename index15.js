/* 
Froyo Survey 


create an object labeled customer and add the following key:value pairs

*/


const customer = {

    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone:  undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
    
    };

/* 
add the correct information for 
phone number, 
email, 
zipCode, 
favoriteFlavors 
*/
    
    customer["email"] = "Jak3Smith1992@email.com";
    customer["phone"] = 3195551234;
    customer["zipCode"] = "63132";
    customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];
    console.log(customer);
    console.table(customer);

// delete zipCode and favoriteStore //

    delete customer["zipCode"];
    delete customer["favoriteStore"];
    console.log(customer);
    console.table(customer);

// add todaysPurchaseCost, futureFlavors, and toppings //

    customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
    customer.futureFlavors = ["mango"];
    customer.todaysPurchaseCost = 5.32;
    console.log(customer)
    console.table(customer)

// Console.log the final table in a array console.log(Object keys()) //

    console.log(Object.keys(customer));