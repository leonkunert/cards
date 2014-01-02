var _ = require("underscore");
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

    this.init();

    return this;
};

var suits = {
    'standart': {
        "♠": "Spades",
        "♦": "Diamonds",
        "♣": "Clubs",
        "♥": "Hearts"
    }
};

var ranks = {
    'twoToA': {
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine",
        "10": "Ten",
        "J": "Jack",
        "Q": "Queen",
        "K": "King",
        "A": "Ace"
    },
    'sevenToA': {
        "7": "Seven",
        "8": "Eight",
        "9": "Nine",
        "10": "Ten",
        "J": "Jack",
        "Q": "Queen",
        "K": "King",
        "A": "Ace"
    },
    'nineToA': {
        "9": "Nine",
        "10": "Ten",
        "J": "Jack",
        "Q": "Queen",
        "K": "King",
        "A": "Ace"
    }
};

playingCards.prototype.init = function () {
    switch (this.config.deckType) {
        case "french":
            console.log('french');
            this.config.suits = suits.standart;
            this.config.ranks = ranks.twoToA;
            break;
        case "piquet":
            console.log('piquet');
            this.config.suits = suits.standart;
            this.config.ranks = ranks.sevenToA;
            break;
        case "doppelkopf":
            console.log('doppelkopf');
            this.config.suits = suits.standart;
            this.config.ranks = ranks.nineToA;
            break;
    }
    this.cards = [];
    var o = this.config,
        l, i, s, r, j;
    // populate draw pile
    for (i = 0; i < o.decks; i++) {
        // standard
        for (s in o.suits) {
            for (r in o.ranks) {
                l = this.cards.length;
                this.cards[l] = new card(r, o.ranks[r], s, o.suits[s]);
            }
        }
    }
}

var card = function (rank, suit, value) {
    this.rank       = rank;
    this.suit       = suit;
    this.value      = value;
    return this;
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