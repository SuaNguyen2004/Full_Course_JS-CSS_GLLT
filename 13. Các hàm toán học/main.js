// 13. các hàm toán học thông dụng
// 1. hàm Math.sqrt() : tính căn bậc 2

let a = Math.sqrt(4);
console.log(a);

// 2. hàm Math.pow(base, exponent) : tính luỹ thừa
let b = Math.pow(2, 3);
console.log(b);

// 3. hàm Math.abs() : tính giá trị tuyệt đối
let c = Math.abs(-10);
console.log(c);

// 4. hàm Math.ceil() và Math.floor() : tính làm tròn lên và xuống
let d = Math.ceil(5.004);
console.log(d);

let d2 = Math.floor(5.004);
console.log(d2);

// 5. hàm Math.round() : từ 0.5 làm tròn thành 1
let e = Math.round(7.49999999999999);
console.log(e);

// 6. làm tròn x chữ số phần đơn vị
let f = 3.14159;
let fRounded = Number(f.toFixed(2)); // trả về chuỗi
console.log(fRounded);
console.log(typeof fRounded);
// cộng thử
let g = fRounded + 5;
console.log(g);

// 7. hàm Math.min() và Math.max() : tìm min, max
let h = Math.max(1, 2, 3, 5, 8, 4, 80, 100);
console.log(h);
let h1 = Math.min(1, 2, 3, 5, 8, 4, 80, 100);
console.log(h1);
