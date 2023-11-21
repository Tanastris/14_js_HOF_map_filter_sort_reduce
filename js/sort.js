"use strict";
console.log("sort.js file was loaded");

const numsArr = [1, -5, 0, -4, 10, -3, 15];
const strArr = ["bb", "dd", "cc", "aa"];

// sort() - paprastom tekstinem reiksmem veikia kaip ir turetu buti
console.log("strArr ===", strArr);
strArr.sort();
console.log("strArr ===", strArr);
strArr.reverse();
console.log("strArr ===", strArr);

// skaitinis sort yra daromas su funkcija, kuri grazina teigiama, neigiama arba 0
numsArr.sort((a, b) => a - b);
console.log("numsArr ===", numsArr);
