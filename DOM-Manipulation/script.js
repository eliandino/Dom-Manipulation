document.getElementById('container');
document.querySelector('#container');

document.querySelectorAll("li .second");
document.querySelector("ol .third");

// let foundID = document.querySelector("#container");
// foundID.innerHTML = "Hello";



var footer = document.querySelector(".footer");
footer.classList.add("main");

var footer = document.querySelector(".footer");
footer.classList.remove("main");

let newLi = document.createElement("li");
newLi.innerText = "four"


let list = document.querySelector("ul");
list.appendChild(newLi);

let liInsideol = document.querySelectorAll("ol li");

for (let i = 0; i <liInsideol.length; i++ ){
    liInsideol[i].style.backgroundColor = "teal";
}

var  footer = document.querySelector(".footer");
footer.remove();

var backgroundColor = document.querySelector("body");
backgroundColor.style.backgroundColor = "pink";