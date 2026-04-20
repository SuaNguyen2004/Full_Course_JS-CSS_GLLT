const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  // có thể nhập liệu đc luôn k cần click vào
  // tối ưu trải nghiệm ng dùng
});
