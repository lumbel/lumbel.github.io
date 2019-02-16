var myHeader = document.querySelector("h1");
var myButton = document.querySelector("button");

var myImage = document.querySelector("img");

myHeader.textContent = "Mozilla is cool";

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeader.textContent = "Mozilla is cool " + myName;
}

/* myButton.onclick = function() {
  
}; */
myButton.onclick = function() {
  setUserName();
};

myImage.onclick = function() {
  mySrc = myImage.getAttribute("src");
  var sname = localStorage.getItem("name");
  if (mySrc === "img/mozilla.png") {
    myHeader.textContent = "PeaZilla is cool, " + sname;
    myImage.setAttribute("src", "img/peacock.jpg");
  } else {
    myHeader.textContent = "Mozilla is cool, " + sname;
    myImage.setAttribute("src", "img/mozilla.png");
  }
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeader.textContent += " " + storedName;
}
