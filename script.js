let images = [];
let maxTextWidth = 700; // Maximum width for the text
let maxImageSize = 700; // Maximum width and height for the image

let img;
let captionText = '';
let currentIndex;

const imageFilenames = [
    "img (1).jpg",
    "img (1).PNG",
    "img (10).png",
    "img (11).png",
    "img (12).png",
    "img (13).png",
    "img (14).png",
    "img (15).png",
    "img (16).png",
    "img (17).png",
    "img (18).png",
    "img (2).jpg",
    "img (2).PNG",
    "img (3).PNG",
    "img (4).PNG",
    "img (5).PNG",
    "img (6).PNG",
    "img (7).PNG",
    "img (8).png",
    "img (9).png"
  ];

const captions = [
    "Demure",
    "Goofy",
    "i guess we doin",
    "Do You Like My Sword",
    "This is my life",
    "Mother",
    "My Dream",
    "Howdy",
    "Derp",
    "Just Lost My Dawg",
    "You Serve",
    "This is Ohio",
    "I hate it here",
    "Thas Tough",
    "This is a nightmare",
    "No Cap",
    "Weird Flex But Okay",
    "We Stan",
    "Poyo",
    "Theyre in the walls",
    "Get out of my head",
    "Rats!",
    "Ratatouille",
    "No Maidens?",
    "?!",
    "Gold Medal Winner",
    "100%",
    "The Guy From Fortnite?",
    "This is the ideal male body",
    "I'm so skibidi",
    "Forever Alone",
    "Friendship is Magic",
    "*internal screaming*",
    "wat?",
    "Bro Do You Even Lift?",
    "Haters Gonna Hate",
    "This Is Fine",
    "10/10",
    "Aww Yea",
    "don't talk to me or my son ever again",
    "I Only Cried For 20 Minutes",
    "MOAR!",
    "No, This Is Patrick",
    "Who Put You on the Planet?",
    "Maximum Overdrive",
    "Thanks, I Hate It",
    "Aight Imma Head Out",
    "when u hear a noise at night",
    "HELP ME",
    "mom come pick me up",
    "the legend",
    "come at me bro",
    "he chonk",
    "poor lil guy",
    "Breakdancing Champ"




];

function preload() {
  // Load all images from the filenames array
  for (let i = 0; i < imageFilenames.length; i++) {
    images.push(loadImage('images/' + imageFilenames[i]));
  }


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  maxTextWidth = width / 2;
  maxImageSize = width / 2;
  if(height < maxImageSize){
    maxTextWidth = height * 0.9;
    maxImageSize = height * 0.9;
  }
  background(255);
  
  makeRandomShirt(0)
  makeRandomShirt(maxImageSize)
  let leftButton = createButton('VOTE LEFT');
  leftButton.position(maxImageSize *0.46, maxImageSize*0.975);
  leftButton.mousePressed(voteLeft);
  let rightButton = createButton('VOTE RIGHT');
  rightButton.position(maxImageSize *1.46, maxImageSize*0.975);
  rightButton.mousePressed(voteRight);
  noLoop();
}

function voteRight(){
    makeRandomShirt(0)
}
function voteLeft(){
    makeRandomShirt(maxImageSize)
}

function makeRandomShirt(topLeftCorner){
    // Randomly select an image and a caption
  currentIndex = int(random(images.length));
  img = images[currentIndex];
  captionText = random(captions);
  
  // Display the image and caption
  imageMode(CENTER);
  // Resize the image to fit within the 700x700 area
  let resizedImg = resizeImage(img, maxImageSize, maxImageSize);
  
  // Display the resized image
  imageMode(CENTER);
  image(resizedImg, topLeftCorner + maxImageSize / 2, maxImageSize/2);
  
  // Adjust text size to fit within the canvas
  textAlign(CENTER, CENTER);
  let textSizeValue = calculateTextSize(captionText, maxTextWidth);
  textSize(textSizeValue);
  textStyle(BOLD);
  stroke(255);
  strokeWeight(8);
  fill(255);
  text(captionText, topLeftCorner + maxImageSize / 2, maxImageSize*0.75);
  textSize(textSizeValue);
  fill(0);
  text(captionText, topLeftCorner + maxImageSize / 2, maxImageSize*0.75 + 1);
}

function calculateTextSize(text, maxWidth) {
    let size = 100; // Start with a default size
    textSize(size);
    
    // Increase or decrease text size until it fits within maxWidth
    while (textWidth(text) > maxWidth*0.55) {
      size *= 0.9; // Decrease font size
      textSize(size);
    }
    
    return size;
  }

  function resizeImage(img, maxWidth, maxHeight) {
    let imgWidth = img.width;
    let imgHeight = img.height;
    
    let newWidth = maxWidth;
    let newHeight = maxHeight;
  
    // Calculate new dimensions to maintain aspect ratio
    if (imgWidth > imgHeight) {
      newHeight = Math.floor((maxWidth / imgWidth) * imgHeight);
      newWidth = maxWidth;
    } else {
      newWidth = Math.floor((maxHeight / imgHeight) * imgWidth);
      newHeight = maxHeight;
    }
    
    // Ensure the new dimensions are within the max size
    newWidth = constrain(newWidth, 0, maxWidth);
    newHeight = constrain(newHeight, 0, maxHeight);
    
    // Create a new image with the calculated dimensions
    let resizedImg = createImage(newWidth, newHeight);
    resizedImg.copy(img, 0, 0, imgWidth, imgHeight, 0, 0, newWidth, newHeight);
    return resizedImg;
  }