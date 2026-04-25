// import {parentPort} from 'worker_threads'
// import fs from 'fs'

// parentPort.on('message',(file)=>{
//   fs.readFile(file,'utf-8',(err,data)=>{
//     if (err) {
//       parentPort.postMessage(err)
//       return
//     }

//     parentPort.postMessage(data)
//     process.exit()
//   })
// })

import { parentPort } from 'worker_threads'

import fs from 'fs'
parentPort.on('message',(file)=>{
  function FileReadPromsified(file){
    return new Promise(function(resolve,reject){
      fs.readFile(file,'utf-8',(err,data)=>{
        if (err) {
          reject(`Error : ${err}`,)
        }else{
          resolve(data)
        }
      })
    })
  }


  async function main() {
    try {
      const data = await FileReadPromsified(file)
      let data_array = data.split(" ")
      let f = data_array.filter((i)=>i!="")
      //Convert Into String Again
      let str = f.join(" ")
      //Insert Inside File Again
      fs.writeFileSync(file,str)
      
      parentPort.postMessage(str)
      process.exit()
    } catch (error) {
      parentPort.postMessage(error)
      return
    }
  }
  main()
})