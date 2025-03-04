// this project is strictly javascript all styling is done here.
// its going to look messy but i wanted to try something different.
// and learn more about javascript i feel like if i constantly code here
// it will be much faster to learn about javascript.

// universal: setting some main styles for everything.
const allElements = document.querySelectorAll("*");
allElements.forEach(function(element) {
  element.style.padding = "0px";
  element.style.margin = "0px"; 
  element.style.boxSizing = "border-box";
  element.style.fontSize = "1rem";
});

// body: setting the styles for the body element.
const setBody = document.body;
setBody.style.height = "100vh";
setBody.style.display = "flex";
setBody.style.flexDirection = "column";
setBody.style.justifyContent = "center";
setBody.style.alignItems = "center";
setBody.style.background = "black";

// creating a div and adding some styles
const div = document.createElement("div");
div.classList.add("container");
document.body.appendChild(div);

const container = document.querySelectorAll(".container");
container.forEach(function(element) {
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.width = "200px";
  element.style.height = "200px";
  element.style.borderRadius = "50%";
  element.style.backgroundColor = "blue";
});