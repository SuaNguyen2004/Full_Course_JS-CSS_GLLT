// Kiểu number
let soNguyen = 10;
let soThuc = 3.14;

// kiểu Boolean
let check = true;

// kiểu undefined : Biến chưa được gán giá trị
let diemToan;

// kiểu null : Biến được gán là null thường dùng để reset biến, gán giá trị mặc định
let connect = null;

// xuất giá trị
console.log(soNguyen);
console.log(soThuc);
console.log(typeof soNguyen);
console.log(typeof soThuc);

console.log(typeof check);
console.log(typeof diemToan);
console.log(typeof connect);

// xuất số nguyên an toàn tối đa / tối thiểu
console.log("Số nguyên an toàn tối đa: " + Number.MAX_SAFE_INTEGER);
console.log("Số nguyên an toàn tối thiểu: ", Number.MIN_SAFE_INTEGER);
