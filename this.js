//this refers current context
const user = {
   username: "shweta",
   price: 2000,
   welcomeMessage: function () {
      console.log(`${this.username} ${this.price} ,welcome`);
      console.log(this);
   },
};
console.log(this)
user.welcomeMessage();
user.username = "harsh";
user.welcomeMessage();

//context means what it is currrently holding

function chai(){
    let user="shweta"
    console.log(this.username);
}
chai()

//arrow function
const chai = () => {
      let user = "shweta";
   console.log(this); //gives undefined in output
};
chai();



