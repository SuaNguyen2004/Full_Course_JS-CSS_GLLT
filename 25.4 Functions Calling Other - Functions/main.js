//25.4 - Functions Calling Other Functions - 1 hàm có thể gọi lại 1 hoặc nhiều hàm khác
// Hàm thực hiện phép tính cộng
function cong(a, b) {
  return a + b;
}

// Hàm thực hiện phép nhân
function nhan(x, y) {
  return x * y;
}

// Hàm gọi các hàm khác để thực hiện phép tính tổng và nhân
function congNhan(num1, num2, num3) {
  // Gọi hàm cong để tính tổng num1 + num2
  let sum = cong(num1, num2);
  // Gọi hàm nhan để tính tích sum * num3
  let product = nhan(sum, num3);
  // Trả về kết quả
  return product;
}

// Sử dụng hàm congNhan
let result = congNhan(2, 3, 4);
console.log(result);

