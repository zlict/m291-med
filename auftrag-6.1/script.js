const canvas = document.getElementById('smiley');
const context = canvas.getContext("2d");

// Kopf zeichnen
context.beginPath();
context.arc(95, 85, 40, 0, 2 * Math.PI);
context.fillStyle = "yellow";
context.fill();
context.closePath();

// Augen zeichnen
context.beginPath();
context.arc(85, 75, 5, 0, 2 * Math.PI);
context.arc(105, 75, 5, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();

// Mund zeichnen
context.beginPath();
context.arc(95, 90, 20, 0, Math.PI, false);
context.stroke();
context.closePath();
