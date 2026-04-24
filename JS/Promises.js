// Sync and Async 
// Synchronous Means Togeather or one after the other 
// Asynchronous => Happens in part or multitasking 

// function findSum(n){
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans+=i
//   }
//   return ans
// }

// function findSumTillSome(){
//   console.log(findSum(100));
// }

// setTimeout(findSumTillSome,1*1000)
// console.log("Hello World");

//////////////////////////////////fsReadFile/////////////////////////

// import fs from 'fs'

//Read File Sync
// fs.readFile('a.txt','utf-8',function (err,data){
  //     console.log(data);
// })

//Read File Sync
// let ans = fs.readFileSync('a.txt','utf-8')
// console.log(ans);

//Write File Sync
// fs.writeFileSync('a.txt',"Added New Content")

//Write File Async
// import fs from 'node:fs/promises'
// async function writeFileA(data){
//  await fs.writeFile('a.txt',data)
//  console.log(`Text Added`);
// }

// writeFileA("This is Async Addition")

// console.log(`Hi There`);

// Event loop check if there is anything present in callback  queue 

///////////////////////////////////////////Promises//////////////////////////////
// Syntactically better way to write callback
import fs from 'fs'
function ReadFilePromisefied(file){
  return new Promise(function(resolve,reject){
    fs.readFile(file,'utf-8',function(err,data){
      if (err) {
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}


function ShowFile(data){
  console.log(data);
}

function CatchErr(error){
  console.log(error);
}

ReadFilePromisefied('a.txt').then(ShowFile).catch(CatchErr)


/////////Better Way (Async Await)/////////////////////////////////

async function Main() {
  try {
    const data = await ReadFilePromisefied('a.txt')
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//Outside it is async inside it is sync

Main()
console.log("Hello");