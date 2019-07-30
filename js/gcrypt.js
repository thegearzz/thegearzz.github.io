

function encryptMessage() {
	var plain = document.getElementById("plainText").value;
	var letters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	plain = plain.toUpperCase();
	var max = 9
	var min = 1
	var cipherText = ""
	cipherText = ""
	for (var i = 0; i < plain.length - 1; i++) {
		var random = Math.floor(Math.random() * (max - min)) + min;
		var count = letters.indexOf(plain[i]);
		if (count < 10) {
			count = count.toString();
			var cipherCount = random.toString() + count;
		}
		else {
			count = count.toString();
			var cipherCount = count.substring(0,1) + random.toString() + count.substring(1,2);
		}
		cipherCount = parseInt(cipherCount, 10);
		if (cipherCount > 256) {
			cipherCount = cipherCount - 40
		}
		console.log(cipherCount);
		var cipher = cipherCount.toString(16);
		console.log(cipher);
		cipherText = cipherText.concat(cipher + " ");

	}
	cipherText = cipherText.toUpperCase();
	console.log(cipherText);
	document.getElementById("encryptedMessage").innerHTML = cipherText;
}
