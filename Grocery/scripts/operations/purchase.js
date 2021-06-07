const boughtProductsCollection = [];

const createNewItem = function (configObject) {
  configObject = configObject || {};

  let secreteCode = configObject.secreteCode;
  let itemCategory = configObject.productCategory;
  let itemName = configObject.productName;
  let itemQuantity = configObject.productQuantity;
  let boughtItemPrice = configObject.boughtItemPrice;
  let saleItemPrice = configObject.saleProductPrice;

  return (boughtItemInfo = {
    secreteCode: secreteCode,
    itemCategory: itemCategory,
    itemName: itemName,
    itemQuantity: itemQuantity,
    boughtItemPrice: boughtItemPrice,
    saleItemPrice: saleItemPrice,
  });
};

const addNewItems = function (item) {
  if (item.secretCode.length < 7) {
      console.log(`${item.secreteCode} is not valid!`)
    return (item.secreteCode = prompt("Please enter a valid secrete code: "));
  }

  for (const category in CategoryEnum) {
    if (category != item.itemCategory) {
        console.log(1=`${item.itemCategory} is not correct!`)
      return (item.itemCategory = prompt("Please enter a valid category: "));
    }
  }

  if(typeof item.Name != 'string'){
      console.log(`${item.itemName} is not correct!`)
      return (item.itemName = prompt("Please enter a valid item name: "));
  }

  if(item.itemQuantity<=0 || typeof item.itemQuantity != "number"){
      console.log(`${item.itemQuantity} is not correct!`)
      return (item.itemQuantity = prompt("Please enter a valid number of items: "));
  }

  if(boughtItemPrice <= 0 || typeof item.boughtItemPrice != 'number') {
      console.log(`${utem.boughtItemPrice} is not correct!`)
      return (item.itemName = prompt("Please enter a valid base item price: "));
  }

  if(item.saleItemPrice <= 0 || typeof item.saleItemPrice != 'number') {
      console.log(`${item.saleItemPrice} is not correct!`)
      return (item.saleItemPrice = prompt("Please enter a valid sale item price: "));
  }

  boughtProductsCollection.push(item);
  console.log("Successfully added a new item!");
};
