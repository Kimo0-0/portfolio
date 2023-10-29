let cardCount = 0;
let i = 1;
let cards = document.querySelectorAll(".port-card");
document.querySelector(`.port-cards .after`).onclick = () => {
  cardCount++;
  seenCard();
};
document.querySelector(`.port-cards .before`).onclick = () => {
  cardCount--;
  seenCard();
};
function seenCard() {
  if (cardCount === -1) {
    cardCount = cards.length - 1;
  }
  if (cardCount === cards.length) {
    cardCount = 0;
  }
  cards.forEach((card) => {
    card.classList.remove("seen");
  });
  cards[cardCount].classList.add("seen");
  cards[cardCount].style.zIndex = ++i;
}
let CardsInterval = setInterval(() => {
  cardCount++;
  seenCard();
}, 5000);

let copy = () => {
  input = document.createElement("input")
  input.setAttribute("value", "+201032452988")
  document.body.appendChild(input)
  input.select()
  document.execCommand("copy")
  document.body.removeChild(input)
}