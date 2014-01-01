// Cards functions

var playingCards = function (options) {
    this.defaults = {
        "decks": 1,
        "jacks" : true
    };
    this.config = objExtend(this.defaults, options);
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