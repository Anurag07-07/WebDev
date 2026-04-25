// //Find Length of String
// function getLength(str){
//   console.log("Og Length",str);
//   console.log("Str length is ",str.length);
// }

// getLength("Hello World")

// //Find the Index of the Word
// function findIndex(str1,str2){
//   console.log(str1.lastIndexOf(str2));
//   return str1.indexOf(str2)
// }

// console.log(
// findIndex("Hello World","World")
// );
// //If Not Present it give -1
// //If More than one time present it give first world index 


// function getSlice(str,start,length){
//   //Both are same
//   //Start from 0 and take 5 length string

//   const ans = str.substr(start,length)
//   console.log(ans);
//   console.log(str);
//   const ans1 = str.slice(start,length)
//   console.log(ans1);
//   console.log(str);
// }

// getSlice("Hello World",0,5)


// //Replace The word

// function replaceWord(str,newWord,oldWord){
//   const ans = str.replace(oldWord,newWord)
//   console.log(ans);
// }

// replaceWord("Hello World","Bello","Hello")

// //Convert String into Array
// function STR(str){
//  const ans = str.split(" ")
//  console.log(ans);
//  const ans1 = ans.join("/")
//  console.log(ans1);
//  const upper = str.toUpperCase()
//  console.log(upper);
// }

// STR("Hello this is Web")



// ////////////////////////////////////////Number////////////////////
// const num1 = "45"
// const num2 = "45x"
// const num3 = "x45" 
// console.log(parseInt(num1));
// console.log(parseInt(num2));
// console.log(parseInt(num3)); //It Will not parse if there is something jibrish in starting it return NaN

// const num4 = "45.5x"
// console.log(parseFloat(num4));

// ///////////////////////////////Arrays//////////////////////////////

// let arr = [1,2,3,4,5]
// arr.push(6)
// //Put int Front 
// arr.unshift([1,2,3])
// //Pull Something from front
// arr.shift()
// console.log(arr);

// //Concat Two Arrays
// let arr1 = [1,2,3]
// let arr2 = [1,2,3]
// let arr3 = arr1.concat(arr2)
// console.log(arr3);

// arr3.forEach((element)=>(
//   console.log(element)
// ))

// /////////////////////////////////////Classes//////////////////////////

// class Animal{
//   constructor(name,legCount){
//     this.name = name
//     this.legCount = legCount
//   }
//   Data(){
//     console.log(`The Animal is ${this.name} and legCount is ${this.legCount}`);
//   }
// }

// const dog = new Animal("Dog",4)
// dog.Data()

// //Static Member Function
// class Alien{
//   constructor(name,legCount){
//     this.name = name
//   }
//   static
//   Data(){
//     console.log("Hello I am from planet 55 Cencri E");
//   }
// }

// Alien.Data()


// ////////////////////////////////////Time////////////////////////////
// const currentDate = new Date()
// console.log(currentDate.getFullYear());
// console.log(currentDate.getDate());
// console.log(currentDate.getMonth()); //Month start from 0 jan is 0
// console.log(currentDate.getDay()); // Week is 0 based indexing Sunday is 0

// /////////////////////////////////////JSON////////////////////
// const user = {
//   "name":"abc",
//   "address":"xyz"
// }
// //Stringify the data
// const value = JSON.stringify(user)
// console.log(value);

// // Parsing the data 
// const parsing  = JSON.parse(value)
// console.log(parsing);

// //////////////////////////////////Object/////////////////////////

// let user1 = {
//   name:"abc",
//   age:45
// }

// //All Keys
// const keys = Object.keys(user1)
// //All Values
// const values = Object.values(user1)
// //All key and value pair
// const entries = Object.entries(user1)
// //Has Own Property
// const present1  = user1.hasOwnProperty("name")
// const present2  = user1.hasOwnProperty("dob")
// //Object Insertion
// let newObj = Object.assign({},user1,{address:"Something"})
// let newObj1 = {...user1,address:"Something"}

// console.log(keys);
// console.log(values);
// console.log(entries);
// console.log(present1);
// console.log(present2);
// console.log(newObj);
// console.log(newObj1);

// const map = new Map()
// map.has()
// map.get()
// map.set()
// map.size()

function calculateTotalSpentByCategory(transactions) {
  let map = new Map()
  //Answer Array
  let result = []
  transactions.map((data)=>{
    if (map.has(data.category)) {
     map.set(data.category,map.get(data.category)+data.price)
    }else{
      map.set(data.category,data.price)
    }
  })

  for (const [key,value] of map) {
    //Create Object of each key and value
    let obj = {
      [key]:value
    }
    result.push(obj)
  }

  return result
}


const transactions = [
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
			{
				id: 2,
				timestamp: 1656259600000,
				price: 20,
				category: 'Food',
				itemName: 'Burger',
			},
			{
				id: 3,
				timestamp: 1656019200000,
				price: 15,
				category: 'Clothing',
				itemName: 'T-Shirt',
			},
			{
				id: 4,
				timestamp: 1656364800000,
				price: 30,
				category: 'Electronics',
				itemName: 'Headphones',
			},
			{
				id: 5,
				timestamp: 1656105600000,
				price: 25,
				category: 'Clothing',
				itemName: 'Jeans',
			},
		];

		const result = calculateTotalSpentByCategory(transactions);
    console.log(result);
    