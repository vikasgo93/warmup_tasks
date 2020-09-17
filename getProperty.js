var obj = {
 mykey: "value"
};
function getProperty(obj, key) {

	return obj[key];
}

var output = getProperty(obj, "mykey");
console.log(output);