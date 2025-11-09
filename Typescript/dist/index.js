// const age:number=23;
// console.log(`daljeet is ${age} years old`);
// function greet(name:string){
//     console.log(`hello ${name}`)
// }
// function summ(a:number,b:number ):number{
//     const c:number= a+b;
//     return c;
// }
// function checker(age:number):boolean{
//     if(age>=18)return true;
//     else return false;
// }
// greet("daljeet");
// console.log("sum is "+ summ(2,3));
// console.log("person is 18+"+checker(23))
// function nested(fn:()=>void){
//     setTimeout(fn,3000)
// }
// nested(()=>console.log("hi there"))
// interface User {
//     username:string;
//     email:string;
//     age:number;
//     password:string
// }
// const user= {
//     username:"Daljeet Singh",
//     email:"singhdaljit25126@gmail.com",
//     age:23,
//     password:"singhdaljit" 
// }
// function isLegal(u:User):boolean{
//     if(u.age>=18)return true;
//     else return false;
// }
// console.log("Are you 18+ true or false?" + isLegal(user));
// interface Todo{
//     title:string;
//     isCompleted:boolean;
// }
// interface TodoInput {
//     todo:Todo
// }
// fucntion getTodo({todo}:TodoInput){
//     return (
//  <div>
//  <h1>{todo.title}</h1>
//  <h2>{todo.isCompleted}</h2>
//  </div>
//     )
// }
// interface Person {
//     name:string;
//     age:number;
//     greet(phrase:string):void;
// }
// class Doctor implements Person{
//     name:string;
//     password:string;
//     constructor(name:string,password:string){
//         this.name = name;
//         this.password = password;
//     }
//     greet(phrase:string){
//         console.log(`hello ${this.name}`)
//     }
// }
// const daljeet = new Doctor("singh",23,"singhdaljit25126")
// console.log(`daljeet objext is ${daljeet.name} --- ${daljeet.password}--`)
// type New =
//     number | string;
// type User ={
//     name:string;
//     password:string;
//     age:New;
// }
// const user:User={
// name:"daljeet",
// password:"dlajeet",
// age:"23"
// }
// type Employe ={
//     name:string;
//     dep:string;
// }
// type Manager = {
//     name:string;
//     teamCount:number
// }
// type TeamLead = Employe & Manager
// const NEW:TeamLead={
// name:"dlajeet",
// dep:"growthzi",
// teamCount:10
// }
// console.log("New has a team of size " + NEW.teamCount)
// type ARR = number[] 
// function Max(arr:ARR):number{
// if(arr.length ===0)return 0;
// let m:number= arr[0]!;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!>m){
//         m=arr[i]!;
//     }
// }
// return m;
// }
// const answer = Max([2,5,8])
// console.log(`max number is ${answer}`)
// type User ={
//     name:string;
//     age:number;
// }
// function ISLegal(users:User[]){
// return users.filter(x=>x.age>=18)
// }
// let ans:User[]=ISLegal([{name:"daljeet",age:23},{name:"akrashak",age:17}]);
// console.log("ans is ",ans)
//enums
// enum Direction{
//     UP="UP",
//     DOWN="DOWN",
//     LEFT="LEFT",
//     RIGHT="RIGHT"
// }
// function DoSomething(keyPressed:Direction){
//     //do something
//     console.log("keyPressed is " +  keyPressed)
// }
// DoSomething(Direction.RIGHT);
//Generics
function anything(arr) {
    return arr[0];
}
const ans = anything(["daljeet", "harman"]);
const ans2 = anything([2, 3, 4]);
console.log(ans?.toUpperCase());
console.log(ans2);
export {};
//# sourceMappingURL=index.js.map