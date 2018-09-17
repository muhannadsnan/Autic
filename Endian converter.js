const convert = {
  bin2dec : s => parseInt(s, 2).toString(10),
  bin2hex : s => parseInt(s, 2).toString(16),
  dec2bin : s => parseInt(s, 10).toString(2),
  dec2hex : s => parseInt(s, 10).toString(16),
  hex2bin : s => parseInt(s, 16).toString(2),
  hex2dec : s => parseInt(s, 16).toString(10),
  str2hex : s => (s).toString(16),
  
};


function swap16(x, y='0xFF', howMany=8) {
  return convert.dec2hex(((x & y) << howMany) | ((x >> howMany) & y));
}


function doWork(val){
	var res = swap16(val);
	return "0x" + res.toUpperCase();
}


document.getElementById("a").innerHTML = convert.bin2dec(111); // '7'
document.getElementById("b").innerHTML = convert.dec2hex(42);  // '2a'
document.getElementById("c").innerHTML = convert.hex2bin('f8');  // '11111000'
document.getElementById("d").innerHTML = convert.dec2bin(22);  // '10110
document.getElementById("e").innerHTML = doWork('0xAABB');  // changing '0xAABB' to '0xBBAA'