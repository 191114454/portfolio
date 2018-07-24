const canvas = document.querySelector("canvas");
const pen = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circle = new Circle(true);
let enemies = [];
for(let i=0; i<20; i++) {
    enemies[i] = new Circle(false, circle);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        circle.velX = Math.max(circle.velX - 0.5, -2);
    }
    if (event.key === 'w') {
        circle.velY = Math.max(circle.velY - 0.5, -2);
    }
    if (event.key === 'd') {
        circle.velX = Math.min(circle.velX + 0.5, 2);
    }
    if (event.key === 's') {
        circle.velY = Math.min(circle.velY + 0.5, 2);
    }
    if (event.key === 'f') {
        circle.velX = circle.velY = 0;
    }
});

setInterval(function () {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    circle.draw();
    circle.move();

    for(let i=0; i<20; i++) {
        if (enemies[i].isDead) continue;
        enemies[i].draw();
        enemies[i].move();
        if (enemies[i].collidedWith(circle)) {
            enemies[i].isDead = true;
            circle.radius++;
        }
    }
}, 1000 / 30);