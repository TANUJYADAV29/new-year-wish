const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const colors = ["#ffbe0b", "#ff006e", "#8338ec", "#3a86ff"];

function startFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        life: 80,
        color
      });
    }
  }, 900);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, 3, 3);
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
  });

  particles = particles.filter(p => p.life > 0);
  requestAnimationFrame(animate);
}

animate();
