var help_state = {
    create: function () {
        var background = drawBackground('menubackground');
        background.alpha = 0.15;
        PREVIOUS_BACKGROUND = 'menubackground';
        
        var helpContents = {
            page:        2,
            subPage:     0,
            btnRHandler: function() {
                GAME.state.start('menu');
            },
            btnR:        "Valikkoon",
            textObj:     {},

            help1: {
                txt: ["Ennen oli kaikki...\n\nMillainen elämäsi olisi ollut, jos " + 
                     "olisit syntynyt sata vuotta sitten?"],
                btnL: "Lue ohjeet"
            },
            help2: {
                txt: ["Klikkaamalla suurennuslasia pääset katsomaan taustakuvaa " +
                     "tarkemmin ilman tekstiä. Klikkaamalla uudelleen pääset " +
                     "takaisin peliin.",

                     "Tämän merkin takaa pääset lukemaan lisätietoja pelin " +
                     "käänteisiin liittyvistä historiallisista tapahtumista.",

                     "Tästä napista voit halutessasi mykistää taustamusiikin."],
                btnL: "Seuraava sivu"
            },
            help3: {
                txt: ["Peli saattaa joskus päättyä heti alkuunsa, " +
                     "sillä lähes viidennes vuonna 1917 syntyneistä kuoli alle " +
                     "kouluikäisenä. Voit kuitenkin aloittaa pelin alusta ja kokeilla " +
                     "onneasi uudelleen. Mitä useamman kierroksen pelaat, " +
                     "sitä tarkemman kuvan saat siitä, millaisessa maassa tämän " +
                     "päivän satavuotiaat ovat eläneet  –  tarinoita on monta. " +
                     "Pelin hahmojen elämänkäänteet perustuvat tilastoihin ja " +
                     "historiallisiin tapahtumiin, mutta itse hahmot ovat täysin fiktiivisiä. " +
                     "Tausta-aineistona on käytetty muun muassa aikalaisten " +
                     "muistelmia ja elämäkertoja, joiden tarinoita on yhdistelty " +
                     "sopiviksi kokonaisuuksiksi."],
                btnL: "Seuraava sivu"
            }
        };        
        this.turnPage(helpContents);
    },


    turnPage: function(hC, finished = false) {
        var helpText = hC["help" + hC.page].txt[hC.subPage];
        if (hC.page === 2) {
            hC.textObj = [
                this.drawText(hC.help2.txt[0], 150, 100),
                this.drawText(hC.help2.txt[1], 150, 310),
                this.drawText(hC.help2.txt[2], 150, 440)];
            hC.textObj.forEach(function(item) {
                item.wordWrapWidth = 1070;
            });
        } else {
            hC.textObj = [(this.drawText(helpText))];
        }
        var buttons;
        var helpButton;

        if (hC.page === 2) {
            hC.magnifyButton = this.drawButton(75, 100, 'toggleUIbutton');
            hC.infoButton = this.drawButton(75, 310, 'infoButton');
            hC.muteButton = this.drawButton(75, 440, 'soundOnButton');
        }
        if (hC.page === 3) {
            hC.magnifyButton.forEach(function(e) {e.destroy();});
            hC.infoButton.forEach(function(e) {e.destroy();});
            hC.muteButton.forEach(function(e) {e.destroy();});
        }

        if (!finished) {
            helpButton = 
                createButton(
                    LEFT_BUTTON.x, 
                    LEFT_BUTTON.y + 100, 
                    hC["help" + hC.page].btnL, 
                    function() {
                        hC.textObj.forEach(function(item) {
                            item.destroy();
                        });
                        buttons.forEach(function(e) {
                            e.forEach(function(el) {
                                el.destroy();
                            });
                        });
                        if (hC.page < 3) {
                            hC.page += 1;
                            if(hC.page === 3) {
                                this.turnPage(hC, true);
                            } else {
                                this.turnPage(hC);
                            }
                        }
                    },
                    this);

            var startButtonCoords = {x: RIGHT_BUTTON.x, y: RIGHT_BUTTON.y + 100};
        } else {
            var startButtonCoords = {x: CENTER_BUTTON.x, y: CENTER_BUTTON.y + 100};
        }

        var startButton =
            createButton(
                startButtonCoords.x,
                startButtonCoords.y,
                hC.btnR, 
                hC.btnRHandler,
                this);
        buttons = [helpButton, startButton];

        if (helpButton) helpButton.forEach(function(e) {e.alpha = 1;});
        startButton.forEach(function(e) {e.alpha = 1;});
    },


    drawText: function(txt, x = 50, y = 50) {
        var text = GAME.add.text(x, y, txt, HELP_STYLE);
        text.alpha = 0;
        text.addColor(HELP_STYLE.fill, 0);
        GAME.add.tween(text).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0);
        return text;
    },


    drawButton: function(x, y, buttonSprite) {
        var gfx = GAME.add.graphics(0, 0);
        gfx.beginFill(0xffffff, 0.25);
        gfx.drawCircle(x, y + 37, 80);
        gfx.endFill();

        var btn = GAME.add.sprite(x, y, buttonSprite);
        btn.scale.setTo(0.1);
        btn.anchor.setTo(0.5, 0);
        btn.tint = 0x000000;
        btn.alpha = 0;

        GAME.add.tween(gfx).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0);
        GAME.add.tween(btn).to({ alpha: 0.66 }, 500, Phaser.Easing.Linear.None, true, 0);

        return [gfx, btn];
    }
};