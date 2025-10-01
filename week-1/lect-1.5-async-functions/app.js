//async functions


//there are 3 ways to write async functions(callbacks,promises,async&await)

// const fs=require("fs");

// fs.readFile("app.text","utf-8",function(err,data){
//     console.log(data);
// })
// console.log("hi file")



//without promises(callbacks)

// const fs=require("fs");
// function daljeetReadFile(cb){
//     fs.readFile("app.text","utf-8",fuction(err,data){
//         cb(data);
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// daljeetReadFile(onDone);


// with promises (it makes code cleaner)

// const fs=require("fs");
// //custom async fuctions
// function daljeetReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("app.text","utf-8",function(err,data){
//             resolve(data)
//         });
//     })
// };
// //callback function
// function onDone(data){
//     console.log(data);
// }

// daljeetReadFile.then(onDone);


//Async await syntax

// function daljeetAsync(){
//     return new Promise(function(resolve){

//         //some async logic here
//         setTimeout(function(){
//             resolve("hi there")
//         },5000)
     
//     })
// }


// async function main(){
//     let result= await daljeetAsync()
//     console.log(result);
// }

// main();