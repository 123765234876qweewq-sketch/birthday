const text = "С Днём Рождения Дима 🎉";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("title").innerHTML += text.charAt(i);
i++;
setTimeout(typing,100);
}
}

typing();

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for(let i=0;i<120;i++){
pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*8+2,
speed:Math.random()*3+1
});
}

function update(){
ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{
ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;
ctx.fillRect(p.x,p.y,p.size,p.size);

p.y += p.speed;

if(p.y>canvas.height){
p.y = 0;
}
});

requestAnimationFrame(update);
}

update();