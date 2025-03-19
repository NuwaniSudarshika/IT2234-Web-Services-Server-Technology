//JSON
//{key:value}
let student = {regNo:'2021/ICT/01',name:'James',age:21,course:'IT'}
console.log(student)
console.log(student.name)
let students = [
	{regNo:'2021/ICT/01',name:'James',age:21,course:'IT'},
	{regNo:'2021/ICT/02',name:'Ravi',age:22,course:'IT'},
	{regNo:'2021/ICT/03',name:'Gaya',age:21,course:'IT'}]
	
console.log(students)

/*Define 10 student JSON
Store it in an Array
find the female students
find the students who are following IT course
find the Max and average GPA among the students 
*/
const students1=[
{id:1,name:"Alice",gender:"Female",course:"IT",gpa:3.8},
{id:2,name:"Bob",gender:"Male",course:"IT",gpa:3.2},
{id:3,name:"carol",gender:"Male",course:"IT",gpa:3.9},
{id:4,name:"David",gender:"Male",course:"Bussiness",gpa:3.1},
{id:5,name:"Eve",gender:"Female",course:"bio",gpa:3.8},
{id:6,name:"Frank",gender:"Male",course:"bio",gpa:3.5},
{id:7,name:"Grace",gender:"Female",course:"IT",gpa:3.8},
{id:8,name:"Harry",gender:"Male",course:"Maths",gpa:3.7},
{id:9,name:"Ivy",gender:"Female",course:"Bussiness",gpa:3.3},
{id:10,name:"Jack",gender:"Male",course:"Maths",gpa:3.4}
]

const femaleStudents = students1.filter(student=> student.gender==="Female");

const itStudents = students1.filter(student=> student.course==="IT");

const maxGPA = Math.max(...students1.map(student=>student.gpa));

const avgGPA = students1.reduce((sum,student)=> sum+student.gpa,0)/students1.length;

console.log("female Students: ",femaleStudents)
console.log("IT Students: ",itStudents)
console.log("Max GPA: ",maxGPA)
console.log("average GPA: ",avgGPA.toFixed(2))