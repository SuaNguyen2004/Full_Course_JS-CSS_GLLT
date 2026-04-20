const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // lấy toạ độ của button so vs vp
    const buttonRect = e.target.getBoundingClientRect();
    console.log(buttonRect);

    // lấy toạ độ chuột click so vs viewport
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);

    // tính toạ độ chuột click so vs button
    const xInside = x - buttonRect.left;
    const yInside = y - buttonRect.top;

    // thêm thẻ span để thêm class circle
    const hinhTron = document.createElement("span");
    hinhTron.classList.add("circle");
    hinhTron.style.top = yInside + "px";
    hinhTron.style.left = xInside + "px";

    this.appendChild(hinhTron);
    // Xoá hình tròn sau khi animation hoàn tất
    setTimeout(() => hinhTron.remove(), 500);
  });
});
