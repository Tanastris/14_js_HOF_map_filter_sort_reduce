"use strict";
console.log("reduce.js file was loaded");

const nums = [1, 2, 3, 4];

// gauti suma
let total = 0;
nums.forEach((sk, idx) => {
  total = total + sk;
  console.log(`ciklas ${idx + 1} tarpine reiksme  = ${total}`);
});
// console.log("total ===", total);

// array.reduce((total, currentValue, currentIndex, arr) => {}, initialValue)

let totalSum = nums.reduce((accumulator, sk, idx) => {
  // kas grys is sios funkcijos sio ciklo metu bus issaugota i kito ciklo akumuliatoriu
  let sum = sk + accumulator;
  return sum;
}, 0);
totalSum = nums.reduce((accumulator, sk) => sk + accumulator, 0);
console.log("totalSum ===", totalSum);
