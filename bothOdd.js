function areBothOdd(num1, num2){
 if(num1 % 2 !=0 && num2 % 2 !=0){
 	return true;
 } else {
 	return false;
 }
}

var output = areBothOdd(25,33);
console.log(output);