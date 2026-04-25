//Brute Approach 

//Problem is Code Repeatition

// function square(n){
//   return n*n
// }

// function cube(n){
//   return n*n*n
// }

// function sumOfSquares(a,b){
//   let square1 = square(a);
//   let square2 = square(b);
//   return square1+square2
// }

// function sumOfCube(a,b){
//   let cube1 = cube(a);
//   let cube2 = cube(b);
//   return cube1+cube2
// }

// let ans1 = sumOfSquares(4,5)
// let ans2 = sumOfCube(4,5)
// console.log(ans1);
// console.log(ans2);

//Better Approach
//Callback Function or Functional Argument 

// function sumOfSomething(a,b,cb){
//   let ans1 = cb(a);
//   let ans2 = cb(b);
//   return ans1+ans2;
// }

// let ans = sumOfSomething(5,6,cube)
// console.log(ans);

/////////////////////////////////////Async Functions////////////////////////////////////
//Create Sync Set Timeout 

// function setTimeOutSync(callback,ms){
//   let startTime = Date.now()
//   while (true) {
//     let endTime = Date.now()
//     if (endTime-startTime>=ms) {
//       return callback()
//     }
//   }
// }

// function logMsg(){
//   console.log("Function Working");
// }

// setTimeOutSync(logMsg,5000)

//Create a Clock in HH:MM:SS format

// function showTime(){
//   const date = new Date()
//   let second = date.getSeconds()
//   let  minute = date.getMinutes()
//   let hour = date.getHours()
//   console.log(`${hour}:${minute}:${second}`);
// }

// setInterval(showTime,1*1000)

/////////////////////////////////////Promises//////////////////////////////////////////

// Create SetTimeOutPromisfied 

function SetTimeOutPromisfied(time){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      resolve(time)
    },time*1000)
  })
}

// function Completed(time){
//    console.log(`${time} sec Completed`);
// }

// function NotCompleted(err){
//   console.log(`Work Not Completed`);
// }

// SetTimeOutPromisfied(2).then(Completed).catch(NotCompleted)

// Create ReadFilePromisfied 

// import fs from 'fs'
// function ReadFilePromisfied(file){
//  return new Promise(function(resolve,reject){
//   fs.readFile(file,'utf-8',(err,data)=>{
//     if (err) {
//       reject("File Not Given")
//     }else{
//       resolve(data)
//     }
//   })
//  })
// }

// function ShowData(data){
//   console.log(data);
// }

// function logError(err){
//   throw new Error(err)
// }

// function FinalMessage(){
//   console.log(`Code Executed`);
// }

// ReadFilePromisfied('a.txt').then(ShowData).catch(logError).finally(FinalMessage)


//Promise Chaining
// SetTimeOutPromisfied(1).then(()=>{
//   console.log("1 Sec Completed");
//   return SetTimeOutPromisfied(2)
// }).then(()=>{
//   console.log("3 Sec Completed");
//   return SetTimeOutPromisfied(5)
// }).then(()=>{
//   console.log("8 Sec Completed");
// })

//Thread Spawn ?? 
// Thread spawn matlab naya thread create/start karna.

// Program ka main thread already chal raha hota hai.
// Jab tum heavy kaam alag se karwana chahte ho, to new thread spawn karte ho.
// Wo thread parallel me kaam karta hai.

//Performing Multiple Task at same time

import {Worker} from 'worker_threads'

let worker = new Worker('./worker.js') //It will take the file of original worker that perform task

worker.postMessage('./a.txt')

worker.on('message',(msg)=>{
  console.log(msg);
})

worker.on('error',(err)=>{
  console.log(err);
})

worker.on('exit',(exit)=>{
  console.log(exit);
})

// Web Worker = frontend ka helper
// Worker Thread = backend ka helper