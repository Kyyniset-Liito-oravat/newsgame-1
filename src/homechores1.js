var homechores1_state = {

    create: function() {
        var text = "";
        if(PLAYER.class === "poor") {
            var background = GAME.add.sprite(0, 0, 'homechorescountrybackground');
            text = "Olet hyvä apu kotona, mutta perheeseen syntyy uusi vauva, eikä kaikille riitä ruokaa. Sinut lähetetään piiaksi naapuripitäjään.";
        } else if(PLAYER.class === "middle") {
            var background = GAME.add.sprite(0, 0, 'homechores1background');
            text = "Opit kotona kaiken kotiaskareista. Äitisi opettaa sinut laittamaan ruokaa ja ompelemaan vaatteita.";
        } else if(PLAYER.class === "rich") {
            var background = GAME.add.sprite(0, 0, 'homechores1background');
            text = "Äitisi opettaa sinut laittamaan ruokaa ja ompelemaan vaatteita. Lisäksi isäsi harjoittaa lukutaitoasi lukemalla sanomalehteä ja kirjoja kanssasi.";
        }
        background.alpha = 0;
        
        PLAYER.age = 13;
        displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var continueButton = GAME.add.button(GAME.world.centerX, GAME.world.centerY * 1.4, 'button');
        continueButton.anchor.set(0.5);
        continueButton.alpha = 0;
        var t1 = GAME.add.text(continueButton.centerX, continueButton.centerY, "Jatka");
        t1.anchor.set(0.5);
        t1.alpha = 0;
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(continueFromHomechores, this);

        //fade in
        tweenElements(background, [box, continueButton, text1, t1]);

    },

    update: function() {
    }
}

function continueFromHomechores () {
    GAME.state.start('death');
}
