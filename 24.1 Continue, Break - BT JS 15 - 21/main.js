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

// BT 17:
// Viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím
// - Nhập n = 7, Bỏ qua không cộng tổng với số 3 => in ra kết quả
// (gợi ý đáp an : 1+5+7 =13)
// Thử break khi vòng lặp chạy đến giá trị n=3

/*
// C1: For
let n = parseInt(prompt("Moi nhap vao so nguyen n: "));
let tong = 0;
for (i = 1; i <= n; i += 2) {
  if (i === 3) {
    continue;
  }
  tong += i;
}

console.log("tong cac so le tu 1 - " + n + " ngoai tru 3 : " + tong);
*/

/*
// C2: while
let n = parseInt(prompt("Moi nhap vao so nguyen n: "));
let tong = 0;
let i = 1;
while (i <= n) {
  if (i === 3) {
    i += 2;
    continue;
  }
  tong += i;
  i += 2;
}
console.log("tong cac so le tu 1 - " + n + " ngoai tru 3 : " + tong);
*/

// BT 18:
// Viết chương trình :
// - Tìm những số chia hết cho 3 từ 10 đến 50

/*
// C1: for
console.log("Nhung so chia het cho 3 tu 10-50 la: ");
for (i = 10; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
*/

/*
// C2: while
console.log("Nhung so chia het cho 3 tu 10-50 la: ");
let i = 10;
while (i <= 50) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}
*/

// BT 19:
// Viết chương trình :
// Tính tổng S= 1!+2!+3!+ .... +10!

/*
let tong = 0;
let gt = 1;
for (i = 1; i <= 10; i++) {
  gt *= i;
  tong += gt;
}
console.log(tong);
*/

// BT 20:
// Bài tập JS 20:
// Số hoàn thiện (hay còn gọi là số hoàn chỉnh, số hoàn hảo hoặc số hoàn thành) là một số nguyên
// dương mà tống các ước nguyên dương chính thức của nó (số nguyên dương bị nó chia hết ngoại trừ
// nó) bằng chính nó.
// - Tìm tất cả những số hoàn thiện trong phạm vi từ 1-1000

/*
// Tôi không làm được, đây là của Chat GPT
for (let n = 1; n <= 1000; n++) {
  let tong = 0;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      tong += i;
    }
  }

  if (tong === n) {
    console.log(n);
  }
}
*/

// BT 21:
// Viết chương trình nhập nhập số nguyên a> 0 từ bàn phím
// Cho biết đó có phải số ng tố
// (số ng tố là số >1, và chỉ chia hết cho 1 và chính nó )
// - Kết thúc chương trình hỏi người dùng: Bạn có muốn tiếp tục sử dụng
// phần mềm không? Nếu chọn không thì thoát ctrinh

// Tôi không làm được, đây là của Chat GPT
let tiepTuc = true;

while (tiepTuc) {
  let a = prompt("Mời nhập vào số a:");

  // Chuyển sang số nguyên
  a = parseInt(a);

  // Kiểm tra điều kiện: a phải là số nguyên > 0
  while (isNaN(a) || a <= 0) {
    alert("Vui lòng nhập số nguyên a > 0");
    a = prompt("Mời nhập vào số a:");
    a = parseInt(a);
  }

  // Kiểm tra số nguyên tố
  let laNguyenTo = true;

  if (a === 1) {
    laNguyenTo = false;
  } else {
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        laNguyenTo = false;
        break;
      }
    }
  }

  if (laNguyenTo) {
    alert(a + " là số nguyên tố");
  } else {
    alert(a + " không phải là số nguyên tố");
  }

  // Hỏi người dùng có muốn tiếp tục không
  let luaChon = prompt(
    "Bạn có muốn tiếp tục sử dụng chương trình không?\nNhập 'n' hoặc 'N' để thoát, nhấn OK hoặc nhập bất kỳ để tiếp tục.",
  );

  if (luaChon === "n" || luaChon === "N") {
    tiepTuc = false;
    alert("Cảm ơn bạn đã sử dụng chương trình!");
  }
}
