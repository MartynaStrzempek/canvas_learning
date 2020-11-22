const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangles
// c.fillStyle = 'deeppink';
// c.fillRect(50 ,100, 100, 100);
// c.fillStyle = 'blue';
// c.fillRect(400 ,100, 100, 100);
// c.fillStyle = 'green';
// c.fillRect(300 ,300, 100, 100);

// Line
// c.beginPath();
// c.moveTo(100, 300);
// c.lineTo(400, 50);
// c.lineTo(700, 300);
// c.lineTo(100, 300);
// c.strokeStyle = 'pink';
// c.stroke();

// Arc / Circle
// for (let i = 0; i < 50; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2, false);
//   let r = Math.random() * 255;
//   let g = Math.random() * 255;
//   let b = Math.random() * 255;
//   c.strokeStyle = `rgb(${r}, ${g}, ${b})`;
//   c.stroke();
// }

// animation of the ball which bounces off the walls
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
let radius = 50;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = 'deeppink';
  c.stroke();
  c.fillStyle = 'deeppink';
  c.fill();

  if (x + radius > innerWidth || x - radius < 0) dx = -dx;
  if (y + radius > innerHeight || y - radius < 0) dy = -dy;

  x += dx;
  y += dy;
}

animate();
