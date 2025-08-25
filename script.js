let images = [];
let maxTextWidth = 700; // Maximum width for the text
let maxImageSize = 700; // Maximum width and height for the image

let img;
let captionText = '';
let currentIndex;

    // "img(1).jpg",
    // "img(1).PNG",
    // "img(10).png",
    // "img(11).png",
    // "img(12).png",
    // "img(13).png",
    // "img(14).png",
    // "img(15).png",
    // "img(16).png",
    // "img(17).png",
    // "img(18).png",
    // "img(2).jpg",
    // "img(2).PNG",
    // "img(3).PNG",
    // "img(4).PNG",
    // "img(5).PNG",
    // "img(6).PNG",
    // "img(7).PNG",
    // "img(8).png",
    // "img(9).png",
    // "seventhPeriod(1).jpg",
    // "seventhPeriod(1).PNG",
    // "seventhPeriod(10).PNG",
    // "seventhPeriod(11).png",
    // "seventhPeriod(12).png",
    // "seventhPeriod(13).png",
    // "seventhPeriod(14).png",
    // "seventhPeriod(15).png",
    // "seventhPeriod(16).png",
    // "seventhPeriod(17).png",
    // "seventhPeriod(18).png",
    // "seventhPeriod(19).png",
    // "seventhPeriod(2).jpg",
    // "seventhPeriod(2).PNG",
    // "seventhPeriod(20).png",
    // "seventhPeriod(21).png",
    // "seventhPeriod(3).PNG",
    // "seventhPeriod(4).PNG",
    // "seventhPeriod(5).PNG",
    // "seventhPeriod(6).PNG",
    // "seventhPeriod(7).PNG",
    // "seventhPeriod(8).PNG",
    // "seventhPeriod(9).PNG",
    // "eighth(1).jpg",
    // "eighth(1).PNG",
    // "eighth(10).png",
    // "eighth(2).jpg",
    // "eighth(2).PNG",
    // "eighth(3).jpg",
    // "eighth(3).PNG",
    // "eighth(4).PNG",
    // "eighth(5).PNG",
    // "eighth(6).png",
    // "eighth(7).png",
    // "eighth(8).png",
    // "eighth(9).png",
    // "secondPeriod1.png",
    // "secondPeriod2.png",
    // "secondPeriod3.png",
    // "secondPeriod4.png",
    // "secondPeriod5.png",
    // "secondPeriod6.png",
    // "secondPeriod7.png",
    // "secondPeriod8.png",
    // "secondPeriod9.png",
    // "secondPeriod10.png",
    // "secondPeriod11.png",
    // "secondPeriod12.png",
    // "secondPeriod13.png",
    // "secondPeriod14.png",
    // "secondPeriod15.png",
    // "secondPeriod16.png",
    // "secondPeriod17.png",

const imageFilenames = [

    "hubgdad (1).png",
    "hubgdad (2).png",
    "hubgdad (3).png",
    "hubgdad (4).png",
    "hubgdad (5).png",
    "hubgdad (6).png",
    "hubgdad (7).png",
    "hubgdad (8).png",
    "hubgdad (9).png",
    "hubgdad (10).png",
    "hubgdad (11).png",
    "hubgdad (12).png",
    "hubgdad (13).png",
    "hubgdad (1).jpg",
    "aicc (1).png",
    "aicc (2).png",
    "aicc (3).png",

];

const captions = [
    ":3",
    "?!",
    "*internal screaming*",
    "*jazz music stops*",
    "*SUPER*STAR*",
    "10/10",
    "100%",
    "Aight Imma Head Out",
    "Ain't nobody got time for that",
    "ANYONE NEED BUTTER?",
    "ARE YOU GOING TO STUDY HALL?",
    "Aww Yea",
    "Bet",
    "Big brain time",
    "Big Mood",
    "Big oof",
    "Big Yikes",
    "Breakdancing Champ",
    "Bro Do You Even Lift?",
    "Bruh Moment",
    "Bruh",
    "BYEEEEEE",
    "Can't even",
    "Can't stop, won't stop",
    "Can't unsee",
    "Catch me if you can",
    "Catch these hands",
    "Clownin",
    "come at me bro",
    "Cringe",
    "Cursed Image",
    "Delete This",
    "Demure",
    "Derp",
    "Do You Like My Sword",
    "Don't @ me",
    "don't talk to me or my son ever again",
    "Fallin for u",
    "Family Reunion",
    "Flexin on em",
    "Forever Alone",
    "Friendship is Magic",
    "Get out of my head",
    "Get rekt",
    "Gold Medal Winner",
    "Goofy",
    "GOTTA LOVE BAKED BEANS",
    "Guess I'll die",
    "Haters Gonna Hate",
    "he chonk",
    "He Protec, but he also Attac",
    "HELP ME",
    "Here we go again",
    "High key",
    "Howdy",
    "I Can't Believe You've Done This",
    "I Can't Unsee This",
    "i guess we doin",
    "I hate it here",
    "I Only Cried For 20 Minutes",
    "I see what you did there",
    "I want to speak to your manager!",
    "I'm a box",
    "I'm a cutie",
    "I'm baby",
    "I'm in danger",
    "I'm shooketh",
    "I'm so skibidi",
    "Ight, I'mma head out",
    "Issa vibe",
    "It do be like that sometimes",
    "It was inevitable",
    "It's a trap!",
    "It's over 9000!",
    "Just Lost My Dawg",
    "Just vibin'",
    "Let that sink in",
    "LITERALLY ME",
    "Low key",
    "Major key",
    "Maximum Overdrive",
    "Me, an intellectual",
    "MOAR!",
    "mom come pick me up",
    "Mood",
    "Mother",
    "My disappointment is immeasurable",
    "My Dream",
    "Nah fam",
    "Nailed it",
    "No Cap",
    "No chill",
    "No Maidens?",
    "No, This Is Patrick",
    "Nobody:...",
    "Noice",
    "Not Again!",
    "Not like this",
    "Not today, Satan",
    "Oh lawd he comin'",
    "Oh no baby, what is you doing?",
    "OK Boomer",
    "One does not simply...",
    "Oof",
    "Please help me",
    "Plot twist",
    "poor lil guy",
    "Poyo",
    "Ratatouille",
    "Rats!",
    "Say what?",
    "See ya tomorrow",
    "Send it!",
    "Sending Good Vibes",
    "Shake it. Don't break it.",
    "Shook",
    "Sorry, not sorry",
    "Spillin' the tea",
    "Straight up",
    "SUS",
    "Take me tubing!",
    "TEETH",
    "Thanks, I Hate It",
    "Thas Tough",
    "That's a lotta damage",
    "That's Hot",
    "The Guy From Fortnite?",
    "the legend",
    "Theyre in the walls",
    "This ain't it, chief",
    "This is a nightmare",
    "This Is Fine",
    "THIS IS FINE",
    "This is my life",
    "This is my weekend look",
    "This is Ohio",
    "This is sus",
    "This is the ideal male body",
    "This is where the fun begins",
    "Time is irrelevant",
    "Unexpected Item in Bagging Area",
    "UwU",
    "Vibe Check",
    "Vibing in the chat",
    "Wait, what?",
    "wat?",
    "We Stan",
    "Weird champ",
    "Weird Flex But Okay",
    "Welp",
    "when u hear a noise at night",
    "When will you learn?",
    "When you realize...",
    "Who Put You on the Planet?",
    "Whole vibe",
    "Why am I like this?",
    "Why are we here, just to suffer?",
    "Why though?",
    "Woke up and chose violence",
    "Y'all Got Any More Of That?",
    "Yeeeee Haw!",
    "Yeet",
    "Yikes forever",
    "You had one job",
    "You love to see it",
    "You Serve",
    "You're doing amazing, sweetie",
    "Zero chill",
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
    if (height < maxImageSize) {
        maxTextWidth = height * 0.9;
        maxImageSize = height * 0.9;
    }
    background(255);
    makeRandomShirt(0)
    makeRandomShirt(maxImageSize)
    let leftButton = createButton('VOTE LEFT');
    leftButton.position(maxImageSize * 0.46, maxImageSize * 0.975);
    leftButton.mousePressed(voteLeft);
    let rightButton = createButton('VOTE RIGHT');
    rightButton.position(maxImageSize * 1.46, maxImageSize * 0.975);
    rightButton.mousePressed(voteRight);
    noLoop();
}

function voteRight() {
    makeRandomShirt(0)
}
function voteLeft() {
    makeRandomShirt(maxImageSize)
}

function makeRandomShirt(topLeftCorner) {
    // Randomly select an image and a caption
    currentIndex = int(random(images.length));
    img = images[currentIndex];
    captionText = random(captions);

    if (random() < 0.25) {
        captionText = captionText.toUpperCase(); // ALL CAPS
    }
    if (random() < 0.25) {
        captionText = captionText.toLowerCase();
    }
    if (random() < 0.25) {
        captionText = toMockingText(captionText);
    }

    // Display the image and caption
    imageMode(CENTER);
    // Resize the image to fit within the 700x700 area
    let resizedImg = resizeImage(img, maxImageSize, maxImageSize);

    // Display the resized image
    imageMode(CENTER);
    image(resizedImg, topLeftCorner + maxImageSize / 2, maxImageSize / 2);

    // Adjust text size to fit within the canvas
    textAlign(CENTER, CENTER);
    let textSizeValue = calculateTextSize(captionText, maxTextWidth);
    textStyle(BOLD);
    stroke(255);
    strokeWeight(8);
    textSize(textSizeValue);
    fill(0);
    text(captionText, topLeftCorner + maxImageSize / 2, maxImageSize * 0.75);
}

function calculateTextSize(text, maxWidth) {
    let size = 100; // Start with a default size
    textSize(size);

    // Increase or decrease text size until it fits within maxWidth
    while (textWidth(text) > maxWidth * 0.55) {
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

function toMockingText(text) {
    let result = "";
    let letterCount = 0;
    for (let i = 0; i < text.length; i++) {
        if (letterCount % 2 == 0) {
            result += text.charAt(i).toLowerCase();
        } else {
            result += text.charAt(i).toUpperCase();
        }
        if (text.charAt(i) != " ") {
            letterCount++;
        }
    }
    return result;
}