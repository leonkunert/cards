// Cards functions
var playingCards = function (options) {
    // Defaults
    this.defaults = {
        "decks"          : 1,
        // Type of deck
        "deckType"       : "french"
    };
    // Extending defaults with options
    this.config = objExtend(this.defaults, options);

    switch (this.config.deckType) {
        case "french":
            console.log('french');
            break;
        case "piquet":
            console.log('piquet');
            break;
        case "doppelkopf":
            console.log('doppelkopf');
            break;
    }
};

// Helpers
var objExtend = function (a, b) {
    if (!b) {
        return a;
    }
    for (var i in b) {
        a[i] = b[i];
    }
    return a;
}

module.exports = playingCards;