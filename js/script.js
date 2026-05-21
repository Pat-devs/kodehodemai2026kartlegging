// problemstilling: hent knappen, sånt at vi kan gjøre noe med den

// get the button and store it as a variable for later use
let buttonElement = document.querySelector("button");


buttonElement.textContent = "DO NOT CLICK IT!"

// buttonElement.style = "color: white; background-color: red;"

// change class of an element:
// in html we would: add proprty: class="button-red"

// in JS, we can use className:
buttonElement.className = "button-red";
