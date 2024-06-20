var opening3Level = [
  {
    bidder: "o1",
    weight: 1,
    minHCP: 7,
    maxHCP: 10,
    strength: "min",
    minNumS: 7,
    maxNumS: 8,
    minNumH: "",
    maxNumH: 3,
    minNumD: "",
    maxNumD: "",
    minNumC: "",
    maxNumC: "",
    o1Index: 14,
    o1Bid: "3s",
  },
  {
    bidder: "o1",
    weight: 1,
    minHCP: 7,
    maxHCP: 10,
    strength: "min",
    minNumS: "",
    maxNumS: 3,
    minNumH: 7,
    maxNumH: 8,
    minNumD: "",
    maxNumD: "",
    minNumC: "",
    maxNumC: "",
    o1Index: 13,
    o1Bid: "3h",
  },
  {
    bidder: "o1",
    weight: 1,
    minHCP: 7,
    maxHCP: 10,
    strength: "min",
    minNumS: "",
    maxNumS: 3,
    minNumH: "",
    maxNumH: 3,
    minNumD: 7,
    maxNumD: 8,
    minNumC: "",
    maxNumC: "",
    o1Index: 12,
    o1Bid: "3d",
  },
  {
    bidder: "o1",
    weight: 1,
    minHCP: 7,
    maxHCP: 10,
    strength: "min",
    minNumS: "",
    maxNumS: 3,
    minNumH: "",
    maxNumH: 3,
    minNumD: "",
    maxNumD: "",
    minNumC: 7,
    maxNumC: 8,
    o1Index: 11,
    o1Bid: "3c",
  },
];
var rebidOpening3Level = opening3Level.filter(
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
