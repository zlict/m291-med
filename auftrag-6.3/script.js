const canvas = document.getElementById('watch');
const context = canvas.getContext("2d");

const image = new Image();
image.src = 'cleanwatch.jpg';

const font = new FontFace('segments', 'url(7segments.ttf)');

// Zeichnen
function draw() {
  if (image.complete) {
    const dateTime = new Date();
    context.drawImage(image, 0, 0);
    context.font = "46px segments"
    context.fillStyle = "#717482";
    context.fillText(`${dateTime.getHours().toString().padStart(2, 0)}:${dateTime.getMinutes().toString().padStart(2, 0)}:${dateTime.getSeconds().toString().padStart(2, 0)}`, 410, 550);
    setTimeout(draw, 1000);
  }
}

// Zeichnen, wenn Bild oder Font geladen ist
image.addEventListener('load', draw);
font.load().then((f) => {
  document.fonts.add(f);
  draw();
});
