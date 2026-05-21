// problemstilling: hent knappen, sånt at vi kan gjøre noe med den



// get the red and store it as a variable for later use
let buttonElementRed = document.querySelector(".button-red");

// get the button and store it as a variable for later use
let buttonElementGreen = document.querySelector(".button-green");

// funksjoner i javascript
// utføre eller gjenta handlinger

// lag en egen funsksjon:

// basic greeting funksjon, skriver ut en melding
function greet(message) { 
    console.log(message)
}

// greet("Hei")

// avansert greeting funskjon
// kan ta imot, et navn, og en hilsen tekst

function greetAdvanced(userName, greetingText) {

    console.log(greetingText, userName)
}

greetAdvanced("Patryk", "God dag") // ønsket resultat: "God dag Patryk"