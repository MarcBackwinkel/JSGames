const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
console.log(ctx.canvas);
const {width: w, height: h} = canvas;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);

ctx.fillStyle = "#555";

let x, y, radius;

for (let i = 1; i < 550; i++){
    x = Math.random() * w;
    y = Math.random() * h;
    radius = Math.random() * 3;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
}

ctx.translate(w / 2, h / 2);
for (let ring = 1; ring < 28; ring++) {
  ctx.fillStyle = `hsl(${ring * 25}, 90%, 50%)`;
  for (let dots = 0; dots < ring * 6; dots++) {
    ctx.rotate((Math.PI * 2) / (ring * 6));
    ctx.beginPath();
    ctx.arc(0, ring * 15, 7, 0, Math.PI * 2, true);
    ctx.fill();
  }
}