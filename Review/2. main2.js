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

// Nhập số a, b, c của phương trình
let a = parseInt(prompt("Nhập số a: "));
let b = parseInt(prompt("Nhập số b: "));
let c = parseInt(prompt("Nhập số c: "));

// Tính delta
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  let delta = b * b - 4 * a * c;

  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`Phương trình có 2 nghiệm phân biệt x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    let x = (-b / 2) * a;
    console.log(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
  } else {
    console.log(`Phương trình vô nghiệm`);
  }
} else {
  console.log("Có phần tử bạn nhập không phải số");
}
