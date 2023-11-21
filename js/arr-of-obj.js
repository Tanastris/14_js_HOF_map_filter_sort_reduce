"use strict";
console.log("arr-of-obj.js file was loaded");

const mainArr = [
  {
    name: "Mickey Mouse",
    age: 92,
    gender: "Male",
    town: "Disneyville",
  },
  {
    name: "SpongeBob SquarePants",
    age: 33,
    gender: "Male",
    town: "Bikini Bottom",
  },
  {
    name: "Dora the Explorer",
    age: 14,
    gender: "Female",
    town: "Playa Verde",
  },
  {
    name: "Bugs Bunny",
    age: 83,
    gender: "Male",
    town: "Looneyville",
  },
  {
    name: "Lisa Simpson",
    age: 9,
    gender: "Female",
    town: "Springfield",
  },
];
console.table(mainArr);

// console.log("mainArr[0].town ===", mainArr[0].town);

let found = mainArr.find((cartoonObj) => cartoonObj.name === "Lisa Simpson");
// found = mainArr.find((cartoonObj) => cartoonObj.age > 33);
// console.log("found ===", found);

// isrikiuoti mainArr pagal amziu
mainArr.sort((aObj, bObj) => aObj.age - bObj.age);
console.table(mainArr);
// isrikiuoti mainArr pagal varda
mainArr.sort((aObj, bObj) => aObj.name.localeCompare(bObj.name));
console.table(mainArr);
// atrinkti tik vyrus arba moteris
const menArr = mainArr.filter((userObj) => userObj.gender === "Male");
console.log("menArr ===", menArr);
