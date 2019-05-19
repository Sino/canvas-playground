const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

//takes a context and sets outline and fill color
function setColor(context, color) {
    context.strokeStyle = color;
    context.fillStyle = color;
}

// set circle details
let x = 200;
let dx = 5;
let dy = 5;
let y = 200;
let radius = 30;

function animate() {
    if (x + radius >= innerWidth || x - radius <= 0) {
        dx = -dx;
    }
    if (y + radius >= innerHeight || y - radius <= 0) {
        dy = -dy;
    }
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(x + dx, y + dy, radius, 0, Math.PI * 2, false);
    setColor(c, 'turquoise');
    c.fill();
    c.stroke();
    x += dx;
    y += dy;
}

animate();