//30.6 - giai bai tap js 28 - tach so va chuoi
/*
  Bài tập js 28:
 Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi : 	
 ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123   
 */

function separate(inputString) {
  let letters = "";
  let numbers = "";

  for (i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    if (isNaN(char)) {
      // Nếu ký tự char không phải số, thêm vào chuỗi letters
      letters += char;
    } else {
      // Nối ký tự char vào chuỗi numbers
      numbers += char;
    }
  }
  return { letters, numbers };
}

let inputString = prompt("Mời nhập chuỗi:");
let result = separate(inputString);

alert(`
  Chuỗi chữ: ${result.letters}
  Chuỗi số: ${result.numbers} 
  `);

// Code tự làm
/*
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
*/
