// // .find(), .findIndex()
// // these are prototype of Array

const cities = require(`./cityData.js`);
// cities.list.find(function(){

// })

// cities.list.findIndex(function(){

// });

// for(let i = 0; i < 10; i++){
// 	if(i == 5){
// 		// break is used to terminate the loop early
// 		break;
// 	}
// 	// console.log(i);
// }

// for(let i = 0; i < 10; i++){
// 	if(i == 5){
// 		// break is used to terminate the loop early
// 		continue;
// 	}
// }

// const myArray  = ['Joe',`Dan`,`Bill`,`Mike`];
// myArray.forEach(function(elem){
// 	console.log(elem);
// })

// Array.prototype.forEach(aCallBackFromYouToRunLater){
// 	for(let i = 0; i < Array.length; i++){
// 		aCallBackFromYouToRunLater(Array[i])
// 	}
	
// }

// let newArray = []
// myArray.forEach(function(elem){
// 	newArray.push(elem+1);
// })
// console.log(newArray)

// const myNewArray = myArray.map(function(elem){
// 	return (elem+1);
// })

// Array.prototype.hunter = function(){
// 	console.log("Hunter is cool.");
// }
// let myOtherNewArray = [];
// myOtherNewArray.hunter();

// // for...of
// let arr3 = [`Jonathan`,`Newsha`,`Dina`,`Aleya`];
// for(value of arr3){
// 	console.log(value)
// }
// for(key in arr3){
// 	console.log(key)
// }


// const nameOfCoolGirl = `Joss`;
// for(let i = 0; i < nameOfCoolGirl.length; i++){
// 	console.log(nameOfCoolGirl[i])
// }

// // split takes a string and makes it into an array

// const strAsArray = nameOfCoolGirl.split('')
// console.log(strAsArray)

// const str = `The day is good, but long, at Syntel`;
// const strAsArray2 = str.split(',')
// // console.log(strAsArray2);{}

// strAsArray[0] = strAsArray[3];
// strAsArray.pop()
// console.log(strAsArray);
// // join takes an array, and makes it into a string
// const strAgain = strAsArray.join(``);
// console.log(strAgain);

// // FUNCTIONS
// // if you provide too many args, they will be ignored
// // if you dont provide enough, all missing args, will be undefined
// // you have the option of setting defults, in the event not enough arts are sent
// function sum_numbers(a,b = 4){
// 	return a+b;
// }
// console.log(sum_numbers(1,10));



// function subtract(a,b){
// 	return a-b;
// }

// function run(waterBottle, num1, num2){
// 	const x = waterBottle(num1,num2);
// 	return x;
// }

// console.log(run(subtract, 2,5));


// empty array
const arr = [];
console.log(typeof(arr));

// create an empty object
const obj = {};

const func = function(){
	console.log("Test");
}
console.log(typeof(func));

// Objects are a combination of properties (keys) and values
// Sort of key:value pair
// Syntax is:
const objSyntax = {
	property: "value12"
}
objSyntax.property //value12
objSyntax.table2 = [`Toby`,`Noelle`];
console.log(objSyntax);
console.log(objSyntax.carl)

const student = {
	name: `Amos`,
	profession: `Developer`,
	languagse: [
		`Java`,
		`JavaScript`
	],
	sayHello: function(){
		console.log("Habari");
	},
	// {}: "Stuff"
}
student.sayHello();
console.log(student.sayHello);

console.log(student[`name`])
// is the same as this:
console.log(student.name)
// is the same as this:
const propToGet = `name`;
console.log(student[propToGet]);

let studentArray = [student];
const student2 = {
	name: "Hunter",
	profession: `Ninja`
}
studentArray.push(student2);

(element)=>{
	console.log(element)
}

Array.prototype.forEach(callbackToRun){
	for(let i = 0; i < this.length; i++){
		callbackToRun(this[i])
	}
}

