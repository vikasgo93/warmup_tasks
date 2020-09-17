function divisibleByFive(num1) {
	if(num1 % 5 == 0){
		return true;
	}else {
		return false;
	}
}
var divisible = divisibleByFive(37)
console.log(divisible);