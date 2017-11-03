function dog1() {
  document.getElementById("image1").setAttribute("src", "images/dog1.JPG");
  document.getElementById("text1").innerHTML = "I literally just told you not to.";
}

function dog2() {
  document.getElementById("image2").setAttribute("src", "images/dog2.JPG");
  document.getElementById("text2").innerHTML = "You just can't be reasoned with.";
}

function dog3() {
  document.getElementById("image3").setAttribute("src", "images/dog3.JPG");
  document.getElementById("text3").innerHTML = "Why did you have to do it?";
}

function dog4() {
  document.getElementById("image4").setAttribute("src", "images/dog4.JPG");
  document.getElementById("text4").innerHTML = "I bet you're happy that this happened.";
}

document.getElementById("image1").onclick = dog1;
document.getElementById("image2").onclick = dog2;
document.getElementById("image3").onclick = dog3;
document.getElementById("image4").onclick = dog4;
