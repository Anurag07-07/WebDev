//When we run something it reside inside in ram 
//Anything not is not running photos videos are reside inside SSD

// Compiler convert high level developer frindly code into binary 
// g++ is a compiler 

//Scripting Language is same as Interpreted Language is executed line by by line and stop when there is any error in any line

// console.log("Hello World");
// console.log(a); //Partially Not Work

// JS is  dynamic type means inside one variable we store any type of data
// Js is single threaded language 

//Clustar Module ??

// Q1

// let user = {
//   firstname:"abc",
//   lastname:"xyz"
// }


// function greet(user){
//   if (user.firstname==='undefined') {
//     return `Hello ${user.lastname}`
//   }

//   return `Hello ${user.firstname} ${user.lastname}`
// }
// console.log(greet(user));

// Q2

// let user = [{name:"xyz",gender:"Male"},{name:"abc",gender:"Female"}]

// user.forEach(element => {
  //   if (element.gender==='Female') {
//     console.log(`Hello Miss ${element.name}`);
//   }else{
//     console.log(`Hello Mr ${element.name}`);
//   }
// });

// Q3
// let number = 1;
// while (number<=1000) {
//   console.log(number," ");
//   number++
// }

////////////////////////////Arrays and Objects////////////////////////////////////

// // Q1 Print all even 
// let even = [1,2,3,4,5,6,8,7,9]
// let ans = even.filter((i)=>i%2===0)
// console.log(ans);

// // Q2 Biggest Number in an array
// let nums = [1,2,3,4,50,5,7,8,9]
// let max = -1*Infinity
// for (let i = 0; i < nums.length; i++) {
//   max = Math.max(max,nums[i]);
// }

// console.log(max);

// // Q3 Print Male People from Complex Object 
// let user = [{name:"xyz",gender:"Male"},{name:"abc",gender:"Female"}]
// function main(user){
//   let arr = []
//   user.forEach(element => {
//     if (element.gender==='Male') {
//       arr.push(element.name)
//     }
//   });
//   return arr
// }

// let ans1 = main(user)
// console.log(ans1);

// // Q4 Reverse the Array
// let arr = [1,2,3,4,5]

// let start = 0;
// let end = arr.length-1;
// while (start<=end) {
//   let temp = arr[start]
//   arr[start] = arr[end]
//   arr[end] = temp
//   start++;
//   end--;
// }

// console.log(arr);


/////////////////////////////////////////Functions///////////////////////////////////////////

// Q1 Print Sum of Two 
// let sum = (a,b)=>{
//   return a+b
// }

// console.log(sum(456,789));

// obj["key"] can be called as obj of key 

// Q2 Print another function how result in some pretty format

// let message = "Type the message"

// function logMsg(message){
//  console.log(
//   `  The Message 
//      ${message}
//   `
//  );
// }

// logMsg(message)


////////////////////////Callback Function//////////////////////

// function sum(num1, num2,fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// const ans1 = sum(1,2,displayResult)
// const ans2 = sum(1,2,displayResultPassive)



//Brute
// function calculateArithmetic(a,b,type){
//  if (type==='sum') {
//   return a+b
//  }
//  if (type==='minus') {
//   return a-b
//  }
// }

// const value = calculateArithmetic(1,2,"minus")
// console.log(value);

// Better
// function sum(a,b){
//   return a+b
// }

// function sub(a,b){
//   return a-b
// }

// function calculateArithmetic(a,b,type){
//  if (type==='sum') {
//   return sum(a,b)
//  }
//  if (type==='minus') {
//   return sub(a,b)
//  }
// }

// const value = calculateArithmetic(1,5,"minus")
// console.log(value);

//Optimal

// function sum(a,b){
//   return a+b
// }

// function sub(a,b){
//   return a-b
// }

// function calculateArithmetic(a,b,arithmeticFinalFunction){
//   const ans = arithmeticFinalFunction(a,b);
//   return ans;
// }

// const ans = calculateArithmetic(45,56,sum)
// console.log(ans);

// function greet(){
//   console.log(`Hello Buddy`);
// }

// setTimeout(greet,1*1000)
// setInterval(greet,1*1000)

//What if two function have different argument ? 
//We don't use callback there 

//Counter Clock
// let clock = 45
// let stopped = clock+2
// const ID =   setInterval(()=>{
//   console.log(clock);
//   clock--
// },1000)

// setTimeout(()=>{
//   clearInterval(ID)
//   console.log("Clock Stopped");
// },stopped*1000)

//Find The Time For SetTimoutInner Function Work

// setTimeout(()=>{
//   let start = Date.now()
//   let sum = 0;
//   for (let i = 0; i < 100000000; i++) {
//     sum+=i
//   }
//   let end = Date.now()
//   console.log(` The Time in Milliseconds ${(end-start)/1000} ms`);
// },5000)