let images = [];
let maxTextWidth = 700; 
let maxImageSize = 700; 
let img;
let captionText = '';
let currentIndex;
let animating = false;
let animStartTime = 0;
let votedSide = "";
const GameState = Object.freeze({
    IDLE: 'IDLE',
    ANIM_LEFT_WIN: 'ANIM_LEFT_WIN',
    ANIM_RIGHT_WIN: 'ANIM_RIGHT_WIN',
    DISPLAY_SCOREBOARD: 'DISPLAY_SCOREBOARD',
    SINGLE_SHIRT_VIEW: 'SINGLE_SHIRT_VIEW'
});

let scoreboard = {};
let totalVotes = 0;
let leftButton, rightButton, continueButton, backButton;
let currentState = GameState.IDLE;
const ANIM_DURATION = 500;
let leftShirt = null;
let rightShirt = null;
let selectedShirtData = null;
const SCOREBOARD_MAX = 5;

const imageFilenames = [
    "aicc01.png",
    "aicc02.png",
    "aicc03.png",
    "aicc04.png",
    "aicc05.png",
    "aicc06.png",
    "aicc07.png",
    "aicc08.png",
    "aicc09.png",
    "eighth01.png",
    "eighth02.png",
    "eighth03.png",
    "eighth04.png",
    "eighth05.png",
    "eighth06.png",
    "eighth07.png",
    "eighth08.png",
    "eighth09.png",
    "eighth10.png",
    "eighth11.png",
    "eighth12.png",
    "eighth13.png",
    "hubgdad01.png",
    "hubgdad02.png",
    "hubgdad03.png",
    "hubgdad04.png",
    "hubgdad05.png",
    "hubgdad06.png",
    "hubgdad07.png",
    "hubgdad08.png",
    "hubgdad09.png",
    "hubgdad10.png",
    "hubgdad11.png",
    "hubgdad12.png",
    "hubgdad13.png",
    "hubgdad14.png",
    "hubgdad15.png",
    "hubgdad16.png",
    "hubgdad17.png",
"img01.png",
"img02.png",
"img03.png",
"img04.png",
"img05.png",
"img06.png",
"img07.png",
"img08.png",
"img09.png",
"img10.png",
"img11.png",
"img12.png",
"img13.png",
"img14.png",
"img15.png",
"img16.png",
"img17.png",
"img18.png",
"img19.png",
"img20.png",
"secondPeriod01.png",
"secondPeriod02.png",
"secondPeriod03.png",
"secondPeriod04.png",
"secondPeriod05.png",
"secondPeriod06.png",
"secondPeriod07.png",
"secondPeriod08.png",
"secondPeriod09.png",
"secondPeriod10.png",
"secondPeriod11.png",
"secondPeriod12.png",
"secondPeriod13.png",
"secondPeriod14.png",
"secondPeriod15.png",
"secondPeriod16.png",
"secondPeriod17.png",
"seventhPeriod01.png",
"seventhPeriod02.png",
"seventhPeriod03.png",
"seventhPeriod04.png",
"seventhPeriod05.png",
"seventhPeriod06.png",
"seventhPeriod07.png",
"seventhPeriod08.png",
"seventhPeriod09.png",
"seventhPeriod10.png",
"seventhPeriod11.png",
"seventhPeriod12.png",
"seventhPeriod13.png",
"seventhPeriod14.png",
"seventhPeriod15.png",
"seventhPeriod16.png",
"seventhPeriod17.png",
"seventhPeriod18.png",
"seventhPeriod19.png",
"seventhPeriod20.png",
"seventhPeriod21.png",
"seventhPeriod22.png",
"seventhPeriod23.png",

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

// function preload() {
//     // Load all images from the filenames array
//     for (let i = 0; i < imageFilenames.length; i++) {
//         //images.push(loadImage('images/' + imageFilenames[i]));
//     }


// }

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     maxTextWidth = width / 2;
//     maxImageSize = width / 2;
//     if (height < maxImageSize) {
//         maxTextWidth = height * 0.9;
//         maxImageSize = height * 0.9;
//     }
//     background(255);
//     leftShirt = generateShirtData(0);
//     rightShirt = generateShirtData(maxImageSize);
//     let leftButton = createButton('VOTE LEFT');
//     leftButton.position(maxImageSize * 0.46, maxImageSize * 0.975);
//     leftButton.mousePressed(voteLeft);
//     let rightButton = createButton('VOTE RIGHT');
//     rightButton.position(maxImageSize * 1.46, maxImageSize * 0.975);
//     rightButton.mousePressed(voteRight);
// }

async function setup() {
    // Await all images simultaneously before continuing
    images = await Promise.all(
        imageFilenames.map(filename => loadImage('images/' + filename))
    );

    createCanvas(windowWidth, windowHeight);
    
    maxTextWidth = width / 2;
    maxImageSize = width / 2;
    if (height < maxImageSize) {
        maxTextWidth = height * 0.9;
        maxImageSize = height * 0.9;
    }
    
    leftShirt = generateShirtData(0);
    rightShirt = generateShirtData(maxImageSize);
    
    leftButton = createButton('VOTE LEFT');
    leftButton.position(maxImageSize * 0.46, maxImageSize * 0.975);
    leftButton.mousePressed(voteLeft);
    
    rightButton = createButton('VOTE RIGHT');
    rightButton.position(maxImageSize * 1.46, maxImageSize * 0.975);
    rightButton.mousePressed(voteRight);
    continueButton = createButton('CONTINUE');
    continueButton.position(width / 2 - 50, height * 0.9);
    continueButton.mousePressed(() => {
        currentState = GameState.IDLE;
        continueButton.hide();
        leftButton.show();
        rightButton.show();
    });
    continueButton.hide();

    backButton = createButton('BACK');
    backButton.position(width / 2 - 30, height * 0.9);
    backButton.mousePressed(() => {
        currentState = GameState.DISPLAY_SCOREBOARD;
        backButton.hide();
        continueButton.show(); 
    });
    backButton.hide();
}

function draw() {
    background(255);
    if (currentState === GameState.IDLE) {
        drawShirt(leftShirt);
        drawShirt(rightShirt);
        return;
    }
    else if (currentState === GameState.ANIM_LEFT_WIN || currentState === GameState.ANIM_RIGHT_WIN){
        showAnimation()
    }
    else if (currentState === GameState.DISPLAY_SCOREBOARD) {
        showScoreboard()
    }
    else if (currentState === GameState.SINGLE_SHIRT_VIEW) {
        showSingleShirtView()
    }
}

function mousePressed() {
    if (currentState === GameState.DISPLAY_SCOREBOARD) {
        let sortedScores = Object.entries(scoreboard).sort((a, b) => b[1] - a[1]);
        let numItems = Math.min(15, sortedScores.length);
        let thumbSize = 80;

        for (let i = 0; i < numItems; i++) {
            // Replicate grid math exactly
            let col = i % 3;
            let row = Math.floor(i / 3);
            let xPos = (width / 4) * (col + 1);
            let yPos = 130 + (row * (thumbSize + 45));

            // Calculate boundaries around the center point
            let leftEdge = xPos - (thumbSize / 2);
            let rightEdge = xPos + (thumbSize / 2);
            let topEdge = yPos - (thumbSize / 2);
            let bottomEdge = yPos + (thumbSize / 2);

            if (mouseX >= leftEdge && mouseX <= rightEdge && 
                mouseY >= topEdge && mouseY <= bottomEdge) {
                
                let [key, score] = sortedScores[i];
                let parts = key.split('|');
                let imgIndex = imageFilenames.indexOf(parts[1]);
                
                selectedShirtData = {
                    img: resizeImage(images[imgIndex], maxImageSize, maxImageSize),
                    text: parts[0],
                    textSize: calculateTextSize(parts[0], maxTextWidth),
                    x: width / 2 - maxImageSize / 2, 
                    votes: score
                };
                
                currentState = GameState.SINGLE_SHIRT_VIEW;
                continueButton.hide();
                backButton.show();
                break; 
            }
        }
    }
}

function showScoreboard(){
    background(240);
    textAlign(CENTER, CENTER);
    fill(0);
    noStroke();
    textSize(40);
    text("SCOREBOARD", width / 2, 50);
    
    let sortedScores = Object.entries(scoreboard).sort((a, b) => b[1] - a[1]);
    let thumbSize = 80;
    
    // Loop through Top 15 (3 cols x 5 rows)
    for (let i = 0; i < Math.min(15, sortedScores.length); i++) {
        let [key, score] = sortedScores[i];
        let parts = key.split('|');
        
        // Calculate Grid Position
        let col = i % 3;
        let row = Math.floor(i / 3);
        
        // Space evenly at 25%, 50%, and 75% of canvas width
        let xPos = (width / 4) * (col + 1); 
        let yPos = 130 + (row * (thumbSize + 45)); 
        
        let imgIndex = imageFilenames.indexOf(parts[1]);
        let thumbnailImg = images[imgIndex];
        
        // Draw Thumbnail
        push();
        translate(xPos, yPos); 
        imageMode(CENTER);
        if (thumbnailImg) image(thumbnailImg, 0, 0, thumbSize, thumbSize);
        
        // Draw Caption on Thumbnail
        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        stroke(255);
        strokeWeight(4);
        fill(0);
        let miniTextSize = calculateTextSize(parts[0], thumbSize * 0.9);
        textSize(miniTextSize);
        text(parts[0], 0, thumbSize * 0.25);
        pop();
        
        // Draw Simplified Vote Score (Centered below thumbnail)
        push();
        textAlign(CENTER, CENTER);
        fill(100); 
        noStroke();
        textSize(16);
        textStyle(BOLD);
        text(`${score}⭐`, xPos, yPos + (thumbSize / 2) + 15);
        pop();
    }
    return;
}

function showSingleShirtView(){
    background(240);
    
    // Draw the full-size shirt
    drawShirt(selectedShirtData);
    
    // Draw the stats below the shirt
    textAlign(CENTER, CENTER);
    fill(0);
    noStroke();
    
    textSize(40);
    text("Total Votes: " + selectedShirtData.votes, width / 2, maxImageSize + 60);
    
    // You can easily add more stats here, like rank or win percentage!
    return;
}

function showAnimation(){
    let elapsed = millis() - animStartTime;
    let progress = constrain(elapsed / ANIM_DURATION, 0, 1);

    if (currentState === GameState.ANIM_LEFT_WIN) {
        drawShirt(leftShirt, 1, 30 * progress); // Glow left
        drawShirt(rightShirt, 1 - progress, 0); // Shrink right

        if (progress >= 1) {
            rightShirt = generateShirtData(maxImageSize);
            checkScoreboardTransition();
        }
    } 
    else if (currentState === GameState.ANIM_RIGHT_WIN) {
        drawShirt(leftShirt, 1 - progress, 0); // Shrink left
        drawShirt(rightShirt, 1, 30 * progress); // Glow right

        if (progress >= 1) {
            leftShirt = generateShirtData(0);
            checkScoreboardTransition();
        }
    }
}

function checkScoreboardTransition() {
    if (totalVotes % 10 === 0) {
        currentState = GameState.DISPLAY_SCOREBOARD;
        leftButton.hide();
        rightButton.hide();
        continueButton.show();
    } else {
        currentState = GameState.IDLE;
    }
}

function recordVote(winningShirt) {
    let protocolKey = winningShirt.text + "|" + winningShirt.filename;
    
    if (!scoreboard[protocolKey]) {
        scoreboard[protocolKey] = 0;
    }
    scoreboard[protocolKey]++;
    totalVotes++;
}

function voteLeft() {
    if (currentState === GameState.IDLE) {
        recordVote(leftShirt);
        
        currentState = GameState.ANIM_LEFT_WIN;
        animStartTime = millis();
    }
}

function voteRight() {
    if (currentState === GameState.IDLE) {
        recordVote(rightShirt);
        currentState = GameState.ANIM_RIGHT_WIN;
        animStartTime = millis();
    }
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

function generateShirtData(xPos) {
    let index = int(random(images.length));
    let rawText = getText(captions);
    
    // Apply your uppercase/lowercase/mocking text logic here
    
    return {
        img: resizeImage(images[index], maxImageSize, maxImageSize),
        filename: imageFilenames[index], // Store for the protocol
        text: rawText,
        textSize: calculateTextSize(rawText, maxTextWidth),
        x: xPos
    };
}

function drawShirt(shirtData, scaleMod = 1, glow = 0) {
    push();
    translate(shirtData.x + maxImageSize / 2, maxImageSize / 2);
    scale(scaleMod);
    
    // Glow effect
    if (glow > 0) {
        drawingContext.shadowBlur = glow;
        drawingContext.shadowColor = 'green';
        
        // Calculate progress (glow maxes out at 30)
        let progress = glow / 30; 
        
        // Blend from white (normal) to gold
        let startColor = color(255, 255, 255);
        let goldColor = color(100, 255, 100); 
        let currentTint = lerpColor(startColor, goldColor, progress);
        
        tint(currentTint);
    }

    imageMode(CENTER);
    image(shirtData.img, 0, 0);
    
    drawingContext.shadowBlur = 0; // Reset shadow for text
    
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    stroke(255);
    strokeWeight(8);
    textSize(shirtData.textSize);
    fill(0);
    text(shirtData.text, 0, maxImageSize * 0.25);
    pop();
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