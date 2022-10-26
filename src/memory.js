class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    } else { return this.cards.sort(() => Math.random() - 0.5) }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else { return false }
  }


  checkIfFinished() {
    // ... write your code here
    let totalPairs = this.cards.length / 2
    console.log(totalPairs)
    if (!this.pairsGuessed) {
      return false
    } if (this.pairsGuessed === totalPairs) {
      return true
    } else {
      return false
    }
  }
}