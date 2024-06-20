function getOpenNoTrump(hand) {
  if (hcpInEverySuit(hand) != true) {
    var openNoTrump = [
      {
        bidder: "o1",
        weight: 1,
        minHCP: 15,
        maxHCP: 17,
        strength: "min",
        minNumS: 2,
        maxNumS: 5,
        minNumH: 2,
        maxNumH: 4,
        minNumD: 2,
        maxNumD: 5,
        minNumC: 2,
        maxNumC: 5,
        o1Index: 5,
        o1Bid: "1nt",
      },
      {
        bidder: "o1",
        weight: 1,
        minHCP: 15,
        maxHCP: 17,
        strength: "min",
        minNumS: 2,
        maxNumS: 4,
        minNumH: 2,
        maxNumH: 5,
        minNumD: 2,
        maxNumD: 5,
        minNumC: 2,
        maxNumC: 5,
        o1Index: 5,
        o1Bid: "1nt",
      },
      {
        bidder: "o1",
        weight: 1,
        minHCP: 20,
        maxHCP: 22,
        strength: "med",
        minNumS: 2,
        maxNumS: 5,
        minNumH: 2,
        maxNumH: 5,
        minNumD: 2,
        maxNumD: 5,
        minNumC: 2,
        maxNumC: 5,
        o1Index: 10,
        o1Bid: "2nt",
      },
      {
        bidder: "o1",
        weight: 1,
        minHCP: 23,
        maxHCP: 25,
        strength: "max",
        minNumS: 2,
        maxNumS: 5,
        minNumH: 2,
        maxNumH: 5,
        minNumD: 2,
        maxNumD: 5,
        minNumC: 2,
        maxNumC: 5,
        o1Index: 15,
        o1Bid: "3nt",
      },
    ];
    var rebidOpenNoTrump = openNoTrump.filter(
      (itemsInArray) =>
        hand.strength === itemsInArray.strength &&
        (hand.numS >= itemsInArray.minNumS || itemsInArray.minNumS === "") &&
        (hand.numS <= itemsInArray.maxNumS || itemsInArray.maxNumS === "") &&
        (hand.numH >= itemsInArray.minNumH || itemsInArray.minNumH === "") &&
        (hand.numH <= itemsInArray.maxNumH || itemsInArray.maxNumH === "") &&
        (hand.numD >= itemsInArray.minNumD || itemsInArray.minNumD === "") &&
        (hand.numD <= itemsInArray.maxNumD || itemsInArray.maxNumD === "") &&
        (hand.numC >= itemsInArray.minNumC || itemsInArray.minNumC === "") &&
        (hand.numC <= itemsInArray.maxNumC || itemsInArray.maxNumC === "")
    );
  }
  return rebidOpenNoTrump;
}
