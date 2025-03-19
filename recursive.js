//write recursive function to print numbers from 1 to name
function recursive(num,currentValue){
	if(currentValue>num){
		return;
	}
	console.log(currentValue);
	recursive(num,currentValue+1);
	
}
const num = 5;
recursive(num,1);