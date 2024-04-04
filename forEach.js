const coding = ["js ", "java", "css"];
//high order

//forEach using callback=> doesn't have function name
//just pass iterator name i.e item
coding.forEach(function (item) {
   console.log(item);
});

//foreach using arrow function
coding.forEach((i) => {
   console.log(i);
});

function printMe(i) {
   console.log(i);
}

coding.forEach(printMe);

//
coding.forEach((item, index, arr) => {
   console.log(item, index, arr);
});



//object in array
const codingLanguage = [
   {
      languageName: "javascript",
      languageFile: "js",
   },
   {
      languageName: "java",
      languageFile: "java",
   },
   {
      languageName: "css",
      languageFile: "css",
   },
];
codingLanguage.forEach((item) => {
   console.log(item.languageName,item.languageFile);
});
