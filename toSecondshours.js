var arr = [1, 2, 3];
function hourToSeconds(arr) {
	for(i=0;i<arr.length;i++){
		arr[i]*=3600;
	}
	return arr;
}
var data = hourToSeconds(arr)
console.log(data);