function square(n){
  return n*n
}

function cube(n){
  return n*n*n
}

function sumOfSquare(a,b){
  let value1 = square(a)
  let value2 = square(b)
  return value1+value2
}

function sumOfCube(a,b){
  let value1 = cube(a)
  let value2 = cube(b)
  return value1+value2
}

let ans1 = sumOfSquare(45,56)
let ans2 = sumOfCube(45,56)
console.log(ans1);
console.log(ans2);

///////////////////////////////////////////////////////////////

//Callback Function also called functional Arguments 

function Callback(a,b,cb){
  let value1 = cb(a)
  let value2 = cb(b)
  return value1+value2
}

let ans3 = Callback(45,56,cube)
console.log(ans3);

/////////////////////////////////////////////////////////////////

// Anonymous Function => How don't have name

function printLog(func){
  func();
}

printLog(function(){
  console.log("Print Hello I am Anonymous");
})


let arr = [1,2,3,4,5]

const double = arr.map(function(i){
  return i*2
})
console.log(double);
