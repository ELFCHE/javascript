// generateUniqueItemNumber();
// console.log(generateSecredCode(5, 2, 1));

const item = {};

item.secreteCode = prompt("Secret code: ");
item.itemCategory = prompt("Category: ");
item.itemName = prompt("Item name: ");
item.itemQuantity = prompt("Item quantity: ");
item.boughtItemPrice = prompt("Base price: ");
item.saleItemPrice = prompt("Sale price: ");

let addNewItem = addNewItems(item);
console.log(addNewItem);
