console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
 	return Math.sqrt((Math.pow((x2-x1),2)) + Math.pow((y2-y1),2)).toFixed(2);
}