Cards
=====
[![Build Status](https://travis-ci.org/leonkunert/cards.png?branch=master)](https://travis-ci.org/leonkunert/cards.png?branch=master)
[![Analytics](https://ga-beacon.appspot.com/UA-46810739-1/cards/overview)](https://github.com/igrigorik/ga-beacon)

This is a Playingcards module for node. It's easily extensible  so it would be easy to add more and different cardset-types. 

##Include
```
playingCards = require('/path/to/cards.js');
```

##To make a new Deck:
```JavaScript
new playingCards();
```

##Options
```JavaScript
new playingCards({
    /* 
     * Type of deck possible values
     * french 52 cards 2 to Ass <- Default
     * piquet 32 cards 7 to Ass
     * doppelkopf 24 cards 9 to Ass
     */
    'deckType': 'french',
    /*
     * Multiple Decks are possible
     */
    'numberOfDecks' : 1,
    /*
     * The number of Jokers per Deck
     */
    'numberOfJokers': 0,
    /*
     * If the Deck should come shuffled
     */
    'startShuffled' : false 
});
```

##Dealing
```JavaScript
cards.deal(int NumberOfCards);
```
Cards that were dealed are removed from the Deck of course.


Thanks to [atomantic](https://github.com/atomantic) for the Idea and some code I used.
