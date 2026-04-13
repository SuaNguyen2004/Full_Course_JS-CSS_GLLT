// 31.4 setInterval in js
// B. setInterval : giúp thực hiện một function lặp đi
// lặp lại sau một khoảng thời gian cố định
// 1. Cú pháp:
// setInterval(function, milliseconds, param1, param2,.. )

// Ví dụ 1 : với với function declaration
function showNotification() {
  console.log("Bạn có xxx tin nhắn chưa đọc");
}
// setInterval(showNotification, 2000);

// Ví dụ 2 :
function updateTime() {
  let currentTime = new Date();
  console.log(currentTime);
}
// setInterval(updateTime, 1000);

let counter = 0;
// 1. function declaration
// function count() {
//   console.log(counter++);
// }

// 2. function expression
// let count = function () {
//   console.log(counter++);
// };

// 3. arrow function
// let count = () => {
//   console.log(counter++);
// };

// setInterval(count, 1000);

// 4. huỷ lặp
let count = () => {
  console.log(counter++);
  if (counter === 5) {
    // step 2: Dừng lặp dùng clearInterval
    clearInterval(stopInterval);
  }
};

// step 1: Gán biến để nhận giá trị trả về
let stopInterval = setInterval(count, 1000);

// Bai tap js 29:
// Viết chương trình nhập vào năm sinh và in ra số tuổi,
// Kiểm tra điều kiện dữ liệu năm sinh nhập vào phải là số nguyên, phải lớn hơn 0

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

// Bài tập js 30:
// Viết chương trình đếm ngược thời gian theo từng giây(countdown)
// Ví dụ thời gian làm bài là 45 phút nếu chạy về 0 thì thông báo hết thời gian

// Khó quá chưa tư duy được
/*
let prefix = m < 10 ? "0" : "";
let time = prompt("Mời nhập thời gian làm bài");

for(i = time; i >= 0; i--){
  for(j = 59; j >= 0; j--){


    console.log(`${i}:${j}`)
  }
}
*/

// Bài tập js 31:
// Viết chương trình có tên timeSince, thông báo người dùng offline x phút ...
// ví dụ: bạn đang chat với bạn A, sau đó bạn A offline
// > Yêu cầu: update hiển thị thời gian A offline 'x giây trước' 'x phút trước', 'x ngày
// trước', 'x tháng trước', 'x năm trước'

