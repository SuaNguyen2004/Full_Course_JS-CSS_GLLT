//34.13 - javascript inheritance es6
// Định nghĩa lớp cơ sở School
class School {
  constructor(id, name, birthYear) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }

  // Phương thức của lớp school;
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

// Lớp Student kế thừa từ lớp School  ( có thêm thuộc tính và phương thức riêng)
class Student extends School {
  constructor(id, name, birthYear, major) {
    super(id, name, birthYear);
    this.major = major;
  }

  // Phương thức của lớp student
  study() {
    console.log(`${this.name} is studying ${this.major}`);
  }
}

// Tạo đối tượng của lớp school
const p1 = new School("P2004001", "jacky", 2000);
// Truy cập thuộc tính và phương thức của class School
console.log(p1.id);
console.log(p1.birthYear);
console.log(p1.calcAge(2024));

// Tạo đối tượng của sub class Student
const s1 = new Student("P2004001", "nguyen van nam", 2001, "Computer Science");
// Truy cập thuộc tính và phương thức của class School
console.log(s1.id);
console.log(s1.name);
console.log(s1.birthYear);
console.log(s1.calcAge(2024));

// Truy cập thuộc tính và phương thức của sub class Student
console.log(s1.major);
s1.study();

console.log(s1);

// BT JS 34:
class Shape {
  constructor(name) {
    this.name = name;
  }

  calculateArea() {
    return 0;
  }
}

class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const square1 = new Square("Hình vuông 1", 11);
console.log(square1.name);
console.log(square1.side);
console.log(square1.calculateArea());

const rectangle1 = new Rectangle("Hình chữ nhật 1", 6, 8);
console.log(rectangle1.name);
console.log(rectangle1.width);
console.log(rectangle1.height);
console.log(rectangle1.calculateArea());
