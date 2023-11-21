"use strict";
console.log("includes-every-some.js file was loaded");

const numsArr = [1, -5, 0, -4, 10, -3, 15];

let yraNeg4 = numsArr.includes(-4);
console.log("yraNeg4 ===", yraNeg4);

yraNeg4 = numsArr.some((sk) => sk === -4);
console.log("yraNeg4 ===", yraNeg4);

let minus50 = numsArr.some((sk) => sk < -50);
console.log("minus50 ===", minus50);

let allPositives = numsArr.every((sk) => sk > 0);
console.log("minus50 ===", minus50);
