

function encryptMessage() {
	//grab message from HTML Doc
	var plain = document.getElementById("plainText").value;
	//Define the letter's value using an array (letter's pos is essentially the key)
	var letters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	plain = plain.toUpperCase();
	//setting max and min for random middle int
	var max = 9
	var min = 1
	//i think i need this
	var cipherText = ""
	//runs for every letter
	for (var i = 0; i < plain.length - 1; i++) {
		var random = Math.floor(Math.random() * (max - min)) + min;
		//gets letter's pos in letter array and sets count to its value
		var count = letters.indexOf(plain[i]);
		/*adds the middle padding number two different ways 
		1. for any number less that 10 it puts it in the front
		2. for all other numbers it places the number between*/
		if (count < 10) {
			count = count.toString();
			var cipherCount = random.toString() + count;
		}
		else {
			count = count.toString();
			var cipherCount = count.substring(0,1) + random.toString() + count.substring(1,2);
		}
		/*turns the string into an int (have to convert the numbers back cause i 
		didn't want to figure out how to do substring things to integers)*/
		cipherCount = parseInt(cipherCount, 10);
		if (cipherCount > 256) {
			cipherCount = cipherCount - 40
		}
		//hint
		console.log(cipherCount);
		//converts number to a hex string
		var cipher = cipherCount.toString(16);
		//hint2
		console.log(cipher);
		//appends hex string to encrypted message
		cipherText = cipherText.concat(cipher + " ");

	}
	//uppercases for prettyness (ex. e3 vs E3 see?)
	cipherText = cipherText.toUpperCase();
	//testing/hint3
	console.log(cipherText);
	//places enciphered text into HTML Doc
	document.getElementById("encryptedMessage").innerHTML = cipherText;
}
