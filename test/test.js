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
    });
});