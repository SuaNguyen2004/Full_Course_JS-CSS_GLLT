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

let chieuCao = Number(prompt("Nhập chiều cao của bạn (m): "));
let canNang = Number(prompt("Nhập cân nặng của bạn(kg): "));

// let BMI = canNang / (chieuCao * chieuCao);
// let BMI = canNang / Math.pow(chieuCao, 2);
let BMI = canNang / chieuCao ** 2;

console.log("BMI của bạn là :" + BMI.toFixed(2));

if (BMI < 15) {
  console.log("Thân hình bạn quá gay");
} else if (BMI >= 15 && BMI < 16) {
  console.log("Thân hình gay");
} else if (BMI >= 16 && BMI < 18.5) {
  console.log("Thân hình hơi gay");
} else if (BMI >= 18.5 && BMI < 25) {
  console.log("Thân hình bình thường");
} else if (BMI >= 25 && BMI < 30) {
  console.log("Thân hình hơi chuppy");
} else if (BMI >= 30 && BMI < 35) {
  console.log("Thân hình chuppy");
} else {
  console.log("Thân hình quá chuppy");
}
