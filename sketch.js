let img;
let words = [];
let wordIndex = 0;
let birdX, birdY;

function preload() {
  img = loadImage("bird.png");

  words = loadStrings("Stray Birds.txt");
}

function setup() {
  createCanvas(1600, 900);
  
  img.resize(1600, 900);
  

  let textString = words.join(" ");
  words = textString.split(" ");
  textSize(10);
  fill(255);

  // Bird1
  birdX = random(width);

  birdY = random(height);
}

function draw() {
  background(134, 176, 175);

  img.loadPixels();

  // randon loc
  birdX = random(width - img.width);  
  birdY = random(height - img.height);

  for (let y = 0; y < img.height; y += 10) {
    for (let x = 0; x < img.width; x += 10) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];

      if (r < 128) {
        // word
        text(words[wordIndex % words.length], birdX + x, birdY + y);
        wordIndex++;
      }
    }
  }

  // blink
  if (frameCount % 10 === 0) {  
    birdX = random(width - img.width);
    birdY = random(height - img.height);
  }
}
