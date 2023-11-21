"use strict";
console.log("filter-find.js file was loaded");

// 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20

const numsArr = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
console.log("numsArr ===", numsArr);

//array.filter(function(currentValue, index, arr))
// filter - jei vidine fn grazina true arba truethy value, tai reiksme atrenkama
// jei ne - praleidziama

let filtered = numsArr.filter((num) => {
  if (num > 0) {
    return true;
  }
});
filtered = numsArr.filter((num) => {
  if (num > 0) return true;
});
filtered = numsArr.filter((num) => {
  return num > 0;
});
filtered = numsArr.filter((num) => num > 0);
console.log("filtered ===", filtered);

const mixed = ["red", true, 5, 7, "white", 10, NaN, null];

const strArr = mixed.filter((el) => typeof el === "string");
console.log("strArr ===", strArr);
