let balance = 100;
let currencyCost = 0;

const cryptoCurrency = {
  Criptomaza: 10,
  Sharo: 0.5,
  Bitcat: 100000,
  eTorium: 2,
  Tiger: 50,
};

let byMoney = confirm(
  "Welcome to Cripto Exchange 'The Jungle'! Do you want to buy some cash?"
);

if (byMoney === false) {
  alert("Thank you for NOT buying anything! Get out of here!");
} else if (byMoney === true) {
  alert(
    "We ofer you the following crypto currency: Criptomaza, Sharo, Bitcat, eTorium, Tiger :)"
  );

  let currencyType = prompt(
    "You have a 100$ balance in your account. Please select what currency you want to buy: Criptomaza, Sharo, Bitcat, eTorium or Tiger"
  );

  //   if (typeof currencyType !== "string") {
  //     currencyType = prompt(
  //       "Please enter a valid crypto currency name: Criptomaza, Sharo, Bitcat, eTorium or Tiger"
  //     );
  //   }
  let numberOfCurrency = prompt(
    `Please select how many valuta you want from currency type ${currencyType}?`
  );
  if (typeof numberOfCurrency !== "number") {
    numberOfCurrency = prompt(
      "Please enter a valid number of crypto entities!"
    );
  }

  const valuta = Object.entries(cryptoCurrency);
  for (const [currency, value] of valuta) {
    if (currency === currencyType) {
      currencyCost = numberOfCurrency * value;
    }
  }

  if (currencyCost <= balance) {
    alert(
      `You own ${numberOfCurrency} crypto valuta of ${currencyType} currency. You spent ${currencyCost}$. Your current balance is ${
        balance - currencyCost
      }!`
    );

    let showMyBalance = confirm(
      "You are already rich! Do you want me to show you how much money do you have?"
    );

    if (showMyBalance) {
      alert(
        `You have exactly ${numberOfCurrency} entities of currency ${currencyType} and it cost is ${currencyCost}$.`
      );
      alert(
        "The pleasure was our, that you choose our Crypto Exchange! I hope we will see you soon again"
      );
    } else {
      alert("You are goint to loose! Go away!");
    }
  } else {
    alert(
      `Your balance is not enough: you have ${balance}$ and you need to pay ${currencyCost}$.`
    );
  }
}
