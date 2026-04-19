// chọn tất cả các phần tử có class là panel
const panels = document.querySelectorAll(".panel");
// xuất thử biến panel để xem
console.log(panels);
// duyệt từng phần tử trong ds panels
panels.forEach((item) => {
  // xuất ra gtri item để xem
  console.log(item);
  // lắng nghe sự kiện click
  item.addEventListener("click", () => {
    // xoá class active của các panel khác
    removeActive();
    // Thêm class active cho panel đc click
    item.classList.add("active");
  });
});

function removeActive() {
  // duyệt từng phần tử trong ds panels
  panels.forEach((item) => {
    // xoá class active
    item.classList.remove("active");
  });
}
