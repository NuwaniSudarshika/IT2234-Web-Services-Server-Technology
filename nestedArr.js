//push and pop
console.log("push and pop")
let arr = ['a','b','c','d']

console.log(arr)
arr.push('e')
console.log(arr)
arr.pop()
console.log(arr)
console.log()

//reverse the array using the push pop
console.log("reverse array using push & pop")

let array = ['a','b','c','d']
let reversed = []

while(array.length>0){
	reversed.push(array.pop())
}
console.log(reversed)

