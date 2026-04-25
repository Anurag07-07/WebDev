import {parentPort} from 'worker_threads'
import fs from 'fs'

parentPort.on('message',(file)=>{
  fs.readFile(file,'utf-8',(err,data)=>{
    if (err) {
      parentPort.postMessage(err)
      return
    }

    parentPort.postMessage(data)
    process.exit()
  })
})
