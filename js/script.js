// counter app
// Vise counter verdi på nettsiden
// ved å klikke på grønn knapp skal tallet gå opp +1
// ved å klikke på rød knapp skal tallet gå ned -1

// initialize counter with value of 0
let counterValue = 0;


// DOM Elements:

// get the counter element:
let counterElement = document.querySelector("#counter")
// get the red and store it as a variable for later use
let buttonElementRed = document.querySelector(".button-red");
// get the button and store it as a variable for later use
let buttonElementGreen = document.querySelector(".button-green");

// add click events

// setup event handler for the greem button
buttonElementGreen.addEventListener("click", incrementCount);

function incrementCount() {
    counterValue = counterValue + 1 // increase counter value // counterValue += 5; //counterValue++;
    // console.log("counter is now ", counterValue)
    counterElement.textContent = counterValue

    checkValue()

}

// setup event handler for the red button
buttonElementRed.addEventListener("click", decrementCount);

function decrementCount() {
    counterValue = counterValue - 1;
    counterElement.textContent = counterValue

    checkValue()
}








// reset button things

// to select an element by id supply a # infront of its name
let resetButtonElement = document.querySelector("#reset-count");

resetButtonElement.addEventListener("click", resetCounter)

// resets the counter, and updates the value on the page
function resetCounter() {
    counterValue = 0; // reset the counter
    counterElement.textContent = counterValue; // update the page
}



// function to check if value is 10 or more

function checkValue() {
    // check if counterValue is 10 or more
    if (counterValue > 9) {
        alert("Congrats!!!!")
    }


}

