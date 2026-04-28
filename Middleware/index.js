const {z, email} = require('zod')
const express = require('express')
const app = express()

app.use(express.json())

// app.use(express.urlencoded({extended:true}))


//Basic Approach of Validation////////////////////////////////////////////////////////////////////////////////////////

// app.get('/health-check',function(req,res){
//   const kidneyId = Number(req.query.kidneyId)
//   const {username,password} = req.body
  
  

//   if (username!=='AJ'  && password!=='772') {
//     return res.status(403).json({
//       message:`User Not Authorized`
//     })
//   }

//   if (kidneyId!==1 && kidneyId!==2) {
//     return res.status(404).json({
//       message:"Invalid Input"
//     })
//   }

//   return res.status(200).json({
//     message:"Your Kidney is Fine"
//   })
// })


//Middleware///////////////////////////////////////////////////////////////////////////////////


// function userValidation(req,res,next){
//   let {username,password} = req.body
//   console.log(username,password);
  
//   if (username!=='AJ' && password!=='772') {
//     return res.status(403).json({
//       message:"Invalid User"
//     })
//   }else{
//     next()
//   }
// }

// function carsValidation(req,res,next){
//   const carno = Number(req.query.no)
//   console.log(carno);
  

//   if (carno===1 || carno===2) {
//     next()
//   }

//   return res.status(411).json({
//     message:`Not a Valid Car`
//   })
// }

// app.use(userValidation)
// app.use(carsValidation)

// app.get('/cars-health',(req,res)=>{
//   res.status(200).json({
//     message:`User 1 Cars are fine`
//   })  
// })

// app.get('/health-check',(req,res)=>{
//   res.status(200).json({
//     message:`User 2 Cars are fine`
//   })  
// })

// //Error Middleware

// app.use(function(err,req,res,next){
//   if (err) {
//     return res.status(500).json({
//       message:`Internal Server Error`
//     })
//   }
//   next()
// })


//Authentication//////////////////////////////////////////////////////////////////////////////////////////////

const userValidation = z.object({
  username:z.string().min(5).max(50),
  password:z.string().min(8).max(15).regex(/\d/),
  age:z.coerce.number(),
  email:z.email().endsWith("@gmail.com")
})

//Check if array contains only number or not

// Way 1
// let arr = [1,2,3,4]
// const schema = z.array(z.number())
// const ans1 = schema.safeParse(arr)
// console.log(ans1.success);


// Way 2
// const ans2 = arr.every((value)=>typeof value==='number')
// console.log(ans2);



function signup(req,res,next){
  const check = userValidation.safeParse(req.body)
  if (!check.success) {
    return res.status(411).json({
      error:check.error.message,
      message:`Invalid Data`
    })
  }else{
    const {username,password,age,email} = req.body
    console.log(req.body);
    
    if (username==='Anurag' && password==='0123456789') {
      next()
    }
    return res.status(403).json({
      message:`Invalid User`
    })
  }
}

const message = ` Maclaren : $330K 
                  Chiron   :  5M 
`

app.post('/cars',signup,(req,res)=>{
  return res.send(message)
})

app.listen(3000,()=>{
  console.log(`Server started`);
})