//1. for
//1.initialize
//2.condition check
//3.increment
for (let i = 0; i < 10; i++) {
   console.log(i);
   if (i == 5) {
      console.log("5 is best");
   }
}


for (let index = 0; index < 10; index++) {
   for (let j = 0; j < 10; j++) {
      console.table(`inner loop ${j} and outer loop ${index}`);
   }
}

let array=[22,33,89,9]
for(let i=0;i<array.length;i++) {
console.log(array[i]);
}

//break and continue

for(let i=0;i<=20;i++){
    if(i==6){
          console.log(`value of i is = ${i}`);
          break; 

    }
    console.log(`value of i is =  ${i}`); 
  
}


for (let i = 0; i <= 20; i++) {
   if (i == 6) {
      console.log(`value of ${i} is = ${i}`);
      continue
   }
   console.log(`value of ${i} is =  ${i}`);
}
