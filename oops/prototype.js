let myName = "shweta";
console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];
let heroPower = {
   thor: "hammer",
   spiderman: "sling",

   getSpiderPower: function () {
      console.log(`Spidy power is ${this.spiderman}`);
   },
};
Object.prototype.shweta = function () {
   console.log(`shweta is present in all object`);
};

Array.prototype.heyShweta = function () {
   console.log(`Shweta`);
};

//heropower.shweta()
myHeros.Shweta();
myHeros.heyShweta;

//inheritance
const User = {
   name: "shweta",
   location: "India",
};
const Teacher = {
   makeVideo: true,
};

const TeachingSupport = {
   makeVideo: false,
};

const TASupport = {
   makeAssignment: "js assignment",
   fullTime: true,
   __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern
Object.setPrototypeOf(TeachingSupport, Teacher);


let userName="chaiaurcode"
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)

}