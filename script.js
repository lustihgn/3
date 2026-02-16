const balloonImg = "https://i.imgur.com/6XH6Q1F.png";

function createBalloon(side) {
  const balloon = document.createElement("img");
  balloon.src = balloonImg;
  balloon.className = "balloon";

  // KHÔNG SÁT RÌA
  const padding = 40;
  const maxWidth = side.clientWidth - 140;
  balloon.style.left = padding + Math.random() * maxWidth + "px";

  // BAY CHẬM HƠN
  const duration = 10 + Math.random() * 4;
  balloon.style.animationDuration = duration + "s";

  side.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);
}

/* GIẢM TẦN SUẤT */
setInterval(() => {
  createBalloon(document.querySelector(".left"));
  createBalloon(document.querySelector(".right"));
}, 3500);
