var studies2_state = {

    create: function() {
        PLAYER.age = 16;

        if (PLAYER.gender === "male") {
            var text = "Onneksi olkoon, tuore ylioppilas! ";
            if(PLAYER.class === "middle") {
                "Tähän keskiluokkalaiselle jotain jatkoa.";
                var leftButtonLabel  = "Jotain";
                var rightButtonLabel = "Jotain";
            } else {
                if(PLAYER.location.name === "Jyväskylä") {
                text += "Jatkatko isäsi jalanjäljillä ja menet Jyväskylän kasvatusopilliseen korkeakouluun jatkamaan opintojasi vai "
                +"seuraatko sydäntäsi ja haet Helsingin yliopistoon opiskelemaan lääketiedettä?";
                var leftButtonLabel  = "Kasvatusoppi";
                var rightButtonLabel = "Lääketiede";
            } else {
                text += "Haaveilet urasta puolustusvoimissa ja haluaisit ilmoittautua "
                +"vapaaehtoisena armeijaan, mutta isäsi toivoisi sinun jatkavan opintojasi Helsingin yliopistossa. "
                +" Mitä teet?";
                var leftButtonLabel  = "Yliopistoon";
                var rightButtonLabel = "Armeijaan";
            }
            }
        } else {
            var text = "Onneksi olkoon, tuore keskikoulusta valmistunut! Haaveilet sairaanhoitajan ammatista, mutta "
            +"opiskellaksesi sairaanhoitajaksi sinun pitäisi muuttaa Kuopioon. Vanhempasi toivoisivat sinun jäävän kotiin. "
            +"Lähdetkö vai jäätkö?";
            var leftButtonLabel  = "Sairaanhoitajaksi";
            var rightButtonLabel = "Kotiin";
        }
        
        var image     = 'studies1background';

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('death');
    },

    rightButtonHandler: function () {
        if(PLAYER.gender === "female") {
            GAME.state.start('homechores0');
        } else {
            GAME.state.start('death');
        }
    }
}
