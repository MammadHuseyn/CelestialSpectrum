/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

// Get reference to the 2D context of the canvas
var canvas = document.getElementById("art-canvas");
var context = canvas.getContext("2d");

// This function is for the 4 images' text. While topText changes, bottomText outputs the info
function fillBottom(content) {
    const bottomText = document.getElementById("bottom-text");
    const topText = document.getElementById("top-text");

    // Changes text
    bottomText.innerHTML = content;
    //topText.innerHTML = "Scroll down to get information about our <strong>Team 47!<strong>"; i didnt add anything to index. so no need to change it
    topText.innerHTML = "Click images to get information about our team members!";
}

// calculates radian from the degree
function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}





function DrawSpiral() {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    canvas = document.getElementById("art-canvas");
    context = canvas.getContext("2d");


    let inputDegree = document.getElementById("degree");    // it takes the degree value from the input
    let degree = parseFloat(inputDegree.value);            // and converts it to the float

    let inputCounter = document.getElementById("counter");    // it takes the counter value from the input
    let counter = parseFloat(inputCounter.value);            // and converts it to the float

    let inputStep = document.getElementById("step");    // it takes the step value from the input
    let step = parseFloat(inputStep.value);            // and converts it to the float

    let inputColor = document.getElementById("color").value;    // it takes the rgb values from the input
    let colorComponents = inputColor.split(',').map(Number);    // and splits them by comma and converts them to the color components

    if (colorComponents.length === 3 && colorComponents.every(num => !isNaN(num) && num >= 0 && num <= 255)) { //it checks if the color components are valid
        context.strokeStyle = `rgb(${colorComponents[0]}, ${colorComponents[1]}, ${colorComponents[2]})`;
    } else {    //if not then it sets the random color for it
        context.strokeStyle = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`;
    }

    if (counter/step >= 5000){ // this if makes sure that website does not crash by limiting the number of iterations
        document.getElementById("output").innerHTML = "Please enter <b>smaller</b> numbers for counter or <b>big</b> numbers for step!";
        return;
    }

    let inputLoop = document.getElementById("forloop").value;   // it takes the for loop value from the input 
    let forLoop = inputLoop.split(' ').map(Number);         // and splits them by space and converts them to list of numbers

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;

    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();

    for (let i = 1; i < counter; i+= step) {

        for (let j = 0; j < forLoop.length; j++) { // in this loop it takes the values from the list
            context.stroke();
            if (forLoop[j] === 1) { //moves forward
                moveForward(i, context);
            } 
            else if (forLoop[j] === 2) { //turns left
                turnLeft(degree);
            }
            else if (forLoop[j] === 3) { //turns right
                turnRight(degree);
            }
            else if (forLoop[j] === 0) { //sets the initial position
                x = context.canvas.width / 2;
                y = context.canvas.height / 2;
            }
        }
    }
}

function ClearCanvas(){ //in this function it clears the canvas
    context.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas 0,0:(x,y)
}