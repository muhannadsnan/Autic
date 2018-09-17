const convert = {
  bin2dec : s => parseInt(s, 2).toString(10),
  bin2hex : s => parseInt(s, 2).toString(16),
  dec2bin : s => parseInt(s, 10).toString(2),
  dec2hex : s => parseInt(s, 10).toString(16),
  hex2bin : s => parseInt(s, 16).toString(2),
  hex2dec : s => parseInt(s, 16).toString(10),
  str2hex : s => (s).toString(16)  
};


function swap16(x, y='0xFF', howMany=8) {
  return convert.dec2hex(((x & y) << howMany) | ((x >> howMany) & y));
}


function reverseBitOrder(val){
	var res = swap16(val);
	/* return "0x" + res.toUpperCase() */;
  return res.toUpperCase();
}

function reverseByteOrder(arr){
	return arr.reverse();
}


document.getElementById("a").innerHTML = convert.dec2hex(42);  // '2a'
document.getElementById("b").innerHTML = convert.hex2dec('ff');  // '11111000'
document.getElementById("c").innerHTML = convert.dec2bin(22);  // '10110
document.getElementById("d").innerHTML = reverseBitOrder('0xAABB');  // changing 'AABB' to 'BBAA'
document.getElementById("e").innerHTML = reverseByteOrder([24, 100, 50, 1]); 

//document.getElementById("a").innerHTML = "hex2bin: " + convert.hex2bin('8a'); // '7'

