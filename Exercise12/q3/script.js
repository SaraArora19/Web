const canvas = document.getElementById("clockCanvas");
const ctx = canvas.getContext("2d");
const radius = canvas.width / 2;
ctx.translate(radius, radius);

function drawClock() {
  ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
  drawFace();
  drawNumbers();
  drawHands();
  requestAnimationFrame(drawClock);
}

function drawFace() {
  ctx.beginPath();
  ctx.arc(0, 0, radius - 10, 0, Math.PI * 2);
  ctx.fillStyle = "pink";
  ctx.fill();

  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
}

function drawNumbers() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let num = 1; num <= 12; num++) {
    let angle = ((num - 3) * Math.PI) / 6;
    let x = Math.cos(angle) * (radius - 30);
    let y = Math.sin(angle) * (radius - 30);
    ctx.fillText(num, x, y);
  }
}

function drawHands() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  drawHand((hour + minute / 60) * 30, radius * 0.5, 6, "black");
  drawHand((minute + second / 60) * 6, radius * 0.7, 4, "black");
  drawHand(second * 6, radius * 0.8, 2, "blue");
}

function drawHand(angle, length, width, color) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.moveTo(0, 0);
  ctx.lineTo(length * Math.cos((angle - 90) * (Math.PI / 180)), length * Math.sin((angle - 90) * (Math.PI / 180)));
  ctx.stroke();
}

drawClock();
