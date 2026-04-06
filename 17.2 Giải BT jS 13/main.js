//17.2 Giải bài tập js 13 - Toán tử 3 ngôi
/*
Bài tập 13: Viết chương trình nhập vào điểm trung bình,
va xuat ket qua xep loai cua hoc sinh theo tieu chuan sau: ( dung toan tu 3 ngo
Giỏi: Nếu Điểm >= 8
Khá: Nếu 8 > Điểm >= 6.5
Trung bình: Nếu 6.5 > Điểm >= 5
Yếu: Nếu Điểm < 5
*/
let dtb = parseFloat(prompt("Mời cụ nhập điểm: "));

let xepLoai = dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung bình" : "Yếu";
console.log(`Xếp loại của học sinh là: ${xepLoai}`);
