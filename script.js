// Get the DOM elements
const body = document.querySelector("body");

// Declare a variable to toggle functions
var imageIndex = false;


// Function to run when the user clicks for the first time
const firstClick = () => {
    $(".img1").hide();
    $(".img3").hide();
    $(".img2").show();
    imageIndex = true;
}

// Function to run when the user clicks for the second time
const secondClick = () => {
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").show();
    imageIndex = null;
}

// Function to run when the user clicks for the third time and so on....
const thirdClick = () => {
    $(".img2").hide();
    $(".img3").hide();
    $(".img1").show();
    imageIndex = false;
}


/*
    for the button on the right hand side
*/


// Declare the event listener, and execute the suitable function
$("#btn2").click(() => {
    if (imageIndex == false) {
        firstClick();
    } else if (imageIndex == true) {
        secondClick();
    } else if (imageIndex == null) {
        thirdClick();
    }

    // Generate a random color
    body.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
})


/*
    for the button on the left hand side
*/


// Declare the event listener, and execute the suitable function
$("#btn1").click(() => {
    if (imageIndex == false) {
        secondClick();
    } else if (imageIndex == null) {
        firstClick();
    } else if (imageIndex == true) {
        thirdClick();
    }

    // Generate a random color
    body.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
})
