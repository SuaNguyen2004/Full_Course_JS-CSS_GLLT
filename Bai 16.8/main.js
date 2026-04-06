let thang = parseInt(prompt("Nhập vào 1 tháng trong năm(1-12):"));

if (thang >= 1 && thang <= 3) {
  console.log("Thang", thang, "thuộc quý 1");
} else if (thang >= 4 && thang <= 6) {
  console.log("Thang", thang, "thuộc quý 2");
} else if (thang >= 7 && thang <= 9) {
  console.log("Thang", thang, "thuộc quý 3");
} else if (thang >= 10 && thang <= 12) {
  console.log("Thang", thang, "thuộc quý 4");
} else {
  console.log("Tháng không hợp lệ");
}
