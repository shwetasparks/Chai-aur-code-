//shopoing cart
//if we don't know the no. of user
function calculateCartPrice(...num1) {
   //rest operator
   return num1;
}

console.log(calculateCartPrice(100, 200, 500));

function calculateCartPrices(val1, val2, ...num1) {
   //rest operator
   return num1;
}

console.log(calculateCartPrices(100, 200, 500, 50000));
//print [500,50000]

// object : type 1
const user={
    username:"shweta",
    price:2000
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} amd price is ${anyobj.price}`)
}

handleObject(user)

//object : type 2 : passing object in function

function handleObject(anyobj) {
   console.log(`username is ${anyobj.username} amd price is ${anyobj.price}`);
}

handleObject({
   username: "shweta",
   price: 2000,
});

//passing array in function
const array = [12, 34, 56, 77, 99];
function returnSecondValue(getArray) {
   return getArray[1];
}
console.log(returnSecondValue(array));
