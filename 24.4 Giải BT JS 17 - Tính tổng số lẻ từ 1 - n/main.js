//24.4 giai bai tap 17 - tinh tổng số lẻ từ 1 đến n
/*
Bài tập JS 17:  
       Viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím
Nhập n = 7, Bỏ qua không cộng tổng với số 3 => in ra kết quả 
	(gợi ý đáp án : 1+5+7 =13)
Thử break khi vòng lặp chạy đến giá trị n=3
*/
let n = Number(prompt("Nhập số n: "));

// Kiểm tra xem n có phải là số nguyên
while (!Number.isInteger(n) || n <= 0) {
  n = Number(prompt("Nhập lại n, n phải là số nguyên: "));
}
console.log(n);

let sum = 0;
for (i = 1; i <= n; i += 2) {
  console.log(i);
  if (i === 3) {
    // continue;
    break;
  }
  sum += i;
}
alert(`Tổng các số lẻ từ 1 đến ${n} (loại trừ 3 là) là ${sum}`);

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
