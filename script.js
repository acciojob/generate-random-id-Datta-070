function makeid(l) {
  // write your code here
	let tmp="0123456789abcdefghijklmnopqrstuvwxyz";
	let str="";
	for(let i=0;i<l;i++){
		let index=Math.floor(Math.random()*(tmp.length-1));
		str+=tmp[index];
	}
	return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
