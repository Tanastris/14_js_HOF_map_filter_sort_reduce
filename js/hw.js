"use strict";
console.log("hw.js file was loaded");
// PIRMA UZDUOTIS=======================================================

// const numArray = [5, 15, -2, 0, -5, 7];

// const filtered = numArray.filter((number) => number >= 0);
// console.log("filtered ===", filtered);

// const replaceNegatives = numArray.map((number) => Math.abs(number));
// console.log("replaceNegatives ===", replaceNegatives);

// function getAvgFromArr(funcId) {
//   const sum = funcId.reduce((a, v) => a + v, 0);
//   const avg = sum / funcId.length;
//   console.log("avg ===", avg);
//   return;
// }
// getAvgFromArr(numArray);

// ANTRA UZDUOTIS

const numbersArray = [
  2, 12.5, 33, -7.2, 28, 49, -17, 19.9, 42, -14.45, -10, 20,
];

// 2.1 Padauginti masyvo narius iš 2
const doubleArrObj = numbersArray.map((number) => number * 2);
console.log("doubleArrObj ===", doubleArrObj);

// 2.2 Pakelti masyvo narius kvadratu
const squaredArrObj = numbersArray.map((number) => number * number);
console.log("squaredArrObj ===", squaredArrObj);

// 2.3 Padauginti masyvo narius iš jų index'0 (vietos masyve)
const timesIdxArrObj = numbersArray.map((number, idx) => number * idx);
console.log("timesIdxArrObj ===", timesIdxArrObj);

// 2.4 Atrinkti tiktai teigimų elementų masyvą
const onlyPositiveArrObj = numbersArray.filter((number) => number > 0);
console.log("onlyPositiveArrObj ===", onlyPositiveArrObj);

// 2.5 Atrinkti tiktai neigiamų elementų masyvą
const onlyNegativeArrObj = numbersArray.filter((number) => number < 0);
console.log("onlyNegativeArrObj ===", onlyNegativeArrObj);

// 2.6 Atrinkti tiktai lyginių skaičių masyvą
const onlyEvenArrObj = numbersArray.filter((number) => number % 2 === 0);
console.log("onlyEvenArrObj ===", onlyEvenArrObj);

// 2.7 Atrinkti tiktai nelyginių skaičių masyvą
const onlyOddArrObj = numbersArray.filter((number) => number % 2 === 1);
console.log("onlyOddArrObj ===", onlyOddArrObj);

//2.8 Visas neigiamas vertes masyve padaryti teigiamomis
const makePositiveArrObj = numbersArray.map((number) => Math.abs(number));
console.log("makePositiveArrObj ===", makePositiveArrObj);

//2.9 Pakelti visas masyvo reikšmes laipsniu 'index'
const raiseByIdxArrObj = numbersArray.map((number, idx) =>
  Math.pow(number, idx)
);
console.log("raiseByIdxArrObj ===", raiseByIdxArrObj);

// 2.10 Atrinkti tik natūralių skaičių masyvą
const onlyPositiveIntegerArrObj = numbersArray.filter(
  (number) => Number.isInteger(number) && number > 0
);
console.log("onlyPositiveIntegerArrObj ===", onlyPositiveIntegerArrObj);

// 2.11 Suapvalinti visas masyvo reikšmes iki sveikų skaičių
const roundArrObj = numbersArray.map((number) => Math.round(number));
console.log("roundArrObj ===", roundArrObj);

// 2.12 Atrinkti kas antrą elementą
const everySecondArrObj = numbersArray.filter((number, idx) => idx % 2 === 1);
console.log("everySecondArrObj ===", everySecondArrObj);

// 2.13 Atrinkti kas penktą elementą
const everyFifthArrObj = numbersArray.filter((number, idx) => idx % 5 === 4);
console.log("everyFifthArrObj ===", everyFifthArrObj);

// 2.14 Sukurti funkciją, kuri ima masyvą ir atspausdina kiek- vieną jo reikšmę atskirai: [0] => 2. [1] => 12. [2] => 33. (nieko negrąžina)
function getAllElements(ArrId) {
  ArrId.forEach((element, idx) => console.log(`[${idx}] => ${element}`));
}
// getAllElements(numbersArray);

// 2.15 Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą
/**
 *
 * @param {number[]} ArrId
 * @returns
 */
function getElSum(ArrId) {
  const sum = ArrId.reduce((a, v) => a + v);
  console.log("sum ===", sum);
  return sum;
}
// getElSum(numbersArray);

// 2.16 Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį
function getElAvg(ArrId) {
  const avg = getElSum(ArrId) / ArrId.length;
  console.log("avg ===", avg);
}
// getElAvg(numbersArray);

// 2.17 Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve, be Math.min/max
function getMaxNumberFromArr(ArrId) {
  const sorted = ArrId.sort((a, b) => a - b);
  // console.log("sorted ===", sorted);
  const maxNumber = sorted[sorted.length - 1];
  console.log("maxNumber ===", maxNumber);
}
// getMaxNumberFromArr(numbersArray);

// 2.18 Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.
function getMinNumberFromArr(ArrId) {
  const sorted = ArrId.sort((a, b) => a - b);
  // console.log("sorted ===", sorted);
  const minNumber = sorted[0];
  console.log("minNumber ===", minNumber);
}
// getMinNumberFromArr(numbersArray);

// 3 uzduotis

const mixedArray = [
  "banana",
  "giraffe",
  "pizza",
  true,
  42,
  false,
  "unicorn",
  7,
  "laughter",
  true,
  "and",
  3.14,
];

// 3.1 Atrinkti i nauja masyva tik string tipo reiksmes
const onlyStringObjArr = mixedArray.filter((obj) => typeof obj === "string");
console.log("onlyStringObjArr ===", onlyStringObjArr);

// 3.1.1 is gauto masyvo suzinoti ar yra zodis trumpesnis nei 4 raides
function isItLongerThan4(ArrId) {
  const isItLonger = ArrId.find((element) => element.length > 4);
  isItLonger ? console.log("radau") : console.log("neradau");
}
// 3.1.2
function howManyLongerThan5(ArrId) {
  const isItLonger = ArrId.filter((text) => text.length > 5);
  console.log(isItLonger.length);
}
// 3.2 Parasyti funkcija kuri atrenka is masyvo skaicius ir grazina ju suma.
function getNumbersSumArr(ArrId) {
  const onlyNumbers = ArrId.filter((obj) => typeof obj === "number");
  const sum = onlyNumbers.reduce((a, v) => a + v);
  console.log("sum ===", sum);
}
// 3.3 Suzinoti ir atspausdinti ar masyve yra neigiamu reiksmiu?
function areThereNegatives(ArrId) {
  const onlyNumbers = ArrId.filter((obj) => typeof obj === "number");
  const isThereNegative = onlyNumbers.find((number) => number < 0);
  isThereNegative ? console.log("radau") : console.log("neradau");
}
// 3.4 parasyti koda kuris is sio masyvo sukurtu/grazintu kintamaji objekta kuris pasako kiek true ir kiek false reiksmiu yra siame masyve. pvz {taip: 2, ne: 2}
function filterBoolean(ArrId) {
  const booleanArr = ArrId.filter((obj) => typeof obj === "boolean");
  const positives = booleanArr.filter((obj) => obj === true);
  const negatives = booleanArr.filter((obj) => obj === false);
  console.log(`taip: ${positives.length}, ne: ${negatives.length}`);
}
filterBoolean(mixedArray);
