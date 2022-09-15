// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to Generate Password (at lease one type has been chosen)
function generatePassword(){
  //collect requirement from user
  //ask for password length (8~128)

  let passLength = window.prompt("what is the password length do you want? (Please choose from 8~128)");
  while(passLength < 8 || passLength >128 || isNaN(passLength)){
    passLength = window.prompt("Invalid input,please input again! \n what is the password length do you want? (Please choose from 8~128)");
  }
  //create password list and initialize all required password component list.
  let passwordlist = [];
  const lowerList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const numList = [0,1,2,3,4,5,6,7,8,9]
  const specList = ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
  
  let isTypeChosen = false;

while(!isTypeChosen){
    //ask for using lowercase or not (a	b	c	d	e	f	g	h	i	j	k	l	m	n	o	p	q	r	s	t	u	v	w	x	y	z)
    const useLower = window.confirm("Would you like to use Lowercase characters as part of the password?")
    if(useLower){
      passwordlist= passwordlist.concat(lowerList);
      isTypeChosen = true;
    }
    console.log(passwordlist);
    //ask for using Uppercase or not(A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z)
    let useUper = window.confirm("Would you like to use Uppercase characters as part of the password?")
    if(useUper){
      let upperList = lowerList;
      for (let i = 0; i < upperList.length; i++) {
        upperList[i]=upperList[i].toUpperCase();
      }
      passwordlist= passwordlist.concat(upperList);
      isTypeChosen = true;
    }
    console.log(passwordlist);

    //ask for usging numeric or not (0~9)
    
    let useNum = window.confirm("Would you like to use Number as part of the password?")
    if(useNum){
      passwordlist= passwordlist.concat(numList);
      isTypeChosen = true;
    }
    console.log(passwordlist);

    //ask for using spactial characters or not ( !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ )
    let useSpec = window.confirm("Would you like to use Special characters as part of the password?")
    if(useSpec){
      passwordlist= passwordlist.concat(specList);
      isTypeChosen = true;
    }

    if (!isTypeChosen) {
      window.alert("Please at least chosse one type of password.")
    }
    console.log(passwordlist);
}

  let newPassword = [];

  for (let i = 0; i < passLength; i++) {
    let ran = Math.floor(Math.random()*passwordlist.length)
    newPassword[i] = passwordlist[ran];
    console.log(ran);
  }
  
  console.log(newPassword);
  let temp = newPassword.toString()
  console.log(temp);
  let result = temp.replaceAll(",","");
  console.log(result)
  return result;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




