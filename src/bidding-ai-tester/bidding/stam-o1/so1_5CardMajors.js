function fiveCardMajors() {
  var bid = "";
  if (
    (hand.numS === 4 && hand.numC <= hand.numD) ||
    (hand.numH === 4 && hand.numC < hand.numD)
  ) {
    bid = "1d";
  }
  if (
    (hand.numS === 4 && hand.numC >= hand.numD) ||
    (hand.numH === 4 && hand.numC >= hand.numD)
  ) {
    bid = "1c";
  }
  if (hand.numS >= 5 && hand.numS >= hand.numH) {
    bid = "1s";
  }
  if (hand.numH >= 5 && hand.numS < hand.numH) {
    bid = "1h";
  }
  if (bid === "") {
    /* json here */
    var fiveCardMajors = [
      {
        bidder: "o1",
        minTP: 13,
        maxTP: 15,
        strength: "min",
        minNumS: "",
        maxNumS: 4,
        minNumH: "",
        maxNumH: 4,
        minNumD: "",
        maxNumD: 3,
        minNumC: 4,
        maxNumC: 4,
        o1Index: 1,
        o1Bid: "1c",
      },
      {
        bidder: "o1",
        minTP: 16,
        maxTP: 17,
        strength: "med",
        minNumS: "",
        maxNumS: 4,
        minNumH: "",
        maxNumH: 4,
        minNumD: "",
        maxNumD: 3,
        minNumC: 4,
        maxNumC: 4,
        o1Index: 1,
        o1Bid: "1c",
      },
      {
        bidder: "o1",
        minTP: 18,
        maxTP: 19,
        strength: "max",
        minNumS: "",
        maxNumS: 4,
        minNumH: "",
        maxNumH: 4,
        minNumD: "",
        maxNumD: 3,
        minNumC: 4,
        maxNumC: 4,
        o1Index: 1,
        o1Bid: "1c",
      },
      {
        bidder: "o1",
        minTP: 13,
        maxTP: 15,
        strength: "min",
        minNumS: "",
        maxNumS: 4,
        minNumH: "",
        maxNumH: 4,
        minNumD: 4,
        maxNumD: 4,
        minNumC: "",
        maxNumC: 3,
        o1Index: 2,
        o1Bid: "1d",
      },
      {
        bidder: "o1",
        minTP: 16,
        maxTP: 17,
        strength: "med",
        minNumS: "",
        maxNumS: 4,
        minNumH: "",
        maxNumH: 4,
        minNumD: 4,
        maxNumD: 4,
        minNumC: "",
        maxNumC: 3,
        o1Index: 2,
        o1Bid: "1d",
      },
      {
        bidder: "o1",
        minTP: 18,
        maxTP: 19,
        strength: "max",
        minNumS: "",
        maxNumS: 4,
        minNumH: "",
        maxNumH: 4,
        minNumD: 4,
        maxNumD: 4,
        minNumC: "",
        maxNumC: 3,
        o1Index: 2,
        o1Bid: "1d",
      },
      {
        bidder: "o1",
        minTP: 13,
        maxTP: 15,
        strength: "min",
        minNumS: "",
        maxNumS: 4,
        minNumH: "",
        maxNumH: 4,
        minNumD: 4,
        maxNumD: 4,
        minNumC: 4,
        maxNumC: 4,
        o1Index: 1,
        o1Bid: "1c",
      },
      {
        bidder: "o1",
        minTP: 16,
        maxTP: 17,
        strength: "med",
        minNumS: "",
        maxNumS: 4,
        minNumH: "",
        maxNumH: 4,
        minNumD: 4,
        maxNumD: 4,
        minNumC: 4,
        maxNumC: 4,
        o1Index: 1,
        o1Bid: "1c",
      },
      {
        bidder: "o1",
        minTP: 18,
        maxTP: 19,
        strength: "max",
        minNumS: "",
        maxNumS: 4,
        minNumH: "",
        maxNumH: 4,
        minNumD: 4,
        maxNumD: 4,
        minNumC: 4,
        maxNumC: 4,
        o1Index: 1,
        o1Bid: "1c",
      },
    ];

    /* arrow function */

    var rebidFiveCardMajors = fiveCardMajors.filter(
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
    console.table(rebidFiveCardMajors);
    if (rebidFiveCardMajors != null) {
      bid = rebidFiveCardMajors[0].o1Bid;
    }
  }
  return bid;
}
