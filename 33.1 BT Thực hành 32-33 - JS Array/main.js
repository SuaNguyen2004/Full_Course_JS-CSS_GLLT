// Bài tập js 32:
// Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử
// là số nguyên có n phần tử, n do người dùng
// nhập từ bàn phím

/*
function checkN() {
  let n = Number(
    prompt(
      `Mời nhập vào số phần tử của mảng
    Lưu ý: n phải là số nguyên > 0:
    `,
    ),
  );
  while (n <= 0 || isNaN(n) || n % 1 !== 0) {
    n = Number(
      prompt(
        `Mời nhập vào số phần tử của mảng
    Lưu ý: n phải là số nguyên > 0:
    `,
      ),
    );
  }

  let chuoi = [];
  for (let i = 0; i < n; i++) {
    chuoi[i] = prompt(`Mời nhập vào phần tử thứ: ${i + 1}`);
    console.log(i);
    // console.log(chuoi[i]);
  }
  return console.log(chuoi);
}

checkN();
*/

// Bài tập js 33:
// 1. Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số
// nguyên, có n phần tử ngẫu
// nhiên, n do người dùng nhập từ bàn phím
// 2. Xuất các giá trị trong mảng
// 3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
// 4. Sắp xếp mảng tăng dần
// 5. Tính tổng các phần tử trong mảng
// 6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong
// mảng hay không, nếu có
// xuất ra vị trí index của số đó trong mảng

/*
function checkN() {
  let n = Number(prompt(`Nhập số phần tử mảng: `));
  while (n <= 0 || isNaN(n) || n % 1 !== 0) {
    n = Number(prompt(`Nhập số phần tử mảng: `));
  }

  let chuoi = [];
  for (let i = 0; i < n; i++) {
    let randomValue = parseInt(Math.random() * 99) ;
    chuoi[i] = randomValue;
    console.log(chuoi[i]);
  }

  console.log("=== Mảng ban đầu ===");
  console.log(chuoi);
  console.log(`Mảng: ${chuoi.join(", ")}`);

  console.log("=== Mảng sau khi đảo ngược ===");
  let slice1 = chuoi.slice();
  let daoChuoi = slice1.reverse();
  console.log(daoChuoi);

  console.log("=== Mảng sau khi sắp xếp tăng dần ===");
  // Sx tăng dần
  let sortedChuoi = slice1.sort((a, b) => a - b);
  console.log(sortedChuoi);
  console.log(chuoi);

  console.log("=== Tổng các phần tử trong mảng ===");
  let tong = 0;
  for (i = 0; i < chuoi.length; i++) {
    tong += chuoi[i];
  }
  console.log(`Tổng: ${tong}`);

  let randomNumber = Number(prompt("Nhập số để kiểm tra trong mảng"));
  let indexElement = chuoi.indexOf(randomNumber);
  // console.log(indexElement);
  if (indexElement >= 0) {
    console.log(`Số ${randomNumber} xuất hiện tại vị trí index: ${indexElement}`);
  } else {
    console.log(`Không có số ${randomNumber} trong mảng`);
  }
}

checkN();
*/