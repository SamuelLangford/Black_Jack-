$(document).ready(function(){   // jQuery onload syntax 
    
  function Card(kind,value1, suit, pic) {// frame for all cards 
	  this.kind = kind,//queen or king or 3 or 4 or any type of card
	  this.value1 = value1,//the numerical value 
	  this.suit = suit,//heart or spade you know
	  this.pic = pic//hope this works 
	}	
	  
	var deck = [ //an array of objects that are the cards 
	 aceOfSpades = new Card('Ace', 1, 'Spades',  "url(images/spade.jpeg)"),
	 aceOfHearts = new Card('Ace', 1,'Heart', "url(images/heart.png)"),
	 aceOfClubs = new Card('Ace', 1,'Club',"url(images/club.jpeg)"),
	 aceOfDimonds = new Card('Ace', 1, 'Dimond', "url(images/dimonds.png)"),
	
	 kingOfSpades = new Card('King', 10,'Spade', "url(images/spade.jpeg)"),
	 kingOfHearts = new Card('King', 10, 'Heart', "url(images/heart.png)"),
	 kingOfClubs = new Card('King', 10, 'Club', "url(images/club.jpeg)"),
	 kingOfDimonds = new Card('King', 10,'Dimond', "url(images/dimonds.png)"),
		
	 queenOfSpades = new Card('Queen', 10, 'Spade', "url(images/spade.jpeg)"),
	 queenOfHearts = new Card('Queen', 10, 'Heart', "url(images/heart.png)"),
	 queenOfClubs = new Card('Queen', 10, 'Club', "url(images/club.jpeg)"),
	 queenOfDimonds = new Card('Queen', 10, 'Dimond', "url(images/dimonds.png)"),

	 jackOfSpades = new Card('Jack', 10,'Spade', "url(images/spade.jpeg)"),
	 jackOfHearts = new Card('Jack', 10, 'Heart', "url(images/heart.png)"),
	 jackOfClubs = new Card('Jack', 10, 'Club', "url(images/club.jpeg)"),
	 jackOfDimonds = new Card('Jack', 10, 'Dimond', "url(images/dimonds.png)"), 

	 tenOfSpades = new Card('Ten', 10, 'Spade', "url(images/spade.jepg)"),
	 tenOfHearts = new Card('Ten', 10,'Heart', "url(images/heart.png)"),
	 tenOfClubs = new Card('Ten', 10, 'Club', "url(images/club.jpeg)"),
	 tenOfDimonds = new Card('Ten', 10, 'Dimond', "url(images/dimonds.png)"),

	 nineOfSpades = new Card('Nine', 9, 'Spade', "url(images/spade.jpeg)"),
	 nineOfHearts = new Card('Nine', 9,'Heart', "url(images/heart.png)"),
	 nineOfClubs = new Card('Nine', 9,'Heart', "url(images/club.jpeg)"),
	 nineOfDimonds = new Card('Nine', 9,'Dimond', "url(dimonds.png)"),

	 eightOfSpades = new Card('Eight', 8, 'Spade', "url(images/spade.jpeg)"),
	 eightOfHearts = new Card('Eight', 8, 'Heart', "url(images/heart.png)"),
	 eightOfClubs = new Card('Eight', 8, 'Club', "url(images/club.jpeg)"),
	 eightOfDimonds = new Card('Eight', 8, 'Dimond', "url(images/dimonds.png)"),

	 sevenOfSpades = new Card('Seven', 7,'Spade',"url(images/spade.jpeg)"),
	 sevenOfHearts = new Card('Seven', 7, 'Heart', "url(images/heart.png)"),
	 sevenOfClubs = new Card('Seven', 7, 'Club', "url(images/club.jpeg)"),
	 sevenOfDimonds = new Card('Seven', 7, 'Dimond', "url(images/dimonds.png)"),

	 sixOfSpades = new Card('Six', 6, 'Spade', "url(images/spade.jpeg)"),
	 sixOfHearts = new Card('Six', 6, 'Heart', "url(images/heart.png)"),
	 sixOfClubs = new Card('Six', 6, 'Club', "url(images/club.jpeg)"),
	 sixOfDimonds = new Card('Six', 6, 'Dimond', "url(images/dimonds.png)"),	 

	 fiveOfSpades = new Card('Five', 5, 'Spade', "url(images/spade.jpeg)"),
	 fiveOfHearts = new Card('Five', 5, 'Heart', "url(images/heart.png)"),
	 fiveOfClubs = new Card('Five', 5,'Club', "url(images/club.jpeg)"),
	 fiveOfDimonds = new Card('Five', 5, 'Dimond', "url(images/dimonds.png)"),

	 fourOfSpades = new Card('Four', 4, 'Spade', "url(images/spade.jpeg)"),
	 fourOfHearts = new Card('Four', 4, 'Heart', "url(images/heart.png)"),
	 fourOfClubs = new Card('Four', 4, 'Club', "url(images/club.jpeg)"),
	 fourOfDimonds = new Card('Four', 4, 'Dimond', "url(images/dimonds.png)"),

	 threeOfSpades = new Card('Three', 3, 'Spade', "url(images/spade.jpeg)"),
	 threeOfHearts = new Card('Three', 3, 'Heart', "url(images/heart.png)"),
	 threeOfClubs = new Card('Three', 3, 'Club', "url(images/club.jpeg)"),
	 threeOfDimonds = new Card('Three', 3, 'Dimond', "url(images/dimonds.png)"),

	 twoOfSpades = new Card('Two', 2, 'Spade', "url(images/spade.jpeg)"),
	 twoOfHearts = new Card('Two', 2, 'Heart', "url(images/heart.png)"),
	 twoOfClubs = new Card('Two', 2, 'Club', "url(images/club.jpeg)"),
	 twoOfDimonds = new Card('Two', 2, 'Dimond', "url(images/dimonds.png)")
	  ]	
	  // $('#cash').text(player.cash);	
	 	var player = { 
	 		cash: 100, 
	 		cardValue: 0, 
	 		bet: 0 
	 	};	
	 	$('#cash').text("You have $" + player.cash);
	  
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
	 		// $('#cash').text(player.cash);	
	 		// console.log('You got too much shit');
	 		player.cash -= player.bet;//takes away from cash however much the player bet if he lost. 
	 		//console.log(player);
 	 		$('.hit').remove();	
	 		$('.stay').remove();
	 		// $('#cash').text(player.cash);
	 		$('#cash').text("You have this much $" + player.cash);
	 		$('.deal-button').show(); 	
	 		$('#player-cards') .children().remove();//removes cards from player and dealer
			$('#dealer-cards').children().remove();
 	 		

 	 		if(player.cash <= 0){
	 			alert('Get out of my house');	 ;
	 		}
	 	}
	 }
	
			var getCard = function(what, where) {  
	 			var thisHit = randomCard();//gets the randdom card
		 		checkForBust();

				var newDiv = $("<div>").addClass('card-pic')
				newDiv.click(function(){ //changes ace from 1 to 11
	 			if(thisHit.value1 === 1){
	 				thisHit.value1 = 11;
	 				player.cardValue += 10;
	 				$('#cardStock').text("Wow those are some pretty nice cards " + player.cardValue);
	 
	 			}else if(thisHit.value1 === 11){
	 				thisHit.value1 = 1;
	 				player.cardValue -= 10;
	 				$('#cardStock').text("Wow those are some pretty nice cards " + player.cardValue);
	 			}
	 		});
	 		// this is creates a div with the class of card 
				
				$(newDiv).css({"background-image": thisHit.pic, 'width': '20%'});//this makes the divs back ground the image 
				
				$(where).append(newDiv);//this puts the new div at the bottom of player-card container 		
				newDiv.text(thisHit.kind);
				 number = thisHit.value1;
				 return number;
		 }//ends get card function;
	 		$('.deal-button').click(function(){//this funciton gives you 4 cards and 4 sets of values 
			if(player.bet === 0){// so a player must place a bet before playing 
				alert('You must place your bet before starting');
				return 0;
			}//ends if statment 
				dealerValue = 0;//sets the dealerValue to 0
				player.cardValue = 0;//sets player card value to 0 
			 			
			 		player.cardValue += getCard(player.cardValue, '#player-cards');//gives 2 cards to the player and dealer a
				  player.cardValue += getCard(player.cardValue, '#player-cards');
				  dealerValue += getCard(dealerValue, '#dealer-cards');
				  $('<div class="card-pic" id="secret"></div>').appendTo('#dealer-cards');
				  $('h5').text(dealerValue);
				  $('#cardStock').text("Wow those are some pretty nice cards " + player.cardValue);
			
			if(dealerValue === 21 || player.cardValue=== 21){//black jack 
				// console.log('Black Jack!');
			}//endsifstatement 

				$('.deal-button').hide();			//	$('.deal-button').remove(); //removes the deal button 
				$('<button>These cards are alright.</button>').attr('class', "stay").prependTo('body');
			  $('<button>Excuse me, i\'d like another card. </button>').attr('class', "hit").prependTo('body')//.click(getCard(player.cardValue, '#player-cards'));
			// })//ends deal-button function 
			
				$('.hit').click(function(){
					player.cardValue += getCard(player.cardValue, '#player-cards');
					checkForBust();
					$('#cardStock').text("Your hand is " + player.cardValue);
				})//ends click event

					
					 $('.stay').click(function(){
				 		 	$('#secret').remove();
				 		 	 dealerValue += getCard(dealerValue, '#dealer-cards');
				 		 	 if(dealerValue < 17){
				  	 dealerValue += getCard(dealerValue, '#dealer-cards');
				  	 $('h5').text(dealerValue);
				  }
   			 	setTimeout(function(){
   			 		if(dealerValue > player.cardValue && dealerValue <= 21){
		 		 		player.cash -= player.bet;
		 		 		$('span').text('You really suck at black jack ');
		 		 		$('h5').text(dealerValue);
	 			 } else if(player.cardValue > dealerValue){
		 		 			player.cash+=player.bet;
		 		 			$('span').text('You won I guess');
		 		 			 var coinSound = new Audio("styles/smw_coin.wav");
  							coinSound.play();
		 		 }else{
		 		 			$('span').text('Your the most mediocore person i\'ve ever met');
		 		 }
		
				$('h5').text('');
				$('#cash').text("You have this much $" + player.cash);//updates cash
		 		$('.deal-button').show();//puts the deal button back
				$('.hit').remove();// removes hit button
				$('.stay').remove();//removes stay button
				$('#player-cards') .children().remove();//removes cards from player and dealer
				$('#dealer-cards').children().remove();
				player.bet = 0;
				player.cardValue = 0;
				console.log(player.bet);
				$('p').text(player.bet);
				$('#cardStock').text('');

	 				},800)})//ends the stay button function 
		
				// var hitButton = document.getElementById('hit');
	 		// 	hitButton.onClick(console.log('hello'));
	 	})//ends deal-button function 	  	
			// $('#cash').text("You have this much $" + player.cash);

	 	$('#canned-food').click(function(){
	 		player.bet += 1;
	 		if(player.bet > player.cash){player.bet = player.cash};
	 		$('p').text('You are betting $' + player.bet);
	 		// console.log(player)
	 	})//workds
	 	$('#ammo').click(function(){ 
	 		player.bet += 5;
	 		if(player.bet > player.cash){player.bet = player.cash};
	 		$('p').text('You are betting $' + player.bet);
	 		// console.log(player)
	 	})//works
	 	$('#firstaid').click(function(){
	 		player.bet += 10;
	 		if(player.bet > player.cash){player.bet = player.cash};
	 		$('p').text('You are betting $' + player.bet);
	 		// console.log(player)
	 	})//works
	 	$('#gun').click(function(){
	 		player.bet += 50;
	 		if(player.bet > player.cash){player.bet = player.cash};
	 		$('p').text('You are betting $' + player.bet);
	 		 		// console.log(player)
	 	})//works
 })//end window on load 
