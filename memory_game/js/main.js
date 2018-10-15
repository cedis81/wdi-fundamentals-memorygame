var cards = ["queen","queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[2];
cardsInPlay.push(cardOne);
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);

console.log("User flipped" + " " + cardOne);
console.log("User flipped" + " " + cardTwo);

if (cardsInPlay.length === 2) {
	console.log(cardsInPlay.length);
    if (cardsInPlay[0] === cardsInPlay[1]) {
	    alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
} else {
	console.log("Need to draw more cards");
}