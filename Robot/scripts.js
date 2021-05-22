// Variables declaration
let typeOfObject = "";
let forward = "";
let jump = "";
let go_sideway = "";

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
  forward = typeOfObject == "nothing";
  jump = typeOfObject == "chair";
  go_sideway = typeOfObject == "wall";

  // Enter the Robot's action
  if (forward) {
    console.log("Go forward!");
  }

  if (jump) {
    console.log("jump!");
  }

  if (go_sideway) {
    console.log("Go right!");
  }

  numberOfPixels = prompt("Enter a number of pixels: ");

  if (numberOfPixels % 2 == 0) {
    console.log("The mouse is detected! Atack!");
    if (randomNumber === 5) {
      console.log("You destroyed all furnitures but not the mouse!");
      hitCount++;
      wasTheMouseDestroied = false;
    } else {
      console.log("You destroyed only the mouse!");
      hitCount++;
      wasTheMouseDestroied = true;
    }
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
  if (i % 2 === 0) {
    console.log(`I am a Robot! ${i}`);
  } else {
    console.log(i);
  }
}
