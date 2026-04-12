//30.5 - giai bai tap js 27 - dem tu toi trong chuoi
/*
Bài tập js 27:
      const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
      Đếm từ tôi trong string a trên ? 
 */
const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
const targetWord = "tôi";
let count = 0;

for (let i = 0; i < a.length; i++) {
  if (a.slice(i, i + targetWord.length) === targetWord) {
    count++;
  }
}

alert(`Số lần xuất hiện của từ ${targetWord} trong chuỗi là: ${count}`);

// Code tự làm
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
// Code của tôi khi mà bị viết thêm chữ tôi dính liền vào 1 chữ nào
// hoặc bỏ dấu cách đi là sẽ k đếm được