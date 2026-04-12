// Bài tập js 24:
// Nhập vào 1 chuỗi từ bàn phím,
// 1. đếm xem có bao nhiêu ký tự thường
// 2. bao nhiêu in hoa
// 3. bao nhiêu số
// 4. bao nhiêu space

// Gợi ý:
// nhập prompt xong cho chạy for i=0; i<prompt.length; i++
// let char = "a";
// if (char >= "a" && char <= "z") {
//   console.log(char + " là ký tự viết thường");
// } else if (char >= "A" && char <= "Z") {
//   console.log(char + " là ký tự viết hoa");
// } else if (char >= "0" && char <= "9") {
//   console.log(char + " là ký tự viết số");
// } else if (char === " ") {
//   console.log(char + " là ký tự space");
// }

/*
let str = prompt("Nhập vào 1 chuỗi bất kỳ");
// console.log(str[1]);

let kyTuThuong = 0;
let kyTuInHoa = 0;
let kyTuSo = 0;
let space = 0;

for (i = 0; i < str.length; i++) {
  let char = str[i];
  if (char >= "a" && char <= "z") {
    // console.log(char + " là ký tự viết thường");
    kyTuThuong += 1;
  } else if (char >= "A" && char <= "Z") {
    // console.log(char + " là ký tự viết hoa");
    kyTuInHoa += 1;
  } else if (char >= "0" && char <= "9") {
    // console.log(char + " là ký tự viết số");
    kyTuSo += 1;
  } else if (char === " ") {
    // console.log(char + " là ký tự space");
    space += 1;
  }
}

console.log(`Case test: ${str}`);
console.log(`Số ký tự thường: ${kyTuThuong}`);
console.log(`Số ký tự in hoa: ${kyTuInHoa}`);
console.log(`Số chữ số: ${kyTuSo}`);
console.log(`Số khoảng trắng: ${space}`);
*/

// Bài tập js 25:
// a. Viết chương trình kiểm tra tính hợp lệ của mật khẩu:
// 1. mật khẩu hợp lệ khi có ít nhất 6 ký tự
// 2. chứa ít nhất 1 chữ cái viết hoa
// 3. chứa ít nhất 1 chữ cái viết thường
// 4. chứa ít nhất 1 chữ số

// b. Cho người dùng nhập vào mật khẩu để login / so sánh, nếu đúng mở
// của, sai quá 5 lần khoá đăng nhập, thoát chương trình
// Ví dụ mật khẩu hợp lệ : Abc123

/*
let pw = prompt("Mời thiết lập mật khẩu: ");
while (true) {
  let kyTuThuong = 0;
  let kyTuInHoa = 0;
  let kyTuSo = 0;

  for (i = 0; i < pw.length; i++) {
    let char = pw[i];
    if (char >= "a" && char <= "z") {
      kyTuThuong += 1;
    } else if (char >= "A" && char <= "Z") {
      kyTuInHoa += 1;
    } else if (char >= "0" && char <= "9") {
      kyTuSo += 1;
    }
  }
  console.log(`Số ký tự thường: ${kyTuThuong}`);
  console.log(`Số ký tự in hoa: ${kyTuInHoa}`);
  console.log(`Số chữ số: ${kyTuSo}`);

  if (pw.length < 6 || kyTuInHoa < 1 || kyTuThuong < 1 || kyTuSo < 1) {
    alert(`
      1. mật khẩu hợp lệ khi có ít nhất 6 ký tự
      2. chứa ít nhất 1 chữ cái viết hoa
      3. chứa ít nhất 1 chữ cái viết thường
      4. chứa ít nhất 1 chữ số
      `);
    pw = prompt("Mời thiết lập mật khẩu: ");
  } else {
    alert(`Đặt mật khẩu thành công!, mật khẩu: ${pw}`);
    break;
  }
}

let login = prompt("Mời nhập mật khẩu để đăng nhập");

let log = 0;
while (true) {
  if (login != pw) {
    log += 1;
    if (log === 5) {
      alert("Bạn đã thử 5 lần, tài khoản của bạn sẽ bị block, liên hệ admin");
      break;
    }
    alert(`Bạn nhập sai pass, số lần thử ${log}/5`);

    login = prompt("Mời nhập mật khẩu để đăng nhập");
  } else if (login === pw) {
    alert(`Đăng nhập thành công, cửa đã mở`);
    break;
  }
}
*/

// Bài tập js 26:
// Viết chương trình chuyển tin nhắn sang mật mã theo bảng :
// const a="abcdefghijklmnopqrstuvwxyz"
// const b="zxcvbnmasdfghjklqwertyuiop"

// Gợi ý:
// dùng for duyệt chuỗi nhập vào
// -> Kiểm tra vị trí index của từng ký tự ở chuỗi a
// -> Gọi vị trí index đó ở chuỗi b -> Ghép vào chuỗi

/*
Câu này khó quá chịu nhá làm mất nửa tiếng rồi chưa được cái gì

const a = "abcdefghijklmnopqrstuvwxyz";
const b = "zxcvbnmasdfghjklqwertyuiop";

let arr1 = a.split("");
// console.log(arr1);

let arr2 = b.split("");
// console.log(arr2);

let mess = prompt("Nhập tin nhắn cần mã hoá:");
let check = "";
for (i = 0; i <= mess.length; i++) {
  for (j = 0; j <= a.length; j += 0) {
    if (mess[i] !== a[j]) {
      j++;
    } else if (mess[i] === a[j]) {
      j = 0;
      check = check.concat("", mess[i]);
      console.log(check);
      break;
    }
  }
}
*/

// Bài tập js 27:
// const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
// Đếm từ tôi trong string a trên ?
// Đáp án thông báo: Số lần xuất hiện của từ "tôi" trong chuỗi là: 3

/*
const a = "tôi chăm học tôi chịu khó tôi đẹp zai";

let arr = a.split(" ");
console.log(arr);

let n = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] === "tôi") {
    n += 1;
    continue;
  }
}
console.log(`Số lần xuất hiện của chữ "tôi" trong chuỗi là: ${n}`);
*/

// Bài tập js 28:
// Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi :
// * ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123

let a = prompt("Nhập chuỗi:");

let arr = a.split("");
console.log(arr);

let chu = "";
let so = "";

for (i = 0; i < arr.length; i++) {
  if ((arr[i] >= "a" && arr[i] <= "z") || (arr[i] >= "A" && arr[i] <= "Z")) {
    chu = chu.concat("", arr[i]);
  } else if (arr[i] >= "0" && arr[i] <= "9") {
    so = so.concat("", arr[i]);
  }
}

console.log(`Chuỗi chữ: ${chu}`);
console.log(`Chuỗi số: ${so}`);
