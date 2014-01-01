// Inculuding Assert module and the Cardsjs
var assert         = require("assert")
    , playingCards = require("../cards.js");

describe('Setup', function(){
    it('should just be succeeding', function(){
        assert.equal(1, 1);
        assert.equal(-1, -1);
    })
});

describe('Default', function(){
    describe('Structural', function(){
        describe('Should create a new set of cards', function(){
            var cards = new playingCards();
            it('with Jacks', function(){
                assert.ok(cards.config.jacks, 'Jacks are turned of.');
            });
            it('with One Deck', function(){
                assert.equal(cards.config.jacks, 1, 'Number of Decks are wrong.');
            });
        });
    });
});