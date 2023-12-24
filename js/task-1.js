//  'use strict';



// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let product = products.find((p) => p.name === productName);
//   if (product) {
//     return product.price * product.quantity;
//   } else {
//     return `Product ${productName} not found!`;
//   }
// }


// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));


//---------------------------------------------------------------------------------------------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());

//------------------------------------------------------------------------------------------------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     atTheOldToad.potions.push(potionName);
    
//   },
// };
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion("Invisibility");
//----------------------------------------------------------------------------
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let result = 0;
//     for (let potionPrice of atTheOldToad.potions){
//       result += potionPrice.price;
//       }
//     return result;
//   },
// };
//-----------------------------------------------------------------------------
// function add(...args) {
//   let sum = 0;
//   for (let allArgs of args){
//   sum += allArgs;
//   }
//   return sum;
// }
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(12, 4, 11, 48));
// console.log(add(15, 27));
//--------------------------------------------------------------------------------
function addOverNum(first, ...args) {
  let numberForCheck = first
  let result = 0;
 
   // console.log(numberForCheck);
  for (let numb of args) {
    if (numb > numberForCheck) {
      result += numb;
    }
  }
  return result;
}


console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
