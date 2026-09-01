const SUPABASE_URL='https://ydwxnjafnydeinrtoijd.supabase.co'
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_aTVF2pZ1lK4-ILWQP0v-LQ_zTZpj-sE'
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

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

async function loadData(filename) {
  try {
    const response = await fetch(filename); 
    const data = await response.json();       
    return data;                         
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

let imageFilenames
let captions




async function setup() {
    imageFilenames = await loadData("shirts.json");
    captions = await loadData("captions.json");
    console.log(imageFilenames)
    loadSaveData();
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

async function loadSaveData() {
    const { data, error } = await supabaseClient
        .from('scoreboard')
        .select('shirt_key, votes');

    if (error) {
        console.error('Failed to load scoreboard:', error);
        return;
    }

    scoreboard = {};
    data.forEach(row => {
        if (isValidShirtKey(row.shirt_key)) {
            scoreboard[row.shirt_key] = row.votes;
        } else {
            console.warn('Ignored invalid DB shirt key:', row.shirt_key);
        }
    });
}

// function loadSaveData(){
//     let savedScoreboard = localStorage.getItem('teeKOScoreboard');
//     let savedTotalVotes = localStorage.getItem('teeKOTotalVotes');

//     if (savedScoreboard) {
//         scoreboard = JSON.parse(savedScoreboard);
//     }
//     if (savedTotalVotes) {
//         totalVotes = parseInt(savedTotalVotes);
//     }
// }

// function saveGame(){
//     localStorage.setItem('teeKOScoreboard', JSON.stringify(scoreboard));
//     localStorage.setItem('teeKOTotalVotes', totalVotes.toString());
// }

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

function getShirtFromScoreboard(index) {
    // Only sort and select from validated keys
    let sortedScores = Object.entries(scoreboard)
        .filter(([key]) => isValidShirtKey(key))
        .sort((a, b) => b[1] - a[1]);

    if (index < 0 || index >= sortedScores.length) {
        return null;
    }

    let [key, score] = sortedScores[index];
    let parts = key.split('|');
    let imgIndex = imageFilenames.indexOf(parts[1]);

    if (imgIndex === -1 || !images[imgIndex]) {
        console.error('Image asset missing for shirt key:', key);
        return null;
    }

    return {
        img: resizeImage(images[imgIndex], maxImageSize, maxImageSize),
        filename: imageFilenames[imgIndex],
        text: parts[0],
        textSize: calculateTextSize(parts[0], maxTextWidth),
        x: width / 2 - maxImageSize / 2, 
        votes: score
    };
}

function getOldShirt(champShirt){
    let scoreboardLength = Object.keys(scoreboard).length;
    if(totalVotes < 10){
        return null;
    }
    let index = Math.min(Math.floor(Math.random()*scoreboardLength), Math.floor(Math.random()*scoreboardLength));
    let oldShirt = getShirtFromScoreboard(index);
    if(oldShirt.filename === champShirt.filename){
        return null;
    }
    return oldShirt;

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
                selectedShirtData = getShirtFromScoreboard(i);
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
            // 20% chance of reviving old shirt
            if(Math.random() < 0.2){
                rightShirt = getOldShirt(leftShirt);
                if(!rightShirt){
                    rightShirt = generateShirtData(maxImageSize);
                }
                rightShirt["x"] = maxImageSize;
            } else {
                rightShirt = generateShirtData(maxImageSize);
            }
            
            checkScoreboardTransition();
        }
    } 
    else if (currentState === GameState.ANIM_RIGHT_WIN) {
        drawShirt(leftShirt, 1 - progress, 0); // Shrink left
        drawShirt(rightShirt, 1, 30 * progress); // Glow right

        if (progress >= 1) {
            if(Math.random() < 0.2){
                leftShirt = getOldShirt(rightShirt);
                if(!leftShirt){
                    leftShirt = generateShirtData(0);
                }
                leftShirt["x"] = 0;
            } else {
                leftShirt = generateShirtData(0);
            }

            checkScoreboardTransition();
        }
    }
}

function checkScoreboardTransition() {
    if (totalVotes % 10 === 0) {
        loadSaveData();
        currentState = GameState.DISPLAY_SCOREBOARD;
        leftButton.hide();
        rightButton.hide();
        continueButton.show();
    } else {
        currentState = GameState.IDLE;
    }
}

async function recordVote(winningShirt) {
    if (!winningShirt || !winningShirt.text || !winningShirt.filename) {
        console.error('Aborting vote: invalid shirt object', winningShirt);
        return;
    }

    let protocolKey = winningShirt.text.trim() + "|" + winningShirt.filename.trim();

    if (!isValidShirtKey(protocolKey)) {
        console.error('Aborting vote: generated shirt key is invalid:', protocolKey);
        return;
    }

    if (!scoreboard[protocolKey]) {
        scoreboard[protocolKey] = 0;
    }
    scoreboard[protocolKey]++;
    totalVotes++;

    const { error } = await supabaseClient.rpc('add_vote', { shirt_key_input: protocolKey });
    if (error) {
        console.error('Error saving vote to database:', error);
    }
}

// function recordVote(winningShirt) {
//     let protocolKey = winningShirt.text + "|" + winningShirt.filename;
    
//     if (!scoreboard[protocolKey]) {
//         scoreboard[protocolKey] = 0;
//     }
//     scoreboard[protocolKey]++;
//     totalVotes++;
//     saveGame();
// }

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
    
    if (random() < 0.25) {
        captionText = captionText.toUpperCase(); // ALL CAPS
    }
    if (random() < 0.25) {
        captionText = captionText.toLowerCase();
    }
    if (random() < 0.25) {
        captionText = toMockingText(captionText);
    }
    
    return {
        img: resizeImage(images[index], maxImageSize, maxImageSize),
        filename: imageFilenames[index],
        text: rawText,
        textSize: calculateTextSize(rawText, maxTextWidth),
        x: xPos,
        votes: 0
    };
}

function isValidShirtKey(key) {
    if (!key || typeof key !== 'string') return false;

    const parts = key.split('|');
    if (parts.length < 2) return false;

    const textPart = parts[0].trim();
    const filenamePart = parts[1].trim();

    // Ensure caption is non-empty and filename exists in imageFilenames
    return textPart.length > 0 && imageFilenames.includes(filenamePart);
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

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
    
//     maxTextWidth = width / 2;
//     maxImageSize = width / 2;
    
//     if (height < maxImageSize) {
//         maxTextWidth = height * 0.9;
//         maxImageSize = height * 0.9;
//     }

//     // Reposition the UI Buttons
//     if (leftButton && rightButton) {
//         leftButton.position(maxImageSize * 0.46, maxImageSize * 0.975);
//         rightButton.position(maxImageSize * 1.46, maxImageSize * 0.975);
//     }
    
//     if (continueButton) {
//         continueButton.position(width / 2 - 50, height * 0.9);
//     }
    
//     if (backButton) {
//         backButton.position(width / 2 - 30, height * 0.9);
//     }

//     // Re-align the Active Shirts
//     if (leftShirt) {
//         leftShirt.x = 0;
//     }
//     if (rightShirt) {
//         rightShirt.x = maxImageSize;
//     }
//     if (selectedShirtData) {
//         selectedShirtData.x = width / 2 - maxImageSize / 2;
//     }
// }