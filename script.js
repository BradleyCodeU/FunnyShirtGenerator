let images = [];
let captions = [];
let img;
let captionText = '';
let currentIndex;

function preload() {
  // Load your images here
  images.push(loadImage('image1.jpg'));
  images.push(loadImage('image2.jpg'));
  images.push(loadImage('image3.jpg'));

  // Add captions here
  captions.push('Caption 1');
  captions.push('Caption 2');
  captions.push('Caption 3');
}

function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Randomly select an image and a caption
  currentIndex = int(random(images.length));
  img = images[currentIndex];
  captionText = random(captions);
  
  // Display the image and caption
  imageMode(CENTER);
  image(img, width / 2, height / 2);
  
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  text(captionText, width / 2, height - 50);
}
