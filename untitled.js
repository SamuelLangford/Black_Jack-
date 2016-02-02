$(document).ready(function(){   // jQuery onload syntax 
    
  function Card(kind,value1, suit, pic, ) {// frame for all cards 
	  this.kind = kind,//queen or king or 3 or 4 or any type of card
	  this.value1 = value1,//the numerical value 
	  this.suit = suit,//heart or spade you know
	  this.pic = pic//hope this works 
	}	
	  
	var deck = [ //an array of objects that are the cards 
	 aceOfSpades = new Card('Ace', 1, 'Spades', 'url(ace.jpg)'),
	 aceOfHearts = new Card('Ace', 1,'Heart', 'url(ace.jpg)'),
	 aceOfClubs = new Card('Ace', 1,'Club', 'url(ace.jpg)'),
	 aceOfDimonds = new Card('Ace', 1, 'Dimond', 'url(ace.jpg)'),
	
	 kingOfSpades = new Card('King', 10,'Spade', 'url(RickGrimesKing.jackpg)'),
	 kingOfHearts = new Card('King', 10, 'Heart', 'url(RickGrimesKing.jpg)'),
	 kingOfClubs = new Card('King', 10, 'Club', 'url(RickGrimesKing.jpg)'),
	 kingOfDimonds = new Card('King', 10,'Dimond', 'url(RickGrimesKing.jpg)'),
		
	 queenOfSpades = new Card('Queen', 10, 'Spade', 'url(queen.jpg)'),
	 queenOfHearts = new Card('Queen', 10, 'Heart', 'url(queen.jpg)'),
	 queenOfClubs = new Card('Queen', 10, 'Club', 'url(queen.jpg)'),
	 queenOfDimonds = new Card('Queen', 10, 'Dimond', 'url(queen.jpg)'),

	 jackOfSpades = new Card('Jack', 10,'Spade', 'url(jack.png)'),
	 jackOfHearts = new Card('Jack', 10, 'Heart', 'url(jack.png)'),
	 jackOfClubs = new Card('Jack', 10, 'Club', 'url(jack.png)'),
	 jackOfDimonds = new Card('Jack', 10, 'Dimond', 'url(jack.png)'), 

	 tenOfSpades = new Card('Ten', 10, 'Spade', 'url(ten.jpg)'),
	 tenOfHearts = new Card('Ten', 10,'Heart', 'url(ten.jpg)'),
	 tenOfClubs = new Card('Ten', 10, 'Club', 'url(ten.jpg)'),
	 tenOfDimonds = new Card('Ten', 10, 'Dimond', 'url(ten.jpg)'),

	 nineOfSpades = new Card('Nine', 9, 'Spade', 'url(nine.jpg)'),
	 nineOfHearts = new Card('Nine', 9,'Heart', 'url(nine.jpg)'),
	 nineOfClubs = new Card('Nine', 9,'Heart', 'url(nine.jpg)'),
	 nineOfDimonds = new Card('Nine', 9,'Dimond', 'url(nine.jpg)'),

	 eightOfSpades = new Card('Eight', 8, 'Spade', 'url(eight.png)'),
	 eightOfHearts = new Card('Eight', 8, 'Heart', 'url(eight.png)'),
	 eightOfClubs = new Card('Eight', 8, 'Club', 'url(eight.png)'),
	 eightOfDimonds = new Card('Eight', 8, 'Dimond', 'url(eight.png)'),

	 sevenOfSpades = new Card('Seven', 7,'Spade', 'url(seven.jpg)'),
	 sevenOfHearts = new Card('Seven', 7, 'Heart', 'url(seven.jpg)'),
	 sevenOfClubs = new Card('Seven', 7, 'Club', 'url(seven.jpg)'),
	 sevenOfDimonds = new Card('Seven', 7, 'Dimond', 'url(seven.jpg)'),

	 sixOfSpades = new Card('Six', 6, 'Spade', 'url(six.jpg)'),
	 sixOfHearts = new Card('Six', 6, 'Heart', 'url(six.jpg)'),
	 sixOfClubs = new Card('Six', 6, 'Club', 'url(six.jpg)'),
	 sixOfDimonds = new Card('Six', 6, 'Dimond', 'url(six.jpg)'),	 

	 fiveOfSpades = new Card('Five', 5, 'Spade', 'url(five.jpg)'),
	 fiveOfHearts = new Card('Five', 5, 'Heart', 'url(five.jpg)'),
	 fiveOfClubs = new Card('Five', 5,'Club', 'url(five.jpg)'),
	 fiveOfDimonds = new Card('Five', 5, 'Dimond', 'url(five.jpg)'),

	 fourOfSpades = new Card('Four', 4, 'Spade', 'url(four.png)'),
	 fourOfHearts = new Card('Four', 4, 'Heart', 'url(four.png)'),
	 fourOfClubs = new Card('Four', 4, 'Club', 'url(four.png)'),
	 fourOfDimonds = new Card('Four', 4, 'Dimond', 'url(four.png)'),

	 threeOfSpades = new Card('Three', 3, 'Spade', 'url(three.jpg)'),
	 threeOfHearts = new Card('Three', 3, 'Heart', 'url(three.jpg)'),
	 threeOfClubs = new Card('Three', 3, 'Club', 'url(three.jpg)'),
	 threeOfDimonds = new Card('Three', 3, 'Dimond', 'url(three.jpg)'),

	 twoOfSpades = new Card('Two', 2, 'Spade', 'url(two.png)'),
	 twoOfHearts = new Card('Two', 2, 'Heart', 'url(two.png)'),
	 twoOfClubs = new Card('Two', 2, 'Club', 'url(two.png)'),
	 twoOfDimonds = new Card('Two', 2, 'Dimond', 'url(two.png)')
	  ]	
	 	var player = { 
	 		cash: 100, 
	 		cardValue: 0, 
	 		bet: 0 
	 	};	
	  var dealerValue = 0;//dealers card value
	 
	  var randomCard = function(){//gets me a random value from my deck of cards 
	 		var card = deck[Math.floor(deck.length * Math.random())];//this works do not touch
	 		// console.log(card);
	 		return card;
	 		// console.log(deck);
	 	}//ends the random fucntion

	 		var checkForBust = function(){
	 		if(player.cardValue > 21){// card value is how the value of the cards the player has that turn. so a 7 and 4 will be 12 card value
	 		//console.log('You have busted');
	 		console.log('You got too much shit');
	 		player.cash -= player.bet;//takes away from cash however much the player bet if he lost. 
	 		//console.log(player);
 	 		if(player.cash >= 0){//0 cash meens you loose. 
	 			console.log('You have no more resouces you loose');	 		
	 		}
	 	}
	 }
			// $(document).on('click', '.deleteButton', function(){...}	
			var getCard = function(what, where) {  // '#player-cards') options for player ||dealerValue,  '#dealer-cards') options for dealer
	 			var thisHit = randomCard();//gets the randdom card
	 		// 	console.log(noun1);

				// console.log(thisHit);
		 		
		 		checkForBust();
				
				var newDiv = $("<div>").addClass('card-pic');// this is creates a div with the class of card 
				
				$(newDiv).css("background-image", thisHit.pic);//this makes the divs back ground the image 
				
				$(where).append(newDiv);//this puts the new div at the bottom of player-card container 		
				
				$(newDiv).append(thisHit.kind + " of " + thisHit.suit);	
	
				 number = thisHit.value1;

				 return number;
				// console.log(player.cardValue);
		 }//ends get card function;
		 // $(document).on('click', '.deal-button', function(){
	 		$('.deal-button').click(function(){//this funciton should give you 4 cards and 4 sets of values 
			// console.log('clcked deal button');
			if(player.bet === 0){// so a player must place a bet before playing 
				alert('You must place your bet before starting');
				return 0;
			}//ends if statment 
				// dealerValue = 20;//sets the dealerValue to 0
				// player.cardValue = 40;//sets player card value to 0 
			 			
			 		player.cardValue += getCard(player.cardValue, '#player-cards');//gives 2 cards to the player and dealer a
				  player.cardValue += getCard(player.cardValue, '#player-cards');
				  dealerValue += getCard(dealerValue, '#dealer-cards');
				  dealerValue += getCard(dealerValue, '#dealer-cards');
				  console.log(dealerValue);
				  console.log(player.cardValue);

				  //console.log('this is getCard '+ getCard(player.cardValue, '#player-cards'));
			
			if(dealerValue === 21 || player.cardValue=== 21){//black jack 
				console.log('Black Jack!');
			}//endsifstatement 

				$('.deal-button').remove(); //removes the deal button 
				$('<button>Stay</button>').attr('class', "stay").prependTo('body');
			  $('<button>Try your luck</button>').attr('class', "hit").prependTo('body')//.click(getCard(player.cardValue, '#player-cards'));
			
				
				// $("#hit").click(getCard(player.cardValue, '#player-cards'));	
			
				$('.hit').click(function(){
					player.cardValue += getCard(player.cardValue, '#player-cards');
					checkForBust();
					console.log(player.cardValue);
				})

					
					 $('.stay').click(function(){
	 		 	// console.log('hello from stay');
				 		 	console.log("This is players card value "+ player.cardValue);
				 		 	console.log("This is dealer  card value "+ dealerValue);
				 		 	
   			 	if(dealerValue > player.cardValue){
		 		 		console.log('You loose this round');
		 		 		player.cash -= player.bet;
		 		 		console.log(player);
	 			 } else if(player.cardValue > dealerValue){
		 		 			player.cash+=player.bet;
		 					console.log(player);
		 					console.log('player wins' + player.cardValue);	
		 		 }
		 		$('<button>Deal</button>').attr('class', "deal-button").prependTo('body');
				$('.hit').remove();
				$('.stay').remove();
	 				})
		
				// var hitButton = document.getElementById('hit');
	 		// 	hitButton.onClick(console.log('hello'));
	 	})//ends deal-button function 	  	


	 	$('#canned-food').click(function(){
	 		player.bet += 1;
	 		$('p').text(player.bet);
	 		console.log(player)
	 	})//workds
	 	$('#ammo').click(function(){ 
	 		player.bet += 5;
	 		$('p').text(player.bet);
	 		console.log(player)
	 	})//works
	 	$('#firstaid').click(function(){
	 		player.bet += 10;
	 		$('p').text(player.bet);
	 		console.log(player)
	 	})//works
	 	$('#gun').click(function(){
	 		player.bet += 50;
	 		$('p').text(player.bet);
	 		 		console.log(player)
	 	})//works


 })



			

$('#dealer-cards').appendTo(dealervalue);

$(dealerValue).appendTo('#dealer-cards');























			 var $hitButton = $('<button>Hit</button>').attr('id', 'hit').prependTo('body')
			 $hitButton.click(function()	{// hit button uses random card function 	
	 		var thisHit = randomCard();
	 		// $('#player-cards').append(thisHit.kind + " of " + thisHit.suit)
	 		
	 		player.cardValue += thisHit.value1;//adds to player value which is like their score for the turn 
	 		
	 		checkForBust();//checks to see if the card goes over 21
	 		console.log('player value is' +player.cardValue);

	 		// console.log(thisHit.pic);
	 		
	 		var newDiv = $("<div>").addClass('card-pic')// this is creates a div with the class of card 
	 		
	 		$(newDiv).css('background-image', thisHit.pic);//this makes the divs back ground the image 
	 		
	 		$('#player-cards').append(newDiv);//this puts the new div at the bottom of player-card container 
	 		
	 		$(newDiv).append(thisHit.kind + " of " + thisHit.suit)
	 		})


			 var getCard = function(noun1, noun2, ) {// noun1 can maybe be player.cardValue or dealerValue
			 	//noun2 can either be  '#player-cards' or '#dealer-cards'
			 	var thisHit = randomCard();//gets the randdom card
			 	thisHit.value1 += noun1// adds the cards value to either the playervalue or the dealervalue 
			 	checkForBust();//check for bust 

	 			var newDiv = $("<div>").addClass('card-pic')// this is creates a div with the class of card 
	 		
	 			$(newDiv).css('background-image', thisHit.pic);//this makes the divs back ground the image 
	 		
	 			$(noun2).append(newDiv);//this puts the new div at the bottom of player-card container 
	 		
	 			$(newDiv).append(thisHit.kind + " of " + thisHit.suit
				 }
				  getCard(player.cardValue, '#player-cards')
				  getCard(player.cardValue, '#player-cards')
				  getCard(dealerValue,  '#dealer-cards')
				  getCard(dealerValue,  '#dealer-cards')

			  function Card(kind,value1, suit, pic) {// frame for all cards 
	  this.kind = kind,//queen or king or 3 or 4 or any type of card
	  this.value1 = value1,//the numerical value 
	  this.suit = suit,//heart or spade you know
	  this.pic = pic//hope this works 
	}	
			var player = {// humans are nothing but OBJECTS to me haha. 
	 		cash: 100 ,//beting cash
	 		cardValue: 0 ,//how close to 21 they are that turn
	 		bet: 0//how much they have bet should be set to 0 at the start of each deal. 
	 	}

			// start comment function()	{// hit button uses random card function 	
	 	// 	var thisHit = randomCard();
	 	// 	// $('#player-cards').append(thisHit.kind + " of " + thisHit.suit)
	 		
	 	// 	player.cardValue+= thisHit.value1;//adds to player value which is like their score for the turn 
	 		
	 	// 	checkForBust();//checks to see if the card goes over 21
	 	// 	console.log('player value is' +player.cardValue);

	 	// 	// console.log(thisHit.pic);
	 		
	 	// 	var newDiv = $("<div>").addClass('card-pic')// this is creates a div with the class of card 
	 		
	 	// 	$(newDiv).css('background-image', thisHit.pic);//this makes the divs back ground the image 
	 		
	 	// 	$('#player-cards').append(newDiv);//this puts the new div at the bottom of player-card container 
	 		
	 	// 	$(newDiv).append(thisHit.kind + " of " + thisHit.suit) end 
	 	// 	}) ends comment 
	 		//this puts the suit and kind of the div  
	 		 // console.log(deck);
	 		// console.log(deck.length);