var obj = {
 mykey: "value"
};
function addProperty(obj, key){
	obj[key] = true;
	return obj;
}

var output = addProperty(obj,"add")
console.log(output);