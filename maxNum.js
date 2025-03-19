//find the max number in the array using foreach 

console.log("Max number in the array")
let array = [45,48,62,84,15]

let maxNum = array[0]
array.forEach((n)=>{
	if(n>maxNum){
		maxNum = n
	}
})
console.log(maxNum)

//another way

let max = 0;
array.forEach((n)=>{
	(max<n)&&(max = n)
})
console.log(max)