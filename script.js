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
    "hubgdad (14).png",
    "hubgdad (15).png",
    "hubgdad (16).png",
    "hubgdad (17).png",
    "aicc (1).png",
    "aicc (2).png",
    "aicc (3).png",
    "aicc (4).png",
    "aicc (5).png",
    "aicc (6).png",
    "aicc (7).png",
    "aicc (8).png",
    "aicc (9).png",


];

const captions = [
    ":3",
    "?!",
    "*internal screaming*",
    "*jazz music stops*",
    "*panic internally*",
    "*screams into void*",
    "*SUPER*STAR*",
    "10/10",
    "100%",
    "404 brain not found",
    "Adulting: Nope",
    "Aight Imma Head Out",
    "Ain't nobody got time for that",
    "Aliens watch me for tips",
    "all your base are belong to us",
    "Anxiety but make it aesthetic",
    "ANYONE NEED BUTTER?",
    "ARE YOU GOING TO STUDY HALL?",
    "Assistant to the Regional Manager",
    "Aww Yea",
    "Bad Hair, Don't Care",
    "Be careful, I know the code to the WiFi",
    "Be kind, I'm doing my best",
    "Be nice, I might be your tech support someday",
    "Be right back, disassociating",
    "Bears. Beets. Battlestar Galactica.",
    "Bet",
    "Big brain energy, small body",
    "Big brain time",
    "Big Mood",
    "Big oof",
    "Big yawn, bigger vibes",
    "Big Yikes",
    "Binary mood: 101010",
    "Bless this mess",
    "Brain lag loading…",
    "brb, debugging life",
    "BRB: existential crisis",
    "BRB: Mentally elsewhere",
    "Breakdancing Champ",
    "Bro Do You Even Lift?",
    "Bro got the quantum Ohio gyatt buff",
    "Bro said skill issue",
    "Bruh Moment",
    "Bruh",
    "BYEEEEEE",
    "cache rules everything around me",
    "Caffeine and kindness",
    "Can't adult today, send help",
    "Can't even",
    "Can't stop, won't stop",
    "Can't touch this literally",
    "Can't unsee",
    "Catch me if you can",
    "Catch me in the cache",
    "Catch these hands",
    "Certified Goofy Ahh Energy",
    "Certified Lover Era Human",
    "Certified rizz mage from Ohio",
    "Champagne problems but make it cute",
    "Chronically online but tired of it",
    "Clownin",
    "Coffee a little, laugh a lot",
    "Coffee: because adulting is hard",
    "come at me bro",
    "Commit early, commit often",
    "Conference Room. Now.",
    "Cringe",
    "Ctrl + Alt + Del my problems",
    "Currently avoiding responsibilities",
    "Currently vibing… maybe",
    "Cursed Image",
    "Decaf? No thanks, I'm not a quitter",
    "Delete This",
    "Demure",
    "Derp",
    "Do You Like My Sword",
    "Don't @ me",
    "Don't follow me, I'm lost too",
    "Don't Follow Me, I'm Lost Too",
    "don't talk to me or my son ever again",
    "Eat, Sleep, Repeat",
    "Eat, sleep, repeat",
    "Emotional support hoodie",
    "Error 404: Motivation Not Found",
    "Error: Fun not found",
    "Espresso yourself",
    "Fallin for u",
    "Family Reunion",
    "Family: where life begins and love never ends",
    "Fanum-powered sigma skibidi sweep",
    "Feeling 22-ish every day",
    "Flexin on em",
    "Forever Alone",
    "Friendship is Magic",
    "Fueled by caffeine and cardigan energy",
    "Gather here with grateful hearts",
    "Get out of my head",
    "Get rekt",
    "git commit -m 'send help'",
    "Gold Medal Winner",
    "Good vibes only",
    "Goofy",
    "GOTTA LOVE BAKED BEANS",
    "Gravity fears my power",
    "Growing up was a trap",
    "Guess I'll die",
    "Gyatt alert: skibidi mode activated",
    "Gyatt level 1000 fanum tax moment",
    "Happiness is homemade",
    "Haters Gonna Hate",
    "he chonk",
    "He Protec, but he also Attac",
    "HELP ME",
    "Here we go again",
    "High key",
    "Hold on, I need to overthink this",
    "Home is where the WiFi is",
    "Home sweet chaos",
    "Howdy",
    "I Brake for Snacks",
    "I Can't Believe You've Done This",
    "I Can't Unsee This",
    "I can't. I'm in my flop era",
    "I declare… lunchtime!",
    "I did not ask",
    "I don't need Google my spouse knows everything",
    "i guess we doin",
    "I hate it here",
    "I lift tacos, bench press pizza",
    "I Only Cried For 20 Minutes",
    "I paused my game to be here",
    "I regret nothing… yet",
    "I see what you did there",
    "I speak fluent movie quotes",
    "I turn coffee into code",
    "I void contracts",
    "I void warranties",
    "I want to speak to your manager!",
    "I'm a box",
    "I'm a cutie",
    "I'm baby",
    "I'm in danger",
    "I'm kind of a big dill",
    "I'm literally built different",
    "I'm not arguing, I'm just explaining why I'm right",
    "I'm not lazy, I'm energy efficient",
    "I'm not short, I'm fun-sized",
    "I'm not superstitious, just a little stitious",
    "I'm okay-ish",
    "I'm on a seafood diet: I see food, and I eat it",
    "I'm shooketh",
    "I'm silently correcting your grammar",
    "I'm so skibidi",
    "Identity theft is NOT a joke, Jim",
    "If it's not on the calendar, it doesn't exist",
    "If you can read this, bring me pizza",
    "Ight, I'mma head out",
    "In my Swiftie era",
    "Instant human: just add coffee",
    "Introverted but willing to discuss cats",
    "Issa vibe",
    "It do be like that sometimes",
    "It was inevitable",
    "It's a trap!",
    "It's over 9000!",
    "Just here for the memes",
    "Just Lost My Dawg",
    "Just vibin'",
    "Keep calm and carry on",
    "Kernel panic: adulthood",
    "Kid tested mother approved",
    "Laundry today or naked tomorrow",
    "Let that sink in",
    "Let's taco 'bout it",
    "Life happens, coffee helps",
    "Life is better on the porch",
    "Life is short, git push",
    "LITERALLY ME",
    "Live, Laugh, Love",
    "Living my best NPC life",
    "Low key",
    "Low-power mode activated",
    "Main character energy: activated",
    "Main character in training",
    "Major key",
    "Make It Happen",
    "Maximum Overdrive",
    "May the source be with you",
    "Me, an intellectual",
    "Me: calm. Brain: nah.",
    "Meet me at midnight vibes",
    "Mentally I'm still buffering",
    "Mentally on Do Not Disturb",
    "MOAR!",
    "mom come pick me up",
    "Mood: 404 not found",
    "Mood",
    "Mother",
    "My brain has too many tabs open",
    "My comfort show is my personality now",
    "My disappointment is immeasurable",
    "My Dream",
    "My password is longer than my attention span",
    "My playlist is 90% nostalgia",
    "My shadow scares criminals",
    "My tears? Glitter.",
    "My wifi connects instantly",
    "Nah fam",
    "Nailed it",
    "No Cap",
    "No chill",
    "No Excuses, Just Results",
    "No Maidens?",
    "No shirt, no shoes, no service",
    "No thoughts, just vibes",
    "No, This Is Patrick",
    "Nobody:...",
    "Noice",
    "Not Again!",
    "Not like this",
    "Not today, Satan",
    "NPC detected in the Ohio backrooms",
    "NPC? Nah, I'm side-questing",
    "Oh lawd he comin'",
    "Oh no baby, what is you doing?",
    "Ohio sigma energy: unpatched",
    "OK Boomer",
    "One does not simply...",
    "Oof",
    "Oops. Did I do that?",
    "Outta Office, Into Nature",
    "Ping me if you dare",
    "Please excuse the mess, my kids are making memories",
    "Please help me",
    "Plot twist: I'm the villain",
    "Plot twist",
    "poor lil guy",
    "Powered by caffeine and chaos",
    "Powered by Coffee and Gasoline",
    "Powered by friendship bracelets",
    "Powered by snacks and questionable decisions",
    "Poyo",
    "Pretzel Day Enthusiast",
    "Procaffinating: the tendency to not start anything until you've had coffee",
    "Procrastinators unite... tomorrow",
    "Professional overthinker",
    "Quantum brain loading",
    "Ratatouille",
    "Rats!",
    "rm -rf / (just kidding)",
    "Road Trip Mood Activated",
    "Running late is my cardio",
    "Running on coffee and dry shampoo",
    "Running on vibes and iced coffee",
    "Sarcasm: just one of my many talents",
    "Sassy since birth",
    "Say what?",
    "Scrolling is my cardio",
    "See ya tomorrow",
    "Send it!",
    "Sending Good Vibes",
    "Shake it. Don't break it.",
    "Shook",
    "Simmering chaos inside",
    "Skibidi rizzplosion in progress",
    "Skibidi sigma rizzler Ohio core",
    "Smile, it confuses people",
    "Social battery: 1%",
    "Sorry, not sorry",
    "Spillin' the tea",
    "Stack overflowed my emotions",
    "Straight up",
    "Stressed, blessed, and coffee obsessed",
    "sudo make me a sandwich",
    "sudo rm -rf regrets",
    "Suns Out, Hats On",
    "Surviving on caffeine and chaos",
    "SUS",
    "Swiftie with a Reputation",
    "Syntax error: too tired",
    "Take me tubing!",
    "Talk nerdy to me",
    "TEETH",
    "Thanks, I Hate It",
    "Thas Tough",
    "That's a lotta damage",
    "That's Hot",
    "The dog is in charge",
    "The Guy From Fortnite?",
    "the legend",
    "Theyre in the walls",
    "This ain't it, chief",
    "This Hat Paid for Itself",
    "This is a nightmare",
    "THIS IS FINE!",
    "This Is Fine",
    "This is me trying (my best)",
    "This is my 'I tried' outfit",
    "This is my life",
    "This is my too-tired-to-function shirt",
    "This is my weekend look",
    "This is Ohio",
    "This is sus",
    "This is the ideal male body",
    "This is where the fun begins",
    "This kitchen is seasoned with love",
    "This might be coffee",
    "Threat Level: Midnight",
    "Time is irrelevant",
    "Too Cool for Your Rules",
    "Too much Monday, not enough coffee",
    "Too much sauce, not enough spaghetti",
    "Touch grass? I barely touch sleep",
    "Ultra-mega-goofy skibidi rizz",
    "Unexpected Item in Bagging Area",
    "UwU",
    "Vibe Check",
    "Vibing in the chat",
    "W rizz, L sleep schedule",
    "Wait, what?",
    "Warning: May start talking about my hobby at any time",
    "wat?",
    "We Stan",
    "Weird champ",
    "Weird Flex But Okay",
    "Welcome-ish: Depends on who you are",
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
    "Women want me, fish fear me",
    "World's Best Whatever",
    "Y'all Got Any More Of That?",
    "Yeeeee Haw!",
    "Yeet",
    "Yikes forever",
    "You can't scare me, I have kids",
    "You had one job",
    "You love to see it",
    "You Serve",
    "You're doing amazing, sweetie",
    "Zero chill",
    "Zero Plans, All Vibes",
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

function getText(captions){
    let firstHalfArray = random(captions).split(" ");
    let secondHalfArray = random(captions).split(" ");
        // delete half
        // console.log(firstHalfArray);
    let removeAmount = Math.random()*firstHalfArray.length*0.5
    firstHalfArray.splice(Math.floor(removeAmount), Math.ceil(firstHalfArray.length - removeAmount));
    // console.log(firstHalfArray);
    // console.log(secondHalfArray);
    secondHalfArray.splice(0, Math.floor(Math.random()*secondHalfArray.length*0.5));
    let result = firstHalfArray.join(" ") + " " + secondHalfArray.join(" ");
    if(result.length < 3){
        return "oof";
    }
    // console.log(secondHalfArray);
    //return random(captions);
    return result;
}

function makeRandomShirt(topLeftCorner) {
    // Randomly select an image and a caption
    currentIndex = int(random(images.length));
    img = images[currentIndex];
    captionText = getText(captions);

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