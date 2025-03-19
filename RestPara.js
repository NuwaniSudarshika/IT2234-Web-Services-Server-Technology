//Rest parameter

const mysum = (...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,6,8,2))

//callback function
//a function passed as an argument

const greet = (msg,fun)=>{
	console.log("Hi.."+msg)
	fun
}
const myName = (name)=>{console.log("My name is "+name)}

greet("Good morning",myName("David"))

const multtwo = (n)=>n*2
const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}

myarr(multtwo,4,5,6,8,2)