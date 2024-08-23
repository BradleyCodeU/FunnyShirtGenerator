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
    "img (9).png",
    "seventhPeriod (1).jpg",
    "seventhPeriod (1).PNG",
    "seventhPeriod (10).PNG",
    "seventhPeriod (11).png",
    "seventhPeriod (12).png",
    "seventhPeriod (13).png",
    "seventhPeriod (14).png",
    "seventhPeriod (15).png",
    "seventhPeriod (16).png",
    "seventhPeriod (17).png",
    "seventhPeriod (18).png",
    "seventhPeriod (19).png",
    "seventhPeriod (2).jpg",
    "seventhPeriod (2).PNG",
    "seventhPeriod (20).png",
    "seventhPeriod (21).png",
    "seventhPeriod (3).PNG",
    "seventhPeriod (4).PNG",
    "seventhPeriod (5).PNG",
    "seventhPeriod (6).PNG",
    "seventhPeriod (7).PNG",
    "seventhPeriod (8).PNG",
    "seventhPeriod (9).PNG",
    "eighth (1).jpg",
    "eighth (1).PNG",
    "eighth (10).png",
    "eighth (2).jpg",
    "eighth (2).PNG",
    "eighth (3).jpg",
    "eighth (3).PNG",
    "eighth (4).PNG",
    "eighth (5).PNG",
    "eighth (6).png",
    "eighth (7).png",
    "eighth (8).png",
    "eighth (9).png",
    "secondPeriod1.png",
    "secondPeriod2.png",
    "secondPeriod3.png",
    "secondPeriod4.png",
    "secondPeriod5.png",
    "secondPeriod6.png",
    "secondPeriod7.png",
    "secondPeriod8.png",
    "secondPeriod9.png",
    "secondPeriod10.png",
    "secondPeriod11.png",
    "secondPeriod12.png",
    "secondPeriod13.png",
    "secondPeriod14.png",
    "secondPeriod15.png",
    "secondPeriod16.png",
    "secondPeriod17.png"
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
    "Breakdancing Champ",
    "Not Again!",
    ":3",
    "UwU",
    "*jazz music stops*",
    "I want to speak to your manager!",
    "I'm a cutie",
    "Shake it. Don't break it.",
    "I'm a box",
    "LITERALLY ME",
    "Take me tubing!",
    "GOTTA LOVE BAKED BEANS",
    "ANYONE NEED BUTTER?",
    "ARE YOU GOING TO STUDY HALL?",
    "This is my weekend look",
    "It was inevitable",
    "Please help me",
    "BYEEEEEE",
    "Time is irrelevant",
    "Catch me if you can",
    "Fallin for u",
    "TEETH",
    "Family Reunion",
    "See ya tomorrow",
    "THIS IS FINE",
    "*SUPER*STAR*",
    "Why though?",
    "Not today, Satan",
    "Yeet",
    "Bruh Moment",
    "Big Mood",
    "You had one job",
    "Cursed Image",
    "Let that sink in",
    "Unexpected Item in Bagging Area",
    "Sending Good Vibes",
    "Can't even",
    "I Can't Believe You've Done This",
    "Why am I like this?",
    "Delete This",
    "I'm in danger",
    "Mood",
    "Here we go again",
    "Oh no baby, what is you doing?",
    "Nailed it",
    "When you realize...",
    "Wait, what?",
    "Why are we here, just to suffer?",
    "That's a lotta damage",
    "Y'all Got Any More Of That?",
    "My disappointment is immeasurable",
    "Nobody:...",
    "This is where the fun begins",
    "That's Hot",
    "Ight, I'mma head out",
    "Welp",
    "Yeeeee Haw!",
    "Noice",
    "I Can't Unsee This",
    "I'm baby",
    "When will you learn?",
    "He Protec, but he also Attac",
    "One does not simply...",
    "It's over 9000!",
    "Cringe",
    "Shook",
    "Vibe Check",
    "Big Yikes",
    "Bet",
    "OK Boomer",
    "Ain't nobody got time for that",
    "Guess I'll die",
    "Send it!",
    "It's a trap!",
    "This ain't it, chief",
    "Can't stop, won't stop",
    "Get rekt",
    "Zero chill",
    "Me, an intellectual",
    "Big brain time",
    "Oh lawd he comin'",
    "It do be like that sometimes",
    "Yikes forever",
    "Weird champ",
    "Sorry, not sorry",
    "Oof",
    "I see what you did there",
    "Plot twist",
    "Just vibin'",
    "High key",
    "Low key",
    "You love to see it",
    "Big oof",
    "You're doing amazing, sweetie",
    "Straight up",
    "Whole vibe",
    "Say what?",
    "Issa vibe",
    "I'm shooketh",
    "Flexin on em",
    "Woke up and chose violence",
    "Catch these hands",
    "Spillin' the tea",
    "Vibing in the chat",
    "Clownin",
    "Major key",
    "Bruh",
    "Don't @ me",
    "No chill",
    "This is sus",
    "SUS",
    "Nah fam",
    "Not like this",
    "Can't unsee"
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
  
  if(random() < 0.25){
    captionText = captionText.toUpperCase(); // ALL CAPS
  } 
  if(random() < 0.25){
    captionText = captionText.toLowerCase(); 
  } 
  if(random() < 0.25){
    captionText = toMockingText(captionText);
  }
  
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
  textStyle(BOLD);
  stroke(255);
  strokeWeight(8);
  textSize(textSizeValue);
  fill(0);
  text(captionText, topLeftCorner + maxImageSize / 2, maxImageSize*0.75);
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

  function toMockingText(text){
    let result = "";
    let letterCount = 0;
    for(let i=0; i<text.length; i++){
      if(letterCount%2==0){
        result += text.charAt(i).toLowerCase();
      } else {
        result += text.charAt(i).toUpperCase();
      }
      if(text.charAt(i) != " "){
        letterCount++;
      }
    }
    return result;
  }