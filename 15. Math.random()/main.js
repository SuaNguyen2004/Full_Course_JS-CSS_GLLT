// 15. Math.random()
// 1. Random trong [0 -> 1)
let randomValue = Math.random();
console.log(`Số ngẫu nhiên từ 0 đến sát 1 là: ${randomValue}`);

// 2. Random số lớn hơn 1
let randomValue2 = Math.random() * 10;
console.log(`Số ngẫu nhiên từ 0 đến sát 10 là: ${randomValue2}`);

// 3. Random số nguyên đến 10
let randomValue3 = parseInt(Math.random() * 10);
console.log(`Số nguyên ngẫu nhiên từ 0 đến sát 10 là: ${randomValue3}`);

// 3. Random số nguyên đến 30
let randomValue4 = parseInt(Math.random() * 30);
console.log(`Số nguyên ngẫu nhiên từ 0 đến sát 30 là: ${randomValue4}`);

// Nếu không muốn bắt đầu từ 0
let randomValue5 = parseInt(Math.random() * 21) + 10;
console.log(`Số nguyên ngẫu nhiên từ 10 đến sát 31 là: ${randomValue5}`);
