var obj = { mykey: 'value', 
				add: true };
function removeProperty(obj, key){
	delete obj[key];
	return obj;
}
var output = removeProperty(obj,"mykey");
console.log(output);