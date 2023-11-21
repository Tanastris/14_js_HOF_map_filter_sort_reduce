"use strict";
console.log("map.js file was loaded");

const colors = ["red", "green", "blue", "white", "black"];

for (let spalva of colors) {
  console.log("spalva ===", spalva);
}

colors.forEach((spalva) => {
  console.log("spalva ===", spalva);
});
console.log("MAP==================");

// grazina i kiekviena nauja elementa tai, ka returnina funkcija
const grazinaMap = colors.map((spalva) => {
  console.log("spalva ===", spalva);
  return spalva.toUpperCase();
});
console.log("grazinaMap ===", grazinaMap);

// parasyti map funkcija kuri naujame masyve issaugotu colors stringu ilgius

const spalvuIlgiai = colors.map((ilgis) => ilgis.length);
console.log("spalvuIlgiai ===", spalvuIlgiai);

const liSpalvos = colors.map((li) => {
  const liSpalva = document.createElement("li");
  liSpalva.textContent = li;
  return liSpalva;
});
console.log("liSpalvos ===", liSpalvos);
