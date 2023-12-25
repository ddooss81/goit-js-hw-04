 'use strict';

function isEnoughCapacity(products, containerSize) {
  let values = Object.values(products);
  let sumOrder = 0;
  for (let sum of values) {
    sumOrder += sum;
  } 
  return sumOrder <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

//---------------------- Вариант через reduce, но его нам вроде не давали, я бы делал так ---------------------------
//-----------------------логика работы метода та же. Достали, сложили, сравнили, выдали true/false ------------------
// function isEnoughCapacity(products, containerSize) {
//   return Object.values(products).reduce((sum, value) => sum + value) <= containerSize;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false