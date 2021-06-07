let isDayBatchOpen = false;
let dailyOperation;
let dailyCapital;
let balance;

const operations = {
  startDay: "Start Day",
  purchaise: "Purchase",
  sale: "Sale",
  reference: "Reference",
  bribes: "Bribes",
  endOfDay: "End of Day",
};

const chooseDailyOperation = function () {
  for (const operationProp in operations) {
    console.log(`Operations: ${operation[operationProp]}`);
  }
  dailyOperation = prompt("Please choose an operation: ");

  //   if (typeof dailyOperation !== "string") {
  //     dailyOperation = prompt("Please, enter a valid operation");
  //   }

  for (const operation in operations) {
    if (dailyOperation != operations[operation]) {
      dailyOperation = prompt("Please, enter a valid operation");
    }
  }
  console.log(`You chose ${dailyOperation}`);
  return dailyOperation;
};

const openDailyBatch = function () {
  let dailyOperation = chooseDailyOperation();

  if (dailyOperation) {
    isDayBatchOpen = true;
  }

  if (isDayBatchOpen == false) {
    dailyOperation = chooseDailyOperation();
  }
  dailyCapital = prompt("Please, enter a daily capital in parichki: ");

  if (typeof dailyCapital !== "number" || dailyCapital <= 0) {
    dailyCapital = prompt("Please, enter a daily capital in parichki: ");
  }
  return dailyCapital;
};

const openDay = function (isDayBatchOpen) {
  let lastDayBalance = endDailyBatch(dailyCapital, currentCapital);
  if (lastDayBalance >= dailyCapital) {
    console.error("You need to start the day with bigger daily capital!");
  } else {
    openDailyBatch();
  }

  if (isDayBatchOpen == true) {
    console.log(
      "You cannot open the daily Batch again. Please select a new operation!"
    );
    openDailyBatch();
  }

  if (isDayBatchOpen == false) {
    console.log(
      "You cannot close the Daily Batch as it is not already opened!"
    );
    openDailyBatch();
  }
};

const endDailyBatch = function (dailyCapital, currentCapital) {
  console.log(`Your current capital is ${currentCapital}`);
  balance = currentCapital - dailyCapital;
  return balance;
};
