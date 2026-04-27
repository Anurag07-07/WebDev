/**  
You need to create an express HTTP server in Node.js which will handle the logic c  
- Use built in Node.js `fs` module  
The expected API endpoints are defined below,  
1. GET /files - Returns a list of files present in `./files/` directory  
Response: 200 OK with an array of file names in JSON format.  
Example: GET http://localhost:3000/files  
2. GET /file/:filename - Returns content of given file by name  
Description: Use the filename from the request path parameter to read the file  
Response: 200 OK with the file content as the response body if found, or 404 No  
Example: GET http://localhost:3000/file/example.txt  
  
- For any other route not defined in the server return 404  
Testing the server - run `npm run test-fileServer` command in terminal  
*/

import express from "express";
import path from "path";
import {
  fileURLToPath
} from 'url'
import fs from 'fs'

const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filesPath = path.join(__dirname, "public")
app.use(express.static(filesPath))


app.get('/files', (req, res) => {
  fs.readdir(filesPath, (err, files) => {
    
    if (err) {
      return res.send("<h1>Folder Not Readable</h1>")
    }

    res.send(files)
  })
})


app.get('/files/:filename', (req, res) => {
  const file = req.params.filename
  
  function main(file) {
    return new Promise(function (resolve, reject) {
      fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }

  async function main1(){
    try {
      let s = path.join(__dirname,`files/${file}`)
      let ans = await main(s) 
      return res.send(ans)      
    } catch (error) {
      return res.send(error)
    }
  }

  main1()
})



app.listen(3000, () => {
  console.log("Port Running at Server 3000");
});