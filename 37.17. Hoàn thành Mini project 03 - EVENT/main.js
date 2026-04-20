// Lấy các ptu cần thao tac từ DOM
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentActive = 1;
//Khởi tạo gtri bạn đầu của bước đang hoạt động

// Lắng nghe sk cho nút next
next.addEventListener("click", () => {
  changStep(1); // tăng bước lên 1
});

// Lắng nghe sk cho nút next
prev.addEventListener("click", () => {
  changStep(-1); // giảm bước đi 1
});

function changStep(step) {
  currentActive += step; // Thay đổi giá trị currentActive

  update(); //Cập nhật lại giao diện
}

function update() {
  // duyệt qua các ptu của ds steps
  steps.forEach((step, idx) => {
    if (idx < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  // Bật hoặc tắt các nút "Prev" và "Next" dựa trên giá trị currentActive
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length;

  // Cập nhật chiều rộng của thanh tiến trình
  progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
}
