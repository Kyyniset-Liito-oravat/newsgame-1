var servant1_state = {

    create: function() {
        PLAYER.age = 16;

        var text = "Koska et totellut isääsi, hän heittää sinut ulos talostaan. " +
                   "Haaveet opinnoista kaatuvat vapaaoppilaan paikasta " +
                   "huolimatta, sillä joudut henkesi pitimiksi etsimään töitä. " +
                   "Päädyt rengiksi naapuripitäjään.";
        
        var image             = 'youthworkcountrybackground';
        var imageInfo         = "Hugo Simberg";        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
      GAME.state.start('barn1');
    }
}