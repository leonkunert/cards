// Inculuding Assert module and the Cardsjs
var assert         = require('assert')
    , _            = require('underscore')
    , playingCards = require('../cards.js');

describe('Setup', function () {
    it('should just be succeeding', function () {
        assert.equal(1, 1);
        assert.equal(-1, -1);
    })
});

describe('Real Tests', function () {
    describe('Structural', function () {
        describe('Defaults Should be', function () {
            var cards = new playingCards();
            it('One for Decks', function () {
                assert.equal(cards.defaults.numberOfDecks, 1);
            });
            it('4 suits', function () {
                assert.equal(_.size(cards.config.suits), 4);
            });
            it('13 ranks', function () {
                assert.equal(_.size(cards.config.ranks), 13);
            });
            it('Poker for Deck Type', function () {
                assert.equal(cards.defaults.deckType, 'french');
            });
            it('with 52 cards', function () {
                assert.equal(_.size(cards.cards), 52);
            });
        });
    });
    describe('Configurables', function () {
        describe('piquet', function () {
            var cards = new playingCards({'deckType':'piquet'});
            it('Create a new deck of cards of the type piquet', function () {
                assert.equal(cards.config.deckType, 'piquet');
            });
            it('with 4 suits', function () {
                assert.equal(_.size(cards.config.suits), 4);
            });
            it('with 8 ranks', function () {
                assert.equal(_.size(cards.config.ranks), 8);
            });
            it('with 32 cards', function () {
                assert.equal(_.size(cards.cards), 32);
            });
        });
        describe('doppelkopf', function () {
            var cards = new playingCards({'deckType':'doppelkopf'});
            it('Create a new deck of cards of the type dopplekopf', function () {
                assert.equal(cards.config.deckType, 'doppelkopf');
            });
            it('with 4 suits', function () {
                assert.equal(_.size(cards.config.suits), 4);
            });
            it('with 6 ranks', function () {
                assert.equal(_.size(cards.config.ranks), 6);
            });
            it('with 24 cards', function () {
                assert.equal(_.size(cards.cards), 24);
            });
        });
        describe('multiple decks', function () {
            describe('piquet', function () {
                var cards = new playingCards({'deckType':'piquet', 'numberOfDecks': 2});
                it('with 64 cards', function () {
                    assert.equal(_.size(cards.cards), 64);
                });
            });
            describe('doppelkopf', function () {
                var cards = new playingCards({'deckType':'doppelkopf', 'numberOfDecks': 3});
                it('with 72 cards', function () {
                    assert.equal(_.size(cards.cards), 72);
                });
            });
            describe('french', function () {
                var cards = new playingCards({'deckType':'french', 'numberOfDecks': 4});
                it('with 208 cards', function () {
                    assert.equal(_.size(cards.cards), 208);
                });
            });
        });
        describe('Jokers', function () {
            describe('one deck null for Jokers', function () {
                var cards = new playingCards({'numberOfJokers': null});
                it('with 32 cards', function () {
                    assert.equal(_.size(cards.cards), 52);
                });
            });
            describe('one deck', function () {
                var cards = new playingCards({'numberOfJokers': 3});
                it('with 35 cards', function () {
                    assert.equal(_.size(cards.cards), 55);
                });
                it('tree of them Jokers', function() {
                    assert.equal((_.last(cards.cards)).rank, 'Joker');
                });
            });
            describe('multiple decks', function () {
                var cards = new playingCards({'numberOfDecks': 2, 'numberOfJokers': 3});
                it('with 110 cards', function () {
                    assert.equal(_.size(cards.cards), 110);
                });
                it('six of them Jokers', function() {
                    assert.equal((_.last(cards.cards)).rank, 'Joker');
                });
            });
        });
        describe('Wrong use', function () {
            describe('Handle null for deckType', function () {
                var cards = new playingCards({'deckType': null});
                it('One for Decks', function () {
                    assert.equal(cards.defaults.numberOfDecks, 1);
                });
                it('4 suits', function () {
                    assert.equal(_.size(cards.config.suits), 4);
                });
                it('13 ranks', function () {
                    assert.equal(_.size(cards.config.ranks), 13);
                });
                it('with 52 cards', function () {
                    assert.equal(_.size(cards.cards), 52);
                });
            });
            describe('Handle 0 for deck number', function () {
                var cards = new playingCards({'numberOfDecks': 0});
                it('One for Decks', function () {
                    assert.equal(cards.defaults.numberOfDecks, 1);
                });
                it('4 suits', function () {
                    assert.equal(_.size(cards.config.suits), 4);
                });
                it('13 ranks', function () {
                    assert.equal(_.size(cards.config.ranks), 13);
                });
                it('with 52 cards', function () {
                    assert.equal(_.size(cards.cards), 52);
                });
            });
             describe('Handle null for deck number', function () {
                var cards = new playingCards({'numberOfDecks': null});
                it('One for Decks', function () {
                    assert.equal(cards.defaults.numberOfDecks, 1);
                });
                it('4 suits', function () {
                    assert.equal(_.size(cards.config.suits), 4);
                });
                it('13 ranks', function () {
                    assert.equal(_.size(cards.config.ranks), 13);
                });
                it('with 52 cards', function () {
                    assert.equal(_.size(cards.cards), 52);
                });
            });
        });
    });
});