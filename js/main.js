var cards = [
{ rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png",
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png",
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png",
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png",
}
];
  var cardsInPlay = [];
  var checkForMatch = function (){
    document.getElementsByTagName('cardImage')[0].setAttribute('src');
    if (cardsInPlay.length === 2) {
      if (cardsInPlay[0] === cardsInPlay[1]) alert('You found a match!');
      if (cardsInPlay[0] != cardsInPlay[1]) alert('Sorry, try again.');
    }
  }
  var flipCard = function () {
    this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank)
    cardsInPlay.push(cards[cardId].rank)
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
  }

  var createBoard = function () {
    for (var i = 0; i < cards.length; i += 1) {
      var cardElement = document.createElement('img', "images/back.png");
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      document.getElementsByTagName('game-board')[0].appendChild(cards);
      gameBoard();
    }
  }

createBoard();
