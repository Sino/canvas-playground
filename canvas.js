const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');
let cage = document.getElementById('cage');

const mouse = {
    x:0,
    y:0,
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// set circle details
const x = Math.ceil(Math.random() * 10);
const y = Math.ceil(Math.random() * 10);
const dx = Math.ceil(Math.random() * 0.5);
const dy = Math.ceil(Math.random() * 0.5);
const radius = 3;

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius

    this.draw = () => {
        c.drawImage(cage, this.x, this.y, this.radius, this.radius);
    }

    this.update = () => {
        if (this.x + radius > innerWidth || this.x - radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //mouse event interactivity
        if (mouse.x - this.x < 20 && mouse.x - this.x > -20 && mouse.y - this.y < 20 && mouse.y - this.y > -20) {
            if (this.radius < 100) {
                this.radius += 5;
            }
        } else {
            if (this.radius > 5) {
                this.radius -= 5;
            }
        }

        this.draw();
    }
}

let circles = [];
for (let i = 0; i < 2000; i++) {
    circles.push(new Circle(x + (Math.random() * innerWidth), y + (Math.random() * innerHeight), dx * Math.random() * 3, dy + Math.random() * 3, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (let i = 0; i < 2000; i++) { 
        circles[i].update();
    }
}

animate();