# Black_Jack-
A fun game!
# Black Jack
http://samuellangford.github.io/Black_Jack-/

https://github.com/SamuelLangford/WDI_NYC_Meeseeks/tree/master/unit_01/w03d05/homework/connectfour

Description
Card game that allows users to bet against the computer using a 52 card deck to try and get to 21

This is a description of the app

##Tech used

HTML
CSS
Javascript
jQuery

### Features
function Card(kind,value1, suit, pic) {// frame for all cards 
	  this.kind = kind,//queen or king or 3 or 4 or any type of card
	  this.value1 = value1,//the numerical value 
	  this.suit = suit,//heart or spade you know
	  this.pic = pic
	}
I made a constructor that takes in 4 parameters, the suit, the value, the kind, and a picture url I use the values from this to find the hand totals and display the card on the page, the player is also an object with cash, bet and card values, I use these to keep track of the game. 

  function Card(kind,value1, suit, pic) {// frame for all cards 
	  this.kind = kind,//queen or king or 3 or 4 or any type of card
	  this.value1 = value1,//the numerical value 
	  this.suit = suit,//heart or spade you know
	  this.pic = pic
	}
 
### How it works
everything runs off of click events and hiding and removing buttons. The score of the game is kept as the player's cash value, if that hits 0 than the game is over. If you win the hand the amount bet that hand will be added to the player's cash.

### Future Implementations
I would like to add some more styling including better card backgrounds and fade in efffects for the cards.
 
I would also like to add in a feature that allows multiple players to all play remotely. 
