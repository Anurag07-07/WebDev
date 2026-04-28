// const sum = require("./second");

const { sum, sub } = require("./second");

console.log("Server run at PORT 3000");

//sum(3,4) //Not run because function comes but it will be inside IIFE 
//Which will be not called outside

sum(5,6)
sub(5,6)

//Running to file at same time 
//CJS Comman Js Module Way

