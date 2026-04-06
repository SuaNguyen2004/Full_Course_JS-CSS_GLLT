//bài 16.7 giai bai tap 11 - giai phuong trinh bac 2
/*
Bài tập 11: Viết chương trình giải phương trình bậc 2 : ax^2 + bx + C =0
1. case1 : a=1, b=2, c =- 3
Pt có 2 nghiệm x1=1 x2 = -3

2. case2 : a=1, b=2, c=1
Pt có nghiệm kép x1=x2 = -1

3. case3 : a=1, b=1, c=1
=> Pt vô nghiệm
*/

// nhập giá trị
let a = parseFloat(prompt("Nhập số a"));
let b = parseFloat(prompt("Nhập số b"));
let c = parseFloat(prompt("Nhập số c"));

// tính delta
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  let delta = b ** 2 - 4 * a * c;

  // kiểm tra delta
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`PT có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log(`PT có nghiệm kép x1=x2=${x1}`);
  } else {
    console.log(`PT vô nghiệm`);
  }
} else {
  console.log("Lỗi định dạng");
}
