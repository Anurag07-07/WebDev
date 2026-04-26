// Ecmascript=> Is a script language specification on which javascript is based . It is documentation / website that defines the standards for JS  
// Javascript=>It is scripting language that follows ECAMscript specifications and Inside this DOM is not defined by ECMASCRIPT there are some webapis and functions provided by browser 
// V8 is google chrome Compiler Engine for JS and SpiderMonkey is firefox compiler Engine for JS
// NodeJs => It is a Runtime that compile JS Code written in C++
// BunJS => Competitor of NodeJS 300 times faster than NodeJS written in Zig (low latency language)

// HTTP Server
// HTTP (Hyper Text Transfer Protocol) 
// A Protocol that is defined for machine communication 
// Specifically for websites  , most common way for your backend website to talk to frontend

// https://www.google.com/images

// https => Protocol 
// www.google.com => URL 
// images => Route 

// API is a set of rules that allows two applications to communicate and exchange data

// Create HTTP server in C++ from scratch ? 

//Intialize the Express Server

// import express from 'express'

// const app = express()

// const PORT = 3000


// app.get('/home',(req,res)=>{
//   res.send('<h1>Hello World</h1>')
// })


// app.listen(PORT,()=>{
//   console.log(`Server Start at PORT ${PORT}`);
// })


// express.json()
// JSON APIs ke liye.
// express.urlencoded()
// HTML forms / form submissions ke liye.


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); extended:true used for nested object
// Data from browser comes in string format name=ABC&age=45 to convert into json 

//////////////////////////Create a Todo////////////////////////////////
import e from "express";

const app = e()
const PORT = 3000

app.use(e.json())
//Todo List
let Todo = [{
  id: 1,
  work: "Music"
}]

//Show all Todo
app.get('/show-todo', (req, res) => {
  res.send(Todo)
})-

//Add Todo
app.post('/add-todo', (req, res) => {

  try {
    const {
      work
    } = req.body

    console.log(req.body);
    
    //Add The Todo Inside Array
    let newTodo = {
      id: Todo.length + 1,
      work: work
    }

    Todo.push(newTodo)

    return res.status(200).json({
      message: `Todo Added`
    })
  } catch (error) {
    return res.status(500).json({
      message: `Interal Server Error`
    })
  }
})

//Update Todo
app.put('/update-todo/:id', (req, res) => {
  try {
    const id = Number(req.params.id)
    const {
      work
    } = req.body
    console.log(work);

    //Find the User with this id 
    Todo = Todo.map((i) => i.id === id ? {
      ...i,
      work: work
    } : i)
    return res.status(200).json({
      message: `Todo added`,
      todo: Todo
    })
  } catch (error) {
    return res.status(500).json({
      message: `Interal Server Error`
    })
  }
})

//Delete Todo 
app.delete('/delete-todo/:id',(req,res)=>{
  try {
    const id = Number(req.params.id)
    Todo = Todo.filter((i)=>i.id!==id)
    return res.status(200).json({
      message:`Todo Deleted`,
      todo:Todo
    })
  } catch (error) {
    return res.status(500).json({
      message: `Interal Server Error`
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server start at PORT ${PORT}`);
})