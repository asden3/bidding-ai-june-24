export default function (hand) {
  var openingGame = [
    {
      bidder: "o1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "pre",
      minNumS: 8,
      maxNumS: "",
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: "",
      minNumC: "",
      maxNumC: "",
      o1Index: 19,
      o1Bid: "4s",
    },
    {
      bidder: "o1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "pre",
      minNumS: "",
      maxNumS: 3,
      minNumH: 8,
      maxNumH: 8,
      minNumD: "",
      maxNumD: "",
      minNumC: "",
      maxNumC: "",
      o1Index: 18,
      o1Bid: "4h",
    },
    {
      bidder: "o1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "pre",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 9,
      maxNumD: "",
      minNumC: "",
      maxNumC: "",
      o1Index: 22,
      o1Bid: "5d",
    },
    {
      bidder: "o1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "pre",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: "",
      minNumC: 9,
      maxNumC: "",
      o1Index: 21,
      o1Bid: "5c",
    },
  ];

  var rebidOpeningGame = openingGame.filter(
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
  return rebidOpeningGame;
}
