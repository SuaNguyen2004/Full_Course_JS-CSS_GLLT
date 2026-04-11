//27.1 var và let, hoisting trong js
// hoisting : là hiện tượng js đẩy khai báo lên đầu phạm vi hiện tại

//  Khai báo : chỉ có biến, chưa gán giá trị
//  Khởi tạo : có biến và gán giá trị

// 2. Phạm vi sử dụng (Scope):
// a. var: Có phạm vi là function-scope :
// b. let, const (ES6) : Có phạm vi là Block Scope:
// -> Nếu một biến được khai báo bằng let, const
// phạm vi của nó sẽ là phạm vi block
// -> Biến sẽ được đẩy lên đầu phạm vi BlockScope



console.log("Giá trị của biến c = " + c);
// Khởi tạo c
var c = 9; // undefined
//let c = 9; //Cannot access 'c' before initialization

// Cách js hiểu
/*
var c;
console.log("Giá trị của biến c = " + c);
// Khởi tạo c
var c = 9;
*/

/*
2. Phạm vi sử dụng (Scope):
var: Có phạm vi là function-scope
let: Có phạm vi là block-scope
*/
//var: Có phạm vi là function-scope
function exampleVar(){
  if(true){
    var y = 20; // Khởi tạo y nằm trong phạm vi scope
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong pvi function scope`);
}
exampleVar();

// JS hiểu
function exampleVar(){
  var y; // hoisting
  if(true){
    y = 20; // Khởi tạo y nằm trong phạm vi scope
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong pvi function scope`);
}
exampleVar();

//3. let,const: Có phạm vi là block-scope
function exampleLet(){
  if(true){
    let b = 40;
    console.log(`${b} trong block scope`);
  }
  // console.log(`${b} trong pvi hàm`);
}
// Gọi hàm
exampleLet();

/*
3. Re-declaration | Khai báo lại :
var: Có thể khai báo lại một biến sử dụng var mà không gây ra lỗi.
let: Không thể khai báo lại một biến sử dụng let trong cùng một phạm vi.
*/

var diemToan = 4;
// code chương trình
var diemToan = 8.5;
// let
let diemVan;
// let diemVan;