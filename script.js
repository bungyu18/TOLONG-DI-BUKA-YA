const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveMessage = document.getElementById("loveMessage");

// Tombol YA
yesBtn.addEventListener("click", () => {
  loveMessage.classList.remove("hidden");
  startHearts();
});

// Tombol TIDAK lari
noBtn.addEventListener("mousemove", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Hati jatuh
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = [];

function startHearts() {
  hearts = [];
  for(let i=0; i<50; i++){
    hearts.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      s: Math.random()*3+1
    });
  }
  draw();
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255,0,100,0.9)";
  hearts.forEach(h=>{
    ctx.font = `${h.s*12}px serif`;
    ctx.fillText("💖", h.x, h.y);
    h.y += h.s;
    if(h.y>canvas.height) h.y=0;
  });
  requestAnimationFrame(draw);
}
