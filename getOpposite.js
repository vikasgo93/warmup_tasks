var num = "5";
function getOpposite(num) {
	if((Math.sign(num) == 1 || Math.sign(num) == -1) && num%1 == 0 && typeof(num) == "Number"){
		return num*=-1;
	} else {
		return -1;
	}
}
var result = getOpposite(num)
console.log(result);