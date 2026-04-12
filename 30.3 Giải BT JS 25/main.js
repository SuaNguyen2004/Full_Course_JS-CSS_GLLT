//30.3 - giai bai tap js 25 - kiểm tra mật khẩu hợp lệ
/*

 Bài tập js 25:
Viết chương trình kiểm tra tính hợp lệ của mật khẩu: 
  * mật khẩu hợp lệ khi có ít nhất 6 ký tự 
  * chứa ít nhất 1 chữ cái viết hoa
  * chứa ít nhất 1 chữ cái viết thường
  * chứa ít nhất 1 chữ số 
 2. cho người dùng nhập vào mật khẩu để login / so sánh, 
 nếu đúng mở của, sai quá  5 lần khoá đăng nhập, thoát chương trình    
// Ví dụ mật khẩu hợp lệ : Abc123
 */

// Tạo hàm kiểm tra tính hợp lệ của mật khẩu
function isPasswordValid(password) {
  if (password.length < 6) {
    return false;
  }

  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasDigit = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    } else if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    } else if (char >= "0" && char <= "9") {
      hasDigit = true;
    }
  }
  return hasDigit && hasLowerCase && hasUpperCase;
}

// Set mật khẩu
function setPassword() {
  let password = prompt("Mời thiết lập mật khẩu: ");

  if (isPasswordValid(password)) {
    alert("Đặt mật khẩu thành công! Mật khẩu là: " + password);
    return password;
  } else {
    alert(`Mật khẩu không hợp lệ:
    1. Có ít nhất 6 ký tự
    2. Có ít nhất 1 số
    3. Có ít nhất 1 ký tự viết hoa
    4. Có ít nhất 1 ký tự viết thường`);
    // Gọi lại hàm set mật khẩu
    setPassword();
  }
}

// Gọi hàm set pass, và gán pass vào biến nếu thành công
let passwordOK = setPassword();

// Viết chương trình đăng nhập
let countLogin = 0;
while (true) {
  let passwordLogin = prompt("Mời nhập mật khẩu đăng nhập:");
  if (passwordLogin === passwordOK) {
    alert("Đăng nhập thành công, cửa đã mở");
    break; // tự thêm
  } else {
    countLogin++;
    if (countLogin < 5) {
      alert("Bạn đã nhập sai pass, số lần thử: " + countLogin + "/5");
    } else {
      alert("Bạn đã thử 5 lần, tài khoản của bạn sẽ bị block, liên hệ admin");
      break;
    }
  }
}

// Code tự làm
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
