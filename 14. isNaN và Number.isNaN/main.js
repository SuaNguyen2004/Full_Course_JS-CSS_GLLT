// 14. isNaN, Number
// 8. hàm Number(value) --> Chuyển value sang số
// --> Nếu không chuyển được trả về NaN

let str = "123a";
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num);

// let so = Number(prompt("Nhập vào 1 số"));
// console.log(so);

let a = "123a";
console.log(isNaN(a));

let b = Number(true);
console.log(b); // 1
console.log(typeof b); // number
console.log(isNaN(b)); // false vì là số
console.log(Number(null)); // false vì là số 0, sau này học
console.log(Number("")); // false vì là số 0
console.log(Number(" ")); // false vì là số 0

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc" / "bcd"));
console.log("abc" / "bcd");
console.log(0 / 0);
console.log(Number.NaN);
console.log({});
console.log("ponyfoo");
