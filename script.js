let theNumber = 0
let message = "Hello"
let thePictureNumber = 0
let refreshID = 0
let name = prompt("What is your name? ", "")
document.write("<h1>" + "Guessing Game")
document.write("<h2>" + message + " " + name + ". Ready to play?")

function initialize() {
    theNumber = Math.random()
    theNumber = theNumber * 100
    theNumber = Math.floor(theNumber)
    document.guessForm.userGuess.focus();
    document.guessForm.userGuess.select();
}

function checkGuess() {
    let userGuess = Number(document.guessForm.userGuess.value)
    if (theNumber === userGuess) {
       let newDiv = document.getElementById("msg")
       newDiv.innerHTML = "You got it!"
       refreshID = setInterval("changePicture()", 750)
    } else {
       if (userGuess > theNumber) {
            let newDiv = document.getElementById("msg")
            newDiv.innerHTML = "Too high! Try again."  
            document.guessForm.thePicture.src = "too-high-polevault.jpg"
            document.guessForm.userGuess.focus();
            document.guessForm.userGuess.select();

       } else {
            let newDiv = document.getElementById("msg")
            newDiv.innerHTML = "Sorry, " + name + ", too low. Try again."
            document.guessForm.thePicture.src = "too-low-ceiling.jpeg"
            document.guessForm.userGuess.focus();
            document.guessForm.userGuess.select();
       }
        document.guessForm.userGuess.focus();
        document.guessForm.userGuess.select();
    }
    document.guessForm.userGuess.focus();
    document.guessForm.userGuess.select();
}

function stopInterval() {
    clearInterval(refreshID)
    initialize()
    document.guessForm.thePicture.src = "kid-playing.jpg"
    document.getElementById("msg").innerHTML = ""
}

function changePicture() {
    if (thePictureNumber === 1) document.thePicture.src = "too-high-cat.jpeg"
    if (thePictureNumber === 2) document.thePicture.src = "too-low-sink.jpeg"
    if (thePictureNumber === 3) document.thePicture.src = "too-high-trailer.jpeg"
    if (thePictureNumber === 4) document.thePicture.src = "too-low-gas.jpeg"
    if (thePictureNumber === 5) document.thePicture.src = "too-high-gas.jpeg"
    if (thePictureNumber === 6) document.thePicture.src = "too-low-balance.jpeg"
    if (thePictureNumber === 7) document.thePicture.src = "too-high-curb.jpeg"
    if (thePictureNumber === 8) document.thePicture.src = "too-low-truck.jpeg"
    thePictureNumber++
    if (thePictureNumber > 8) thePictureNumber = 1
}
   

