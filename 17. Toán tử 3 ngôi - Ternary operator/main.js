// 17. Toán tử 3 ngôi
// let number = -10;
// let message = number >= 0 ? "Số dương" : "Số âm";
// console.log(message);

// if (number >= 0) {
//   console.log("Số dương");
// } else {
//   console.log("Số âm");
// }

// let number2 = 11;
// console.log(number2 % 2 === 0);
// let message2 = number2 % 2 === 0 ? "Số chẵn" : "Số lẻ";
// console.log(message2);

// BT13
let dtb = Number(prompt("Nhập điểm trinh bùng (0 - 10)"));
let xepLoai =
  dtb <= 10 && dtb >= 8
    ? "Giỏi"
    : dtb < 8 && dtb >= 6.5
      ? "Khá"
      : dtb < 6.5 && dtb >= 5
        ? "Trung bình"
        : dtb < 5 && dtb >= 0
          ? "Yếu"
          : "Nhập sai điểm";
console.log(xepLoai);
