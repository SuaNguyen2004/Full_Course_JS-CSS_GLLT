// Làm linh tinh
const steps = document.querySelectorAll(".step");

console.log(steps);

steps.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  // duyệt từng phần tử trong ds panels
  steps.forEach((item) => {
    // xoá class active
    item.classList.remove("active");
  });
}
