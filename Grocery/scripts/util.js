const generateSecredCode = function (
  numberOfOperations,
  numberOfSales,
  profit
) {
  let secretCode = `${numberOfOperations}$$${numberOfSales}%%${profit}`;

  if (numberOfOperations == 0 || numberOfOperations == null) {
    secretCode = `#@$$${numberOfSales}%%${profit}`;
  }
  if (numberOfSales == 0) {
    secretCode = `${numberOfOperations}$$**%%${profit}`;
  }
  if (profit <= 0) {
    secretCode = `${numberOfOperations}$$${numberOfSales}%%00`;
  }

  return secretCode;
};

const isPrime = function (num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const generateUniqueItemNumber = function (itemName) {
  let letter;
  let numberOfLettersinItemName;

  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    letter = String.fromCharCode(i);
  }
  numberOfLettersinItemName = itemName.lenght;

  for (let i = 2; i < Infinity; i++) {
    if (Infinity % i === 0) return false;
    return num > 1;
  }

  return letter;
};
