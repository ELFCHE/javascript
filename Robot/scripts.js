// Variables declaration
let typeOfObject;
let robotMovesForward;
let robotJumpsOverTheChair;
let robotMovesSideway;

let hitCount = 0;
let wasTheMouseDestroied = true;
let numberOfPixels = 0;

let randomNumber = Math.floor(Math.random() * 10) + 1;
let randomNumber1 = Math.floor(Math.random() * 1000) + 1;
let randomNumber2 = Math.floor(Math.random() * 1000) + 1;

// Take actions
while (hitCount <= 4) {
  typeOfObject = prompt(
    "What is in front of the Robot: wall, chair or nothing"
  );
  robotMovesForward = typeOfObject == "nothing";
  robotJumpsOverTheChair; = typeOfObject == "chair";
  robotMovesSideway
 = typeOfObject == "wall";

  // Enter the Robot's action
  if (robotMovesForward) {
    console.log("Go robotMovesForward!");
  }

  if (robotJumpsOverTheChair;) {
    console.log("robotJumpsOverTheChair;!");
  }

  if (robotMovesSideway
  ) {
    console.log("Go right!");
  }

  numberOfPixels = prompt("Enter a number of pixels: ");

  if (numberOfPixels % 2 == 0) {
    console.log("The mouse is detected! Atack!");
    console.log("You destroyed only the mouse!");
    hitCount++;
    wasTheMouseDestroied = true;

    if(randomNumber == 5){
      console.log("You destroyed all furnitures but not the mouse!");
      wasTheMouseDestroied = false;
    }


    // (randomNumber == 5) ? console.log("You destroyed all furnitures but not the mouse!") : console.log("You destroyed only the mouse!");
    //  hitCount++;


    //  while (randomNumber != 5) {
    //    console.log("You destroyed only the mouse!");
    //    hitCount++;
    //    wasTheMouseDestroied = true;
    //  }


    // if (randomNumber === 5) {
    //   console.log("You destroyed all furnitures but not the mouse!");
    //   hitCount++;
    //   wasTheMouseDestroied = false;
    // } else {
    //   console.log("You destroyed only the mouse!");
    //   hitCount++;
    //   wasTheMouseDestroied = true;
    // }


    if (wasTheMouseDestroied) {
      console.log("Search for a new mouse!");
    } else {
      console.log("Hit again!");
      hitCount++;
    }
  } else {
    console.log(" Mouse is not detected, continue searching!");
  }
}


console.log("Your battery is low. Search for a charging station immediately!");

// Charge the Robot's batery
if (randomNumber1 > randomNumber2) {
  console.log("The charing is started!");
} else if (randomNumber2 > randomNumber1) {
  console.log("There is no current in the socket!");
} else {
  randomNumber1 = Math.floor(Math.random() * 1000) + 1;
  randomNumber2 = Math.floor(Math.random() * 1000) + 1;
}

for (let i = 10; i >= 1; i--) {
  (i % 2 == 0) ? console.log(`I am a Robot! ${i}`) : console.log(i);
}
