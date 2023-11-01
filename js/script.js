"use strict";
// Chức năng ẩn thông tin, và hiện thông tin cá nhân
const btnlogin = document.querySelector(".login");
const maillBox = document.querySelector(".maill-box");
const sonchir = document.querySelector(".sonchir");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Tạo 1 hàm để hiện thông tin cá nhân
const showInfo = function () {
  sonchir.classList.remove("hidden");
  maillBox.classList.add("hidden");
};

// Nhập Email và click để xem thông tin
btnlogin.addEventListener("click", function () {
  // Lấy dữ liệu từ input email
  const inputEmaill = document.getElementById("inputEmail1").value;
  // So sanh dữ liệu lấy được có phải là Email không
  if (inputEmaill.match(regex)) {
    // Nếu hợp lệ, hiển thị container chứa thông tin cá nhân
    showInfo();
  } else {
    // Nếu không hợp lệ, hiển thị lỗi
    alert("Vui lòng nhập email hợp lệ");
  }
  // console.log(inputEmaill);
});

// Chức năng View more, View less
const more = document.querySelectorAll(".view-more");
const show = document.querySelectorAll(".view-content");

// Tạo 1 vong lặp để có thể tìm tất cả thông tin về "view-more"
for (let i = 0; i < more.length; i++) {
  // Tạo sự kiện click
  more[i].addEventListener("click", function () {
    more[i].classList.toggle("view-less");
    if (more[i].classList.contains("view-less")) {
      more[i].innerHTML = "View less";
      show[i].classList.remove("hidden");
    } else {
      more[i].innerHTML = "View more";
      show[i].classList.add("hidden");
    }
  });
}
