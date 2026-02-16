const balloonImg = "https://i.imgur.com/6XH6Q1F.png"; // ảnh bóng

function createBalloon(side) {
  const balloon = document.createElement("img");
  balloon.src = balloonImg;
  balloon.className = "balloon";

  // Vị trí ngang ngẫu nhiên nhưng KHÔNG CHẠM TIM
  balloon.style.left = Math.random() * 70 + "px";

  // Thời gian bay
  const duration = 6 + Math.random() * 5;
  balloon.style.animationDuration = duration + "s";

  side.appendChild(balloon);

  // Xóa sau khi bay xong
  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);
}

// Tạo bóng liên tục 2 bên
setInterval(() => {
  createBalloon(document.querySelector(".left"));
  createBalloon(document.querySelector(".right"));
}, 1200);
