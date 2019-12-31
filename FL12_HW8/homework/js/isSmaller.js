function isBigger (x, y) {
	return x > y;
}

function isSmaller (x, y) {
	return isBigger(y, x);
}

console.log(isSmaller(2, 1));
