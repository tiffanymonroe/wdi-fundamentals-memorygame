 console.log("Up and running!");

  var cards = ["queen", "queen", "king", "king"];
  var cardsInPlay = [];
  var cardOne = cards[0];
  cardsInPlay.push(cardOne);
  cardsInPlay;
  var cardTwo = cards[2];
  cardsInPlay.push(cardTwo);
  cardsInPlay;

  console.log("User flipped " + cardsInPlay);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) alert('You found a match!');
  if (cardsInPlay[0] != cardsInPlay[1]) alert('Sorry, try again.');
}
