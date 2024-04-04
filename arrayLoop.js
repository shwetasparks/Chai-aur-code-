//for of
["", "", ""][({}, {}, {})];

const arr = [1, 2, 34, 56];
for (const num of arr) {
   console.log(num);
}

const greeting = "hello world";
for (const i of greeting) {
   console.log(`each char is ${i}`);
}

//maps: holds unique values and always in order
//map is not iterable
const map = new Map();
map.set("in", "india");
map.set("in", "india");
map.set("usa", "united state of america");
map.set("fr", "france");
console.log(map);

//forin not possible
for (const key in object) {

}

//loop : forof

for (const i of map) {
   console.log(i);
}

//map destructure
for (const [key, value] of map) {
   console.log(key, ":-", value);
}

//object
const myObj = {
   name: "shweta",
   city: "delhi",
   country: "india",
};

//for of no iterable in object
// for (const [keys, value] of myObj) {
//    console.log(keys, ":-", value);
// }

//for in loop object
const myObject = {
   js: "javascript",
   cpp: "c++",
   fb: "ruby",
};
for (const key in myObject) {
   console.log(`${key} is for ${myObject[key]}`);
}

//for in loop in array
let prog = ["js", "cpp", "java"];
for (const key in prog) {
   console.log(prog[key]);
}


