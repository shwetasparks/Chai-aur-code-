// declare singleton object
const user=new Object()
console.log(user);//output: {}

//non singleton
const users = {};
users.id = "123anf";
(users.name = "neha"), (user.isLoggedIn = true);
console.log(users); //output:{}

const regularUser = {
   email: "hello@gmail.com",
   userFullName: {
      firstName: "alex",
      lastName: "endra",
   },
};
console.log(regularUser.userFullName);
console.log(regularUser);

//optional chaining '?'

//
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { obj1, obj2 };
const obj4 = Object.assign(obj1, obj2);
const obj5 = Object.assign({}, obj1, obj2);

console.log(obj4);
console.log(obj5);

//spread operator
const obj6 = { ...obj1, ...obj2 };
console.log(obj6);

//array of object: database
const appUsers = [
   {
      id: 1,
      name: "heena",
   },
   {
      id: 2,
      name: "neha",
   },
   {
      id: 3,
      name: "raju",
   },
];
console.log(appUsers[1].name);
//paste keys  of object
console.log(Object.keys(appUsers));
console.log(Object.values(appUsers));
console.log(Object.values(regularUser)); //array converted
console.log(Object.entries(appUsers));

//ask if value present
console.log(appUsers.hasOwnProperty("isLoggedIn")); //false
