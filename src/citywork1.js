var citywork1_state = {

    create: function() {
        PLAYER.age = 16;

        if(PLAYER.class === "poor") {
            if(PLAYER.gender === "male") {
                var text = "Lähtö kannatti! Saat töitä Valtion kivääritehtaalta. Palkkasi on parempi kuin renkinä, "
                +"mutta toisaalta joudut maksamaan asumisesta toisin kuin renkiaikoina. "
                +"Työ on raskasta tehtaallakin, mutta olet silti tyytyväinen maisemanvaihdokseen.";
            } else {
                var text = "Lähtö kannatti! Saat lastenhoitajan paikan apteekkarin talosta. "
                +"Työhösi kuuluu lastenhoidon lisäksi siivousta ja ruoanlaittoa apteekkarin rouvan valvovan silmän alla.";
            }
        } else {
            if(PLAYER.gender === "male") {
                var text = "Vaikka valinta oli vaikea, et ole katunut sitä hetkeäkään. Työsi vaneritehtaalla on tasaisen tappavaa, "
                +"mutta saat uutta sisältöä elämään vasta perustetun kansalaisopiston kursseilta, joilla vietät kaiken vapaa-aikasi.";
            } else {
                var text = "Vaikka valinta oli vaikea, et ole katunut sitä hetkeäkään. Työsi kotiapulaisena ei juuri poikkea töistäsi kotona, "
                +"mutta saat uutta sisältöä elämään vasta perustetun kansalaisopiston kursseilta, joilla vietät kaiken vapaa-aikasi.";
            }
        }
        
        var image     = 'citybackground';
            
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('dance1');
    }
}
