// Cards functions
var playingCards = function (options) {
    // Defaults
    this.defaults = {
        'numberOfDecks' : 1,
        // Type of deck
        'deckType'      : 'french',
        // Number of Jokers per Deck
        'numberOfJokers': 0,
        'startShuffled' : false
    };
    // Extending defaults with options
    this.config = objExtend(this.defaults, options);
    this.shuffled = false;

    this.init();

    if (this.config.startShuffled) this.shuffle();

    return this;
};

var suits = {
    'standart': {
        '♠': 'Spades',
        '♦': 'Diamonds',
        '♣': 'Clubs',
        '♥': 'Hearts'
    }
};

var ranks = {
    'twoToA': {
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
        '10': 'Ten',
        'J': 'Jack',
        'Q': 'Queen',
        'K': 'King',
        'A': 'Ace'
    },
    'sevenToA': {
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
        '10': 'Ten',
        'J': 'Jack',
        'Q': 'Queen',
        'K': 'King',
        'A': 'Ace'
    },
    'nineToA': {
        '9': 'Nine',
        '10': 'Ten',
        'J': 'Jack',
        'Q': 'Queen',
        'K': 'King',
        'A': 'Ace'
    }
};

playingCards.prototype.init = function () {
    switch (this.config.deckType) {
        default:
        case null:
        case 'french':
            this.config.suits = suits.standart;
            this.config.ranks = ranks.twoToA;
            break;
        case 'piquet':
            this.config.suits = suits.standart;
            this.config.ranks = ranks.sevenToA;
            break;
        case 'doppelkopf':
            this.config.suits = suits.standart;
            this.config.ranks = ranks.nineToA;
            break;
    }
    this.cards = [];
    var l, i, s, r, j;

    // Number of decks at least 1 and not null
    if (this.config.numberOfDecks === 0 || this.config.numberOfDecks === null) {
        this.config.numberOfDecks = 1;
    }

    // populate draw pile
    for (i = 0; i < this.config.numberOfDecks; i++) {
        // standard
        for (s in this.config.suits) {
            for (r in this.config.ranks) {
                l = this.cards.length;
                // TODO: Added configurable value as third argument
                this.cards[l] = new card(r, s);
            }
        }
        // jokers
        for (j = 0; j < this.config.numberOfJokers; j++) {
            l = this.cards.length;
            // suit will always be 1 or 2
            this.cards[l] = new card('Joker', (j % 2) + 1);
        }
    }
};

playingCards.prototype.shuffle = function (n) {
    if (!n) {
        n = 5;
    }
    this.shuffled = true;

    var l = this.cards.length,
        r, tmp, i, j;

    for (i = 0; i < n; i++) {
        for (j = 0; j < l; j++) {
            r = Math.floor(Math.random() * l);
            tmp = this.cards[j];
            this.cards[j] = this.cards[r];
            this.cards[r] = tmp;
        }
    }
};

playingCards.prototype.deal = function (n) {
    if (!n) {
        return false;
    }
    var _cards = [];
    while (_cards.length < n) {
        _cards.push(this.cards.pop());
    }
    return _cards;
};

// TODO: Added configurable value as third argument
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
};

module.exports = playingCards;