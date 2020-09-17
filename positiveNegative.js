var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let positive = 0;
let negative = 0;
let arr2 = [];
var ar2 = function (arr) {
	for(i=0;i<arr.length;i++){
		if(arr[i] >0){
			positive+=arr[i];
		} else {
			negative+=arr[i];
		}
	}
	arr2 = [positive,negative];
	return arr2;
}
var output = ar2(arr);
console.log(output);