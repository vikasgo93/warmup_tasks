console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(arr)
{
	const numbers = arr.split(",");
	//console.log(output);
	const out = numbers.reduce((total, num) => {
		return total + parseFloat(num);
	},0);
	return out;
}
/*let sum = 1.5 + 2.3;
console.log(sum);*/