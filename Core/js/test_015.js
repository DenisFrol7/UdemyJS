console.log(NaN || 2 || undefined); // 2
console.log(NaN && 2 && undefined); // NaN
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // false
console.log(25 || null && !3); // 25
console.log(NaN || null || !3 || undefined || 5); // 5
console.log(NaN || null && !3 && undefined || 5); // 5
console.log(5 === 5 && 3 > 1 || 5); // true


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log("Done!");
}

console.log(hamburger === 3 && cola || fries === 3 && nuggets);


let hamburger1;
const fries1 = NaN;
const cola1 = 0;
const nuggets1 = 2;

if (hamburger1 || cola1 || fries1 === 3 || nuggets1) {
    console.log("Done!");
}

console.log(hamburger1 || cola1 || fries1 === 3 || nuggets1);

let hamburger2;
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;

if (hamburger2 && cola2 || fries2 === 3 && nuggets2) {
    console.log("Done!");
}

console.log(hamburger2 && cola2 || fries2 === 3 && nuggets2);
