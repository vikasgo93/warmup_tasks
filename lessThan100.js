function lessThan100(num1,num2) {
	if((num1+num2) < 100){
		return true;
	} else {
		return false;
	}
}
var res = lessThan100(85,15)
console.log(res);