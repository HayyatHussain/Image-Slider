// Get the DOM elements
const body = document.querySelector("body");

// Declare a variable to toggle functions
var query = false;

/*
    for the button on the right hand side
*/

// Function to run when the user clicks for the first time
const firstClick = () => {
    $(".img1").hide();
    $(".img3").hide();
    $(".img2").show();
    query = true;
}

// Function to run when the user clicks for the second time
const secondClick = () => {
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").show();
    query = null;
}

// Function to run when the user clicks for the third time and so on....
const thirdClick = () => {
    $(".img2").hide();
    $(".img3").hide();
    $(".img1").show();
    query = false;
}


// Declare the event listener, and execute the suitable function
$("#btn2").click(() => {
    if (query == false) {
        firstClick();
    } else if (query == true) {
        secondClick();
    } else if (query == null) {
        thirdClick();
    }

    // Generate a random color
    body.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
})


/*
    for the button on the left hand side
*/

// Declare a variable to toggle functions
var query1 = false;

// Function to run when the user clicks for the first time
const leftFirst = () => {
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").show();
    query = null;
}

// Function to run when the user clicks for the second time
const leftSecond = () => {
    $(".img1").hide();
    $(".img3").hide();
    $(".img2").show();
    query = true;
}

// Function to run when the user clicks for the third time and so on....
const leftThird = () => {
    $(".img2").hide();
    $(".img3").hide();
    $(".img1").show();
    query = false;
}

// Declare the event listener, and execute the suitable function
$("#btn1").click(() => {
    if (query == false) {
        leftFirst();
    } else if (query == null) {
        leftSecond();
    } else if (query == true) {
        leftThird();
    }

    // Generate a random color
    body.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
})
