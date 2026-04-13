//Bài tập js 29: Viết chương trình nhập vào năm sinh và in ra số tuổi,
//kiểm tra điều kiện dữ liệu năm sinh nhập vào phải là số nguyên, phải lớn hơn 0
function calculateAge(inputYear) {
  // Ép kiểu dữ liệu truyền vào sang kiểu Number
  let yearOfBirth = Number(inputYear);
  console.log(yearOfBirth);
  // Kiểm tra xem năm sinh có phải là số nguyên, và lớn hơn 0 ?
  console.log(!Number.isInteger(yearOfBirth));
  console.log(yearOfBirth <= 0);
  if (!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
    alert("Năm sinh không hợp lệ. Năm sinh là số nguyên lớn hơn 0");
    return;
  }
  // Lấy năm hiện tại
  let currentYear = new Date().getFullYear();
  // Tính tuổi
  let age = currentYear - yearOfBirth;
  alert(`Tuổi của bạn là ${age} tuổi`);
}

// Nhập năm sinh từ người dùng
let inputYear = prompt("Nhập năm sinh của bạn: ");
// Gọi hàm tính tuổi
calculateAge(inputYear);

// Code tự làm
/*
let currentYear = new Date().getFullYear(); // 2026

function kiemTraTuoi() {
  let namSinh = prompt("Nhập năm sinh của bạn: ");

  if (namSinh > 0 && !isNaN(namSinh) && namSinh % 1 === 0) {
    alert(`Tuổi của bạn là : ${currentYear - namSinh} tuổi`);
  } else {
    alert(`Năm sinh không hợp lệ. Năm sinh là số nguyên lớn hơn 0`);
    kiemTraTuoi();
  }
}

kiemTraTuoi();
*/
