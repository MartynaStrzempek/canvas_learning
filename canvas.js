const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = 'deeppink';
c.fillRect(50 ,100, 100, 100);
c.fillStyle = 'blue';
c.fillRect(400 ,100, 100, 100);
c.fillStyle = 'green';
c.fillRect(300 ,300, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 10);
c.lineTo(400, 300);
c.strokeStyle = 'pink';
c.stroke();

// Arc / Circle
c.beginPath();
c.arc(200, 250, 50, 0, Math.PI * 2, false);
c.stroke();

for (let i = 0; i < 50; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 50, 0, Math.PI * 2, false);
  // to do: randomize colors
  c.strokeStyle = 'yellow';
  c.stroke();
}