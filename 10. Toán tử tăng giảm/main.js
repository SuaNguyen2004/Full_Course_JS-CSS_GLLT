// toán tử tăng/giảm : toán tử tiền tố, hậu tố(++, --)
// - dùng để tăng or giảm gtri của biến 1 đvi
let a = 99;
let b = 10;
let c = 77;
let d = 88;
a++;
b--;
++c;
--d;
// xuất kết quả
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 2. Trường hợp biểu thức phức tạp
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(x);
console.log(y);
console.log(z);
