// function chai(){
//     console.log(`DB connected`);
//names iife
// }
// chai()
(function chai() {
   console.log(`DB connected`);
})();

//unnamed iife
((name)=>{
    console.log(`DB connected ${name}`);
})('shweta');

//adding semicolon is imp if we write two iife