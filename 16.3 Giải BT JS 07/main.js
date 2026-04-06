// Bài tập 07: Tìm x, y khi biết tổng và hiệu của chúng
// case test : Tong = 14 ,hieu=4=> x=9, y=5
// case 2 : Tong = 8 hieu=5=>x=6.5, y=1.5
// Gợi ý:
// x + y = 14
// x - y = 4

// Nhập liệu từ bàn phím
let tong = Number(prompt("Nhập tổng 2 số"));
let hieu = Number(prompt("Nhập hiệu 2 số"));

// tính giá trị của x
let x = (tong + hieu) / 2;

// tính giá trị của y
let y = x - hieu;

// xuất kết quả
console.log("x = " + x);
console.log("y = " + y);
