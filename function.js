//Function
function PrintMsg(){
	console.log("Hello JS")
}
PrintMsg();
console.log();

//Summation
console.log("Summation")
function sum(){
	return 5+6;
}
console.log(sum())
console.log();

//subtraction
console.log("subtraction")
function sub(a,b){
	return a-b
}
console.log(sub(5,3))
console.log()

//default parameter
const mult = (a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4))
console.log()