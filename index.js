// Generate a random number between 1 and 2
var randomNumber = Math.floor(Math.random() * 2) + 1;

// Set the source attribute of the image with class "img1"
document.querySelector(".img1").setAttribute("src", "./" + randomNumber + ".png");

// Change the text of the h1 element based on the random number
if (randomNumber === 1) {
    document.querySelector("h1").innerHTML = "HINDI!";
} else {
    document.querySelector("h1").innerHTML = "ENGLISH!";
}
