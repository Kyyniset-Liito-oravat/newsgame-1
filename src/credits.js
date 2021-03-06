var credits_state = {
    create: function () {
        var background = drawBackground('menubackground');
        background.alpha = 0.15;
        PREVIOUS_BACKGROUND = 'menubackground';

        var backButton = createButton(CENTER.x, CENTER.y * 1.75, "Valikkoon", this.backButtonHandler, this);
        var text = this.drawText(
            "Veera Hasala: projektin johto, ohjelmointi\n" +
            "Pauliina Karjalainen: graafinen suunnittelu, kuvien haku ja editointi\n" +
            "Juho Karppinen: ohjelmointi, äänisuunnittelu\n" +
            "Elina Rantalainen: käsikirjoitus, taustatutkimus\n" +
            "Roope Visuri: taustatutkimus\n" +
            "Yhteistyökumppani: Keski-Suomen museo\n\n" +
            "Taustakuvat: Keski-Suomen museo, Kansallisgalleria, Helsingin Kaupunginmuseo, Museovirasto, SA-kuva-arkisto, Keskisuomalainen\n" +
            "Taustamusiikki: Bittersweet (Kevin MacLeod, incompetech.com, CC BY 3.0)\n"
            +"Peli toteutettu Phaser-kirjastoa käyttäen. https://phaser.io/download/license");
        [text].concat(backButton).forEach(function(element) {
            GAME.add.tween(element).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0);
        });
    },

    drawText: function(txt, x = 50, y = 50) {
        var text = GAME.add.text(x, y, txt, CREDIT_STYLE);
        text.alpha = 0;
        text.addColor(HELP_STYLE.fill, 0);
        return text;
    },

    backButtonHandler: function () {
        GAME.state.start('menu');
    }
};