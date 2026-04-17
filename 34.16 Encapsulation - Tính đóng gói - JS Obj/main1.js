//34.16 - oop buoi 16 Encapsulation
/*
// Public fields : Trường công khai, trường công cộng
// Private fields : Trường riêng tư
// Public method : Phương thức công khai
// Private method: Phương thức riêng tư
*/

// Thêm dấu gạch dưới: Private fields : Trường riêng tư theo quy ước,
// và nó vẫn có thể truy cập trực tiếp từ bên ngoài
class Wallet {
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.pin = pin;
    this.balance = 0; // Tài khoản = 0 lúc tạo thẻ
  }

  // Phương thức gửi tiền vào tk
  deposit(value) {
    this.balance += value;
  }

  // Rút tiền
  withdraw(value) {
    if (value > this.balance) {
      console.log("Số tiền trong tài khoản k đủ");
    } else {
      this.balance -= value;
      console.log("Rút tiền thành công");
    }
  }
}

// Tạo đối tượng
const wallet = new Wallet("MB bank", "1234");

console.log(wallet.balance);
// Gửi tiền
wallet.deposit(1000);
// Rút tiền
wallet.withdraw(250);
// Xem tài khoản và pin
console.log(wallet.balance);
console.log(wallet.pin);

// Bài toán là chúng ta k muốn cho phép truy cập
// trực tiếp để ktra số dư và mã pin
