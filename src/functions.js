/*
 * This file includes functions that are commonly needed in every state
 */
function tweenElements(background, otherElements) {
    GAME.add.tween(background).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    otherElements.forEach(function(element) {
        GAME.add.tween(element).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);
    });
}


function displayNameAndAge() {
    var nameAgeString = PLAYER.name + ", " + PLAYER.age + " vuotta";

    var tempText = GAME.add.text(0,0, nameAgeString, NAME_STYLE);
    var backgroundWidth = tempText.width * 1.2;
    var backgroundHeight = tempText.height * 1.2;
    tempText.destroy();

    var background = GAME.add.graphics(0, 0);
    background.lineStyle(0,0x000000, 0);
    background.beginFill(0x000000, 0.5);
    background.drawRect(CENTER.x * 2 - backgroundWidth, 0, backgroundWidth, backgroundHeight);
    background.endFill();

    var nameText = GAME.add.text(CENTER.x*2 - backgroundWidth / 2, backgroundHeight / 2, nameAgeString, NAME_STYLE);
    nameText.anchor.setTo(0.5);
    // nameText.alpha=0;
    // GAME.add.tween(nameText).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);
    return [nameText, background];
}


function pickName(gender) {
    if(gender === "male") {
        var maleNames = ["Eino", "Toivo", "Veikko", "Väinö", "Tauno", "Erkki", "Reino", "Lauri", "Viljo", "Martti"];
        return maleNames[Math.floor(Math.random()*maleNames.length)];
    }
    if(gender === "female") {
        var femaleNames = ["Anna", "Aino", "Aili", "Aune", "Helvi", "Tyyne", "Kerttu", "Helmi", "Martta", "Toini"];
        return femaleNames[Math.floor(Math.random()*femaleNames.length)];
    }
}


function toggleUI(UIelements) {
    UIelements.forEach(switchAlpha);

    function switchAlpha(item) {
        if (item.alpha) {
            GAME.add.tween(item).to( { alpha: 0 }, 0, Phaser.Easing.Linear.None, true, 0);
        } else {
            GAME.add.tween(item).to( { alpha: 1 }, 0, Phaser.Easing.Linear.None, true, 0);
        }
    }
}


function drawTimeline(age) {
    var lineWidth = 2;
    var lineAlpha = 1;
    var lineColor = 0xffffff;

    var circleLineWidth = 2;
    var circleDiameter  = 20;
    var circleLineAlpha = 1;
    var circleLineColor = 0xffffff;
    var circleFillColor = 0xaaaaaa;

    var horizontalMargin = 45;
    var verticalMargin   = 25;
    var width            = GAME.width;
    var height           = GAME.height;
    var leftEndpoint     = horizontalMargin;
    var rightEndpoint    = width - horizontalMargin;
    var timelineY        = height - verticalMargin;
    var endpointOffset   = 4 * lineWidth;
    var midpointOffset   = 3 * lineWidth;

    var intervalCount = 10;
    var timelineWidth = width - 2 * horizontalMargin;
    var intervalWidth = timelineWidth / intervalCount;

    var circleX = leftEndpoint + timelineWidth / 100 * age;

    var graphics = GAME.add.graphics(0,0);

    graphics.lineStyle(0, 0x000000, 0.25);
    graphics.beginFill(0x000000, 0.25);
    graphics.drawRect(0, timelineY - 60, width, 85);
    graphics.endFill();

    graphics.lineStyle(lineWidth, lineColor, lineAlpha);
    // Horizontal line
    graphics.moveTo(leftEndpoint, timelineY);
    graphics.lineTo(rightEndpoint, timelineY);
    // Left vertical bar
    graphics.moveTo(leftEndpoint, timelineY - endpointOffset);
    graphics.lineTo(leftEndpoint, timelineY + endpointOffset);
    // Right vertical bar
    graphics.moveTo(width - horizontalMargin, timelineY - endpointOffset);
    graphics.lineTo(width - horizontalMargin, timelineY + endpointOffset);

    for (i = 1; i < intervalCount; i++) {
        var x = leftEndpoint + i * intervalWidth;
        graphics.moveTo(x, timelineY - midpointOffset);
        graphics.lineTo(x, timelineY + midpointOffset);
    }

    graphics.lineStyle(circleLineWidth, circleLineColor, circleLineAlpha);
    graphics.beginFill(circleFillColor);
    graphics.drawCircle(circleX, timelineY, circleDiameter);
    graphics.endFill();

    var yearText = GAME.add.text(circleX, timelineY - 33, age + 1917, YEAR_STYLE);
    yearText.anchor.setTo(0.5);

    return [yearText, graphics];    
}


function drawPictureInfoBackdrop() {
    pictureInfoBackdrop = GAME.add.graphics(0, 0);
    pictureInfoBackdrop.lineStyle(0,0x000000, 0);
    pictureInfoBackdrop.beginFill(0x000000, 0.5);
    pictureInfoBackdrop.drawRect(0, GAME.world.height - 85, GAME.world.width, 85);
    pictureInfoBackdrop.endFill();
    pictureInfoBackdrop.alpha = 0;
    return pictureInfoBackdrop;
}


