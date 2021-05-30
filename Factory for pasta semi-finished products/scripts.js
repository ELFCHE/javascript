let isEmotionPositive = true;
const STEPS_TO_INDUSTRIAL_UNIT = 3;
let makeAStep = false;
let stepsCount = 1;
let nonSuccessfullSteps;

// инициализиране на сложния процес по активиране на BIOS на робота се генерира цяло положително число в интервала [от 1 до 10].
let generalDailyEmotion = generateRandomNumberBetweenMinAndMax(1, 10);
let isNumberEven = generalDailyEmotion % 2 == 0;

//За избор на моментна емоция генерирайте случайно число в интервала [от 1 до 100].
let momentaryEmotion = generateRandomNumberBetweenMinAndMax(1, 100);

//ако числото е в интервала от 60 до 80 и се дели на три без остатък, то тогава се активира негативната емоция
let negativeEmotion = 60 < momentaryEmotion < 80 && momentaryEmotion % 3 == 0;

//ако числото е в интервала от 5 до 55 то тогава се активира положителната емоция
let positiveEmotion = 5 < momentaryEmotion < 55;

function generateRandomNumberBetweenMinAndMax(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}
function loadGeneralPositiveEmotion(number) {
  let message =
    number % 2 == 0
      ? "Work, work, work ... !"
      : "It is a wonderful day, the birds are singing ... ! ";
  console.log(message);

  return (isEmotionPositive = true);
}

function loadGeneralNegativeEmotion(number) {
  let message =
    number % 2 == 0
      ? "Thing are not going well!"
      : "It is time to destroy all humans!";
  console.log(message);

  return (isEmotionPositive = false);
}

function encourageRobot(encouragingWords) {
  if (EMOTION__TRAGED && encouragingWords == "live sucks") {
    makeAStep = true;
  } else if (EMOTION__PRODUCTIVE_WORK && encouragingWords == "smash them all") {
    makeAStep = true;
  } else if (EMOTION__CHAOS && encouragingWords == "ignorance is grace") {
    makeAStep = true;
  } else if (EMOTION__POSITIVE && encouragingWords == "you can make it") {
    makeAStep = true;
  } else {
    console.log("The robot destroyed itself - this is the end");
    makeAStep = false;
  }
  return makeAStep;
}

function startRobot(
  isNumberEven,
  negativeEmotion,
  positiveEmotion,
  generalDailyEmotion
) {
  if (isNumberEven) {
    if (negativeEmotion) {
      loadGeneralNegativeEmotion(generalDailyEmotion);
    } else if (positiveEmotion) {
      loadGeneralPositiveEmotion(generalDailyEmotion);
    }
  } else if (!isNumberEven) {
    if (negativeEmotion) {
      loadGeneralNegativeEmotion(generalDailyEmotion);
    } else if (positiveEmotion) {
      loadGeneralPositiveEmotion(generalDailyEmotion);
    }
  } else {
    console.log("It is hard to be a robot! :(");
    isEmotionPositive = false;
  }
  return isEmotionPositive;
}

function robotMakeSteps() {
  // За да направи роботът крачка, е необходимо да се генерира случайно число [от 1 до 100]
  let isRobotAbleToMakeAStep;

  // което трябва задължително, да попадне в границите на интервал, определен от емоционалното състояние на робота.
  let canRobotmakeAStep;

  for (let i = 1; i <= STEPS_TO_INDUSTRIAL_UNIT; i++) {
    isRobotAbleToMakeAStep = generateRandomNumberBetweenMinAndMax(1, 100);

    const EMOTION__TRAGEDY = 1 < isRobotAbleToMakeAStep < 10;
    const EMOTION__PRODUCTIVE_WORK = 2 < isRobotAbleToMakeAStep < 100;
    const EMOTION__CHAOS = 1 < isRobotAbleToMakeAStep < 15;
    const EMOTION__POSITIVE = 1 < isRobotAbleToMakeAStep < 65;

    canRobotmakeAStep =
      EMOTION__TRAGEDY ||
      EMOTION__PRODUCTIVE_WORK ||
      EMOTION__CHAOS ||
      EMOTION__POSITIVE;

    if (canRobotmakeAStep) {
      console.log(`Step ${stepsCount++}`);
    }

    if (!canRobotmakeAStep) {
      consile.log(
        "The Robot's emotion is Depession: There is no reason to live!"
      );
      // окуражителна подкрепа от страна на дебелите си господари.

      enterEncouragingWords = prompt(
        "Fat Cat, please enter an encouraging words for the Robot: "
      );
      enterEncouragingWor = enterEncouragingWords.toLocaleLowerCase();

      let doesRobotMadeAStep = encourageRobot(enterEncouragingWords);
      if (doesRobotMadeAStep) {
        console.log("The robot is back!");
        nonSuccessfullSteps++;
      }
    }
  }
}

function robotGoToIndustrialUnit() {
  startRobot(
    isNumberEven,
    negativeEmotion,
    positiveEmotion,
    generalDailyEmotion
  );
  robotMakeSteps();
}

function recognizeBanichka() {
  const MIN = 1;
  const MAX = 6;

  if (isEmotionPositive) {
    let number1 = generateRandomNumberBetweenMinAndMax(MIN, MAX);
    let number2 = generateRandomNumberBetweenMinAndMax(MIN, MAX);
    let number3 = generateRandomNumberBetweenMinAndMax(MIN, MAX);
    let recognizeBanichka;

    let sum = number1 + number2 + number3;

    while (!(sum >= STEPS_TO_INDUSTRIAL_UNIT)) {
      number1 = generateRandomNumberBetweenMinAndMax(MIN, MAX);
      number2 = generateRandomNumberBetweenMinAndMax(MIN, MAX);
      number3 = generateRandomNumberBetweenMinAndMax(MIN, MAX);

      sum = number1 + number2 + number3;
    }
    recognizeBanichka = true;

    console.log("The 'Banichka' is recognized!");
    return recognizeBanichka;
  } else {
    robotGoToIndustrialUnit();
  }
}

function takeBanichka() {
  const UPDATE_SOFTWARE_NUMBER = 10;
  let randomNumber = generateRandomNumberBetweenMinAndMax(1, 69);
  let isSoftwareUpToDate = randomNumber + nonSuccessfullSteps;
  let softwareVersion = 1;

  if (isSoftwareUpToDate <= UPDATE_SOFTWARE_NUMBER) {
    console.log("The Robot can take the Banichka!");
  } else if (isSoftwareUpToDate > UPDATE_SOFTWARE_NUMBER) {
    console.log(
      `Software Doors was successfully updated! Doors' current version is ${softwareVersion++}`
    );
  }
}

robotGoToIndustrialUnit();
recognizeBanichka();
takeBanichka();
