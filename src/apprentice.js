var apprentice_state = {

    create: function() {
        PLAYER.age = 16;

        if (PLAYER.class === "rich") {
            var image     = 'youthworkcitybackground';
            var imageInfo = "P. Jänis";
            var text      = "Apteekkarin apupoikana toimiminen on kiinnostavaa. "+
                            "Koulutustaustasi vuoksi olet erittäin pätevä työssäsi.";
        } else {
            var image     = 'youthworkcitybackground';
            var imageInfo = "P. Jänis";
            var text      = "Kätevyytesi huomataan. Kuulet kehuja, että muutaman vuoden " +
                            "päästä sinulla voisi hyvinkin olla oma verstas.";
        }
        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}
