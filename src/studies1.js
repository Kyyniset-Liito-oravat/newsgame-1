var studies1_state = {

    create: function() {
        PLAYER.age = 12;
        if(PLAYER.class === "rich") {
            var leftButtonLabel = "Opintoja";
            if(PLAYER.gender === "male") {
                var text = "Aloitat oppikoulun Jyväskylän lyseossa. Opiskelu osoittautuu " +
                   "paljon vaikeammaksi kuin olit odottanut ja pian kadut kouluun tuloa. " +
                   "Jatkatko opintoja vai lähdetkö mieluummin leskeksi jääneen " + 
                   "apteekkarienosi apupojaksi?";
                    var rightButtonLabel = "Apupojaksi";
            } else {
                var text = "Aloitat oppikoulun Jyväskylän tyttökoulussa. Opiskelu osoittautuu " +
                   "paljon vaikeammaksi kuin olit odottanut ja pian kadut kouluun tuloa. " +
                   "Jatkatko opintoja vai lähdetkö mieluummin leskeksi jääneen " + 
                   "apteekkarienosi apupojaksi?";
                    var rightButtonLabel = "Aputytöksi";
            }
        } else {
            var text = "Isäsi myöntyy, ja aloitat oppikoulun Jyväskylän tyttökoulussa. Opiskelu osoittautuu " +
               "paljon vaikeammaksi kuin olit odottanut, mutta et aio luovuttaa. " +
               "Luokkatoverillasi Hildalla on vaikeuksia pysytellä perässä, autatko häntä " + 
               "koulutöissä?";
            var leftButtonLabel = "Kyllä";
            var rightButtonLabel = "Ei";
        }

        var image           = 'studies1background';
        var imageInfo       = "";

        drawUItwoButtons(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.class === "rich") {
            GAME.state.start('studies2');
        } else {
            PLAYER.friend = "Hilda";
            GAME.state.start('studies3');
        }
    },

    rightButtonHandler: function () {
        if(PLAYER.class === "rich") {
            GAME.state.start('apprentice');
        } else {
            GAME.state.start('studies3');
        }
    }
}