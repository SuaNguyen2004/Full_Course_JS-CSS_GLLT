let DTB = parseFloat(prompt("Nhập vào điểm trung bình của bạn"));

let xepLoai =
  DTB >= 8
    ? console.log("Giỏi")
    : DTB < 8 && DTB >= 6.5
      ? console.log("Khá")
      : DTB < 6.5 && DTB >= 5
        ? console.log("Trung bình")
        : DTB < 5 && DTB >= 0
          ? console.log("Yếu")
          : console.log("Điểm sai");
