console.log("Second File is Running");

function sum(a,b){
  console.log(a+b);
}

function sub(a,b){
  console.log(a-b);
}

//Way 1
// module.exports = sum
//Way 2
// module.exports = {sum,sub}
//Way 3
module.exports.sum = sum
module.exports.sub = sub