
let num = 266219,
    multiply = 1,
    len,
    digits = [];

while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
}
len = digits.length;
for (let i = 0; i < len; i++) {
    multiply *= digits[i];
}
multiply **= 3;
console.log(String(multiply).slice(0, 2));

