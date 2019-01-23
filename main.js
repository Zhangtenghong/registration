var myInput = document.getElementById("psw");
var letter = document.getElementById("lowletter");
var capital = document.getElementById("upperletter");
var number = document.getElementById("number");
var length =document.getElementById("length")
var myInput2 = document.getElementById("psw2")

//When the user clicks on the password field, show the message box
myInput.onfocus=function showNotification(){
  document.getElementById('notification').style.display='block';
}

//when the user clicks outside of the password field, hide the message box
myInput.onblur=function showNotification(){
  document.getElementById('notification').style.display='none';
}

//When the user starts to type something inside the password field
myInput.onkeyup=function(){
//Validate lowercase letters
  var lowerCaseLetters=/[a-z]/g; //Any character from lowercase a to lowercase z, "g" means search global
  if(myInput.value.match(lowerCaseLetters)){
    letter.style.color="green";
  }else{
    letter.style.color="red";
  }
  //Validate capital letters
  var UpperCaseLetters=/[A-Z]/g;
  if(myInput.value.match(UpperCaseLetters)){
    capital.style.color="green";
  }else{
    capital.style.color="red";
  }
  //Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.style.color="green";
  }else{
    number.style.color="red";
  }
  //Validate length
  if(myInput.value.length >= 8) {
    length.style.color="green";
  }else{
    length.style.color="red";
  }
}

myInput2.onkeyup=function(){
  if(myInput2.value!==myInput.value){
    document.getElementById('notification2').style.display='block';
  }else{
    document.getElementById('notification2').style.display='none';
  }
}
