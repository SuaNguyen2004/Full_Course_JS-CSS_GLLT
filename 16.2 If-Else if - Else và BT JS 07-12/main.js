// // bài 16.2: if - else if - else:

// /*
// Nhập vào điểm TB, in ra xếp loại của học sinh
// 	Giỏi: dtb <= 10 và dtb >=8
// 	Khá : 8>dtb>=6.5
// 	TB : 6.5>dtb>=5
// 	Yếu: 0<= dtb <5
// */

// let dtb = Number(prompt("Nhập điểm: "));

// // kiểm tra điểm
// if (dtb <= 10 && dtb >= 8) {
//   console.log("Giỏi");
// } else if (dtb < 8 && dtb >= 6.5) {
//   console.log("Khá");
// } else if (dtb < 6.5 && dtb >= 5) {
//   console.log("TB");
// } else if (dtb < 5 && dtb >= 0) {
//   console.log("Yếu hết");
// } else {
//   console.log("Bạn có vấn đề về mắt à!");
// }




// Bài tập 07: Tìm x, y khi biết tổng và hiệu của chúng
// case test : Tong = 14 ,hieu=4=> x=9, y=5
// case 2 : Tong = 8 hieu=5=>x=6.5, y=1.5
// Gợi ý:
// x + y = 14
// x - y = 4

// let tong = Number(prompt("Nhập tổng"));
// let hieu = Number(prompt("Nhập hiệu"));

// let x = (tong + hieu) / 2;
// let y = (tong - hieu) / 2;

// console.log(tong);
// console.log(hieu);
// console.log(x);
// console.log(y);




// Bài tập 08: Viết chương trình nhập vào chiều cao, cân nặng, tính BMI
// và xuất ra thông báo
// BMI<15: Thân hình quá gầy
// BMI>=15 and BMI<16: Thân hình gầy
// BMI>=16 and BMI<18.5: Thân hình hơi gầy
// BMI>=18.5 and BMI<25: Thân hình bình thường
// BMI>=25 and BMI < 30: Thân hình hơi béo
// BMI >=30 and BMI<35:Thân hình béo
// BMI >=35:Thân hình quá béo
// Gợi ý cách tính : BMI=canNang/(chieuCao ^2)

// let chieuCao = Number(prompt("Nhập chiều cao của bạn (m): "));
// let canNang = Number(prompt("Nhập cân nặng của bạn(kg): "));

// let BMI = canNang / (chieuCao * chieuCao);
// console.log("BMI của bạn là :" + BMI);

// if (BMI < 15) {
//   console.log("Thân hình bạn quá gay");
// } else if (BMI >= 15 && BMI < 16) {
//   console.log("Thân hình gay");
// } else if (BMI >= 16 && BMI < 18.5) {
//   console.log("Thân hình hơi gay");
// } else if (BMI >= 18.5 && BMI < 25) {
//   console.log("Thân hình bình thường");
// } else if (BMI >= 25 && BMI < 30) {
//   console.log("Thân hình hơi chuppy");
// } else if (BMI >= 30 && BMI < 35) {
//   console.log("Thân hình chuppy");
// } else if (BMI >= 35) {
//   console.log("Thân hình quá chuppy");
// } else {
//   console.log("Số liệu trên giời không tính được");
// }




// Bài tập 09: Viết chương trình nhập vào 1 năm dương lịch, kiểm tra
// năm đó có phải năm nhuận hay không.
// Gợi ý : Năm nhuận là năm
// (chia hết cho 4, và không chia hết cho 100) hoặc ( chia hết cho 400)
// =>((nam %4 === 0) && (nam %100 !== 0)) | | ( nam %400 === 0)

// Case test :
// Năm nhuận : 2004, 2008, 2012, 2016, 2020, 2024
// Năm không nhuận : 1900, 2005

// let year = Number(prompt("Nhập vào 1 năm dương lịch"));
// console.log("Bạn đã nhập năm " + year);

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Năm " + year + " là năm nhuận");
// } else {
//   console.log("Năm " + year + " là năm không nhuận");
// }




// Bài tập 10: Viết chương trình cho người dùng nhập vào 1 tháng bất kỳ
// từ 1 - 12 => Cho biết tháng đó có bao nhiêu ngày ?
// Gợi ý :
// Tháng 1,3,5,7,8,10,12 có 31 ngày
// Tháng 4,6,9,11 có 30 ngày
// Nếu tháng 2 thì yêu cầu nhập thêm năm:
// + nếu năm nhuận thì tháng 2 có 29 ngày
// + năm không nhuận thì tháng 2 có 28 ngày

// let thang = Number(prompt("Nhập tháng từ (1 - 12)"));
// let nam = Number(prompt("Nhập năm"));

// if (
//   thang === 1 ||
//   thang === 3 ||
//   thang === 5 ||
//   thang === 7 ||
//   thang === 8 ||
//   thang === 10 ||
//   thang === 12
// ) {
//   console.log("Tháng " + thang + " có 31 ngày");
// } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
//   console.log("Tháng " + thang + " có 30 ngày");
// } else if (thang === 2) {
//   if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
//     console.log("Tháng " + thang + " có 29 ngày ");
//   } else {
//     console.log("Tháng " + thang + " có 28 ngày ");
//   }
// } else {
//   console.log("Bạn nhập lại đi");
// }




// Bài tập 11:
// Viết chương trình giải phương trình bậc 2 : ax^2 + bx + c=0
// ax^2+bx+c=0
// A=b^2-4ac
// 1. case1 : a=1, b=2, c = -3
// =>Pt có 2 nghiệm x1=1 x2 = -3

// 2. case2 : a=1, b=2, c=1
// =>Pt có nghiệm kép x1=x2 = -1

// 3. case3 : a=1, b=1,c=1
// => Pt vô nghiệm

// let a = parseFloat(prompt("Nhập số a"));
// let b = parseFloat(prompt("Nhập số b"));
// let c = parseFloat(prompt("Nhập số c"));

// console.log("Phương trình bạn đã nhập có dạng " + a + "x^2 + " + b + "x + " + c + "=0");

// let delta = b * b - 4 * a * c;
// console.log("delta = " + delta);

// if (delta === 0) {
//   console.log("Phương trình có nghiệm kép x1 = x2 = " + (-b / 2) * a);
// } else if (delta > 0) {
//   console.log(
//     "Phương trình có 2 nghiệm phân biệt x1 = " +
//       ((-b + Math.sqrt(delta)) / 2) * a +
//       " và x2 = " +
//       ((-b - Math.sqrt(delta)) / 2) * a
//   );
// } else {
//   console.log("Phương trình vô nghiệm");
// }




/*
Bài tập 12: Viết chương trình nhập vào tháng trong năm, cho biết
tháng đó thuộc quý mấy
Gợi ý :
1 năm có 4 quý, mỗi quý 3 tháng :
+ Quý 1 : tháng 1,2,3
+ Quý 2 : tháng 4,5,6
+ Quý 3 : tháng 7,8,9
+ Quý 4 : tháng 10,11,12
*/

let month = parseInt(prompt("Nhập tháng (1-12) "));

if (!isNaN(month) && month >= 1 && month <= 12) {
  if (month >= 1 && month <= 3) {
    console.log(`Tháng ${month} là Quý 1`);
  } else if (month >= 4 && month <= 6) {
    console.log(`Tháng ${month} là Quý 2`);
  } else if (month >= 7 && month <= 9) {
    console.log(`Tháng ${month} là Quý 3`);
  } else {
    console.log(`Tháng ${month} là Quý 4`);
  }
} else {
  console.log("Vui lòng nhập lại từ 1-12");
}
