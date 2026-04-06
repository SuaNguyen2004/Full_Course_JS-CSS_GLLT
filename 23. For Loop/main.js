// 23. for
// VD 1:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// VD 2: Xuất các số chẵn từ 0 đến 10
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// VD 3: Tính tổng các số chẵn từ 0 đến 10
let tong = 0;
for (let i = 0; i <= 10; i += 2) {
  tong += i; // tong = tong + i
}
console.log("Tổng các số chẵn từ 0 - 10 là:", tong);
