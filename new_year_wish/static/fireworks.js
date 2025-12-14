const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];

function startFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 7,
        vy: (Math.random() - 0.5) * 7,
        life: 90,
        color
      });
    }
  }, 700);
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

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
