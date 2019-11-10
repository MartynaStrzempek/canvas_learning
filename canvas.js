const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillRect(100 ,100, 100, 100);
c.fillRect(400 ,100, 100, 100);
c.fillRect(300 ,300, 100, 100);
