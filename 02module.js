const sayHello = ()=>{
	console.log("hello");
} 
// 輸出function
module.exports.sayHello = sayHello;

// 輸出onject
// module.exports = {
// 	sayHello: sayHello,
// 	title: "Hello world"
// }