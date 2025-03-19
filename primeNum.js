//write a boolean function to find a given number is prime 

function Prime(num){
	let count = 0;
	
	if(num == 0 && num==1){
		return false
	}
	else{
		for(let i=2; i<=num; i++){
			if(num%i == 0){
				count++;
			}
			
		}
		if(count == 2){
			return true;
		}
		else{
			return false;
		}
	}
}
console.log(Prime(7));
console.log(Prime(4))