// Bài tập JS 22: (n! cách bình thường chữa ở bài 24.2)
// Sử dụng function - Viết chương trình nhập vào số nguyên n,
// in ra kết quả n!
// - Dùng vòng lặp for
// - Dùng vòng lặp while

/*
function tinhGiaiThua() {
  let n = parseInt(prompt("Nhập vào số nguyên n:"));
  while (n < 0 || !Number.isInteger(n)) {
    n = parseInt(prompt("Nhập cho đúng 1 số nguyên n k thì đừng có trách thằng lày:"));
  }

  let gt = 1;
  for (i = 1; i <= n; i++) {
    gt *= i;
  }
  return console.log("Kết quả " + n + "! = " + gt);
}

tinhGiaiThua();
*/

// Bài tập JS 23: (PTB2 cách bình thường chữa ở bài 16.7)
// Sử dụng function Viết chương trình giải phương trình bậc 2 :
// ax^2 + bx + c=0

function giaiPhuongTrinhBac2() {
  let a = parseInt(prompt("Nhập số a:"));
  let b = parseInt(prompt("Nhập số b:"));
  let c = parseInt(prompt("Nhập số c:"));

  let delta = b * b - 4 * a * c;

  if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Pt có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    x1 = -b / (2 * a);
    console.log(`Pt có 2 nghiệm kép x1 = x2 = ${x1}`);
  } else {
    console.log("Pt vô nghiệm");
  }
}
giaiPhuongTrinhBac2();