function drawPictureInfo(infoText) {
    var background = GAME.add.graphics(0, 0);
    background.lineStyle(0,0x000000, 0);
    background.beginFill(0x000000, 0.5);
    background.drawRect(0, GAME.world.height - 85, GAME.world.width, 85);
    background.endFill();
    background.alpha = 0;

    if (!infoText) infoText = "Tuntematon";
    var text = GAME.add.text(GAME.world.centerX, GAME.world.height - 42, infoText, INFO_STYLE);
    text.anchor.setTo(0.5, 0.5);
    text.alpha = 0;
    return [background, text];
}


function drawToggleUIbutton(UIelements) {
    var gfx = GAME.add.graphics(0, 0);
    gfx.beginFill(0xffffff,0.25);
    gfx.drawCircle(50, 50, 80);
    gfx.endFill();

    var toggleUIbutton = GAME.add.button(50, 50, 'toggleUIbutton');
    toggleUIbutton.scale.setTo(0.1);
    toggleUIbutton.anchor.setTo(0.5);
    toggleUIbutton.tint = 0x000000;
    toggleUIbutton.alpha = 0.66;
    toggleUIbutton.inputEnabled = true;

    toggleUIbutton.events.onInputDown.add(function() { toggleUI(UIelements); });

    return toggleUIbutton;
}


function drawBoxedText(text) {
    var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
    box.alpha = 0;

    var boxedText = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
    boxedText.alpha = 0;

    // Esimerkki tekstin osien värityksestä. Pitänee muuttaa APIa, jotta voi
    // vapaasti valita, mitä väritetään ja millä värillä...
    var n = text.indexOf(" ");
    boxedText.addColor(HIGHLIGHT_COLOR, 0);
    boxedText.addColor(STYLE.fill, n + 1);

    return [box, boxedText];
}

function drawArticle(img) {
    var article = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, img);
    article.alpha = 0;

    return [article];
}


function drawBackground(image) {
    var background = GAME.add.sprite(0, 0, image);
    background.alpha = 0;
    return background;
}

/**
 * Luo napin keskitettynä koordinaatteihin (x,y).
 * buttonText ja style määrittävät tekstin ja sen tyylin.
 * handler on funktio, joka napista laukeaa, ja context on aina this.
 */
function createButton(x, y, buttonText, handler, context) {
    var button = GAME.add.button(x, y, 'button');
    button.anchor.set(0.5);
    button.inputEnabled = true;
    button.events.onInputDown.add(handler, context);
    button.alpha = 0;

    var text = GAME.add.text(button.centerX, button.centerY, buttonText, BUTTON_STYLE);
    text.anchor.set(0.5);
    text.alpha = 0;

    return [button, text];
}


function drawTitle(x, y, text) {
    var titleText = GAME.add.text(x, y, text, TITLE_STYLE);
    titleText.alpha = 0;
    titleText.anchor.setTo(0.5);
    return titleText;
}


function drawUIsingleButton(bg, txt, label, context) {
    var background   = drawBackground(bg);
    var pictureInfo  = drawPictureInfo(authors[bg]);
    var nameText     = displayNameAndAge();
    var boxedText    = drawBoxedText(txt);
    var timeline     = drawTimeline(PLAYER.age); 
    var centerButton = createButton(CENTER_BUTTON.x, CENTER_BUTTON.y, label, context.centerButtonHandler, context);
      
    var tweenedElements = nameText.concat(boxedText, centerButton, timeline);
    var UIelements      = tweenedElements.concat(pictureInfo, timeline);
    var toggleUIbutton  = drawToggleUIbutton(UIelements);
    tweenElements(background, tweenedElements);
}

function drawUIsingleButtonArticle(bg, img, txt, label, context) {
    var background   = drawBackground(bg);
    var pictureInfo  = drawPictureInfo(authors[bg]);
    var nameText     = displayNameAndAge();
    var article      = drawArticle(img);
    var timeline     = drawTimeline(PLAYER.age); 
    var centerButton = createButton(CENTER_BUTTON.x, CENTER_BUTTON.y, label, context.centerButtonHandler, context);
      
    var tweenedElements = nameText.concat(article, centerButton, timeline);
    var UIelements      = tweenedElements.concat(pictureInfo, timeline);
    var toggleUIbutton  = drawToggleUIbutton(UIelements);
    tweenElements(background, tweenedElements);
}

function drawUItwoButtons(bg, txt, label1, label2, context) {
    var background   = drawBackground(bg);
    var pictureInfo  = drawPictureInfo(authors[bg]);
    var nameText     = displayNameAndAge();
    var boxedText    = drawBoxedText(txt);
    var timeline     = drawTimeline(PLAYER.age); 
    var leftButton   = createButton(LEFT_BUTTON.x, LEFT_BUTTON.y, label1, context.leftButtonHandler, context);
    var rightButton  = createButton(RIGHT_BUTTON.x, RIGHT_BUTTON.y, label2, context.rightButtonHandler, context);
      
    var tweenedElements = nameText.concat(boxedText, leftButton, rightButton, timeline);
    var UIelements      = tweenedElements.concat(pictureInfo, timeline);
    var toggleUIbutton  = drawToggleUIbutton(UIelements);
    tweenElements(background, tweenedElements);
}
