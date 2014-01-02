// Inculuding Assert module and the Cardsjs
var assert         = require("assert")
    , playingCards = require("../cards.js");

describe('Setup', function(){
    it('should just be succeeding', function(){
        assert.equal(1, 1);
        assert.equal(-1, -1);
    })
});

describe('Real Tests', function(){
    describe('Structural', function(){
        describe('Defaults Should be', function(){
            var cards = new playingCards();
            it('One for Decks', function(){
                assert.equal(cards.defaults.decks, 1);
            });
            it('Poker for Deck Type', function(){
                assert.equal(cards.defaults.deckType, 'french');
            });
        });
    });
    describe('Configurables', function () {
        describe('piquet', function () {
            var cards = new playingCards({"deckType":'piquet'});
            it('Create a new deck of cards of the type piquet', function(){
                assert.equal(cards.config.deckType, 'piquet');
            });
        });
        describe('doppelkopf', function(){
            var cards = new playingCards({"deckType":'doppelkopf'});
            it('Create a new deck of cards of the type dopplekopf', function(){
                assert.equal(cards.config.deckType, 'doppelkopf');
            });
        });
    });
});