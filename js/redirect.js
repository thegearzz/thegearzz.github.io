var passphrase = "";

function redirectMe() {
	passphrase = document.getElementById("passphrase").value;
  passphrase = passphrase.toUpperCase();
  console.log(passphrase);
		
  if(passphrase == "TEST"){
	passphrase = passphrase.toLowerCase();
  	window.open("/" + passphrase + ".html";
  }
	
	else {
		document.getElementById("errorMessage").innerHTML = "Sorry, but that's not a valid code.";
	}
  
}
