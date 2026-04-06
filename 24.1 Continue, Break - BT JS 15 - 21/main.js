// 24.1 continue, break
// Cách dùng :
// break; thường được dùng để thoát khỏi 1 vòng lặp
// continue; dùng để bỏ qua 1 giá trị trong vòng lặp

/*
let n = 0;
while (n < 100) {
  n++;
  if (n === 4) {
    break;
  }
  console.log(n);
}
*/

/*
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  } else {
    console.log(i);
  }
}
*/

// Làm bài tập
// BT 15:
// Viết chương trình nhập vào số nguyên n, in ra kết quả n!
// - Dùng vòng lặp for
// - Dùng vòng lặp while

// C1: For
/*
let n = parseInt(prompt("Mời nhập vào số nguyên n: "));
let giaiThua = 1;
for (let i = 1; i <= n; i++) {
  giaiThua *= i;
}
console.log("Kết quả " + n + "! = " + giaiThua);
*/

// C2: while
/*
let n = parseInt(prompt("Mời nhập vào số nguyên n: "));
let giaiThua = 1;
let i = 1;
while (i <= n) {
  giaiThua *= i;
  i++;
}
console.log("Kết quả " + n + "! = " + giaiThua);
*/

// BT 16:
// Viết chương trình nhập số a từ bàn phím,
// - Nếu a chẵn thì tính tổng các số chẵn từ 0 đến a
// - Nếu a lẻ thì in ra dòng chữ “tôi o tính tổng số lẻ, bye bye ” và
// thoát chương trình

/*
let a = parseInt(prompt("Moi nhap vao so nguyen a: "));
let tong = 0;

if (a % 2 === 0) {
  for (i = 0; i <= a; i += 2) {
    tong += i;
  }
  console.log("Tổng các số chẵn từ 0 đến " + a + " là: " + tong);
} else {
  console.log("Tôi không tính tổng số lẻ, bye bye");
}
*/
