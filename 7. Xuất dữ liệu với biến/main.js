// các cách xuất dl vs biến trong JS
let soA = 25;
let soB = 5;
// Cách 1: chèn thêm dấu cách
console.log("Căn bậc 2 của " + soA + " là: " + soB);
// Cách 2: Ko cần thêm dấu cách
console.log("Căn bậc 2 của", soA, "là:", soB);
// Cách 3: dùng `` và ${}
console.log(`Căn bậc 2 của ${soA} là: ${soB}`);
// Cách 4: dùng `` và %s
console.log(`Căn bậc 2 của %s là: %s`, soA, soB);

// luyện tập
let a = 4,
  b = 3,
  kq = a * b;

// Cách 1:
console.log("Kết quả: " + a + " nhân với " + b + " bằng " + kq);
// Cách 2:
console.log("Kết quả:", a, "nhân với", b, "bằng", kq);
// Cách 3:
console.log(`Kết quả: ${a} nhân với ${b} bằng ${kq}`);
// Cách 4:
console.log(`Kết quả: %s nhân với %s bằng %s`, a, b, kq);

// Thực hành lại ngày 5/4/2026
// // C1:
// console.log("Kết quả: " + a + " nhân với " + b + " bằng " + kq);
// // C2:
// console.log("Kết quả:", a, "nhân với", b, "bằng", kq);
// // C3:
// console.log(`Kết quả: ${a} nhân với ${b} bằng ${kq}`);
// // C4:
// console.log(`Kết quả: %s nhân với %s bằng %s`, a, b, kq);
