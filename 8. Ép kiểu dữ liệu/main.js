// ép kiểu dữ liệu:
// xuất thông báo cho người dùng nhập vào số a
let numberA = prompt("Mời nhập vào numberA: ");

// check thử kiểu loại biến numberA
console.log(typeof numberA);

// thử thực hiện tính toán (nếu chưa ép kiểu)
let numberB = 5;
console.log(typeof numberB);

// cộng A với B
let kq = numberA + numberB;
console.log(`kết quả A + B = ${kq}`);
console.log(typeof kq);
// vd a = 8, kết quả 85 -- > sai, js hiểu là cộng chuỗi
// Các phép tính khác
console.log(`A-B= %s`, numberA - numberB);
console.log(`A*B= %s`, numberA * numberB);
console.log(`A/B= %s`, numberA / numberB);
console.log(`A%B= %s`, numberA % numberB);

// ép kiểu dl nhập vào dùng prompt
let numberC = parseInt(prompt("Mời nhập vào numberC: "));
console.log(numberC);
console.log(typeof numberC);
console.log(numberC + numberB);

// Nếu để ParseInt mà nhập số thực thì sẽ tự ép sang kiểu nguyên

// Hoặc đơn giản dùng hàm Number() để ép -- > Kiểu dữ liệu number
let numberD = Number(prompt("Mời nhập vào numberD: "));
console.log(numberD);
console.log(typeof numberD);
console.log(numberD + numberB);
