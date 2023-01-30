const rotationAmount = 0;
const message = '';
let ciphertext = '';

// looping through the message the will be encrypted
for (let i = 0; i < message.length; i++) {
    // assigns a new const for charCode -- returns unicode 
	const charCode = message.charCodeAt(i);
    // a space in unicode
	if (charCode === 32) {
        //returns a string created from the specified sequence of UTF-16 code units
		ciphertext += String.fromCharCode(charCode);
	} else {
		ciphertext += String.fromCharCode(
			((charCode + rotationAmount) <= 90)
				? charCode + rotationAmount
				: (charCode + rotationAmount) % 90 + 64
		);
	}
}

console.log(ciphertext);


//SX AK GML GX OSLWJ