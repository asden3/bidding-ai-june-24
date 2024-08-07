export default function (hand) {
  var aoc1_54 = [
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 5,
      maxNumC: 5,
      oc1Index: 1,
      oc1Bid: "1c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 5,
      maxNumC: 5,
      oc1Index: 1,
      oc1Bid: "1c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 5,
      maxNumC: 5,
      oc1Index: 1,
      oc1Bid: "1c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 5,
      maxNumC: 5,
      oc1Index: 1,
      oc1Bid: "1c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 5,
      maxNumC: 5,
      oc1Index: 1,
      oc1Bid: "1c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 5,
      maxNumC: 5,
      oc1Index: 1,
      oc1Bid: "1c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 5,
      maxNumC: 5,
      oc1Index: 1,
      oc1Bid: "1c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 5,
      maxNumC: 5,
      oc1Index: 1,
      oc1Bid: "1c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 5,
      maxNumC: 5,
      oc1Index: 1,
      oc1Bid: "1c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 2,
      oc1Bid: "1d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 2,
      oc1Bid: "1d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 2,
      oc1Bid: "1d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 2,
      oc1Bid: "1d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 2,
      oc1Bid: "1d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 2,
      oc1Bid: "1d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 5,
      maxNumD: 5,
      minNumC: 4,
      maxNumC: 4,
      oc1Index: 2,
      oc1Bid: "1d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 5,
      maxNumD: 5,
      minNumC: 4,
      maxNumC: 4,
      oc1Index: 2,
      oc1Bid: "1d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 5,
      maxNumD: 5,
      minNumC: 4,
      maxNumC: 4,
      oc1Index: 2,
      oc1Bid: "1d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: "",
      maxNumS: 3,
      minNumH: 5,
      maxNumH: 5,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 3,
      oc1Bid: "1h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: "",
      maxNumS: 3,
      minNumH: 5,
      maxNumH: 5,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 3,
      oc1Bid: "1h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: "",
      maxNumS: 3,
      minNumH: 5,
      maxNumH: 5,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 3,
      oc1Bid: "1h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: "",
      maxNumS: 3,
      minNumH: 5,
      maxNumH: 5,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      oc1Index: 3,
      oc1Bid: "1h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: "",
      maxNumS: 3,
      minNumH: 5,
      maxNumH: 5,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      oc1Index: 3,
      oc1Bid: "1h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: "",
      maxNumS: 3,
      minNumH: 5,
      maxNumH: 5,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      oc1Index: 3,
      oc1Bid: "1h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 5,
      maxNumH: 5,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 3,
      oc1Bid: "1h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 5,
      maxNumH: 5,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 3,
      oc1Bid: "1h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 5,
      maxNumH: 5,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 3,
      oc1Bid: "1h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: 5,
      maxNumS: 5,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 4,
      oc1Bid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: 5,
      maxNumS: 5,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 4,
      oc1Bid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: 5,
      maxNumS: 5,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 4,
      oc1Bid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: 5,
      maxNumS: 5,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 4,
      oc1Bid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: 5,
      maxNumS: 5,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 4,
      oc1Bid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: 5,
      maxNumS: 5,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      oc1Index: 4,
      oc1Bid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: 5,
      maxNumS: 5,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      oc1Index: 4,
      oc1Bid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: 5,
      maxNumS: 5,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      oc1Index: 4,
      oc1Bid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: 5,
      maxNumS: 5,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      oc1Index: 4,
      oc1Bid: "1s",
    },
  ];
  var rebid_aoc1_54 = aoc1_54.filter(
    (itemsInArray) =>
      hand.ocStrength === itemsInArray.strength &&
      (hand.numS >= itemsInArray.minNumS || itemsInArray.minNumS === "") &&
      (hand.numS <= itemsInArray.maxNumS || itemsInArray.maxNumS === "") &&
      (hand.numH >= itemsInArray.minNumH || itemsInArray.minNumH === "") &&
      (hand.numH <= itemsInArray.maxNumH || itemsInArray.maxNumH === "") &&
      (hand.numD >= itemsInArray.minNumD || itemsInArray.minNumD === "") &&
      (hand.numD <= itemsInArray.maxNumD || itemsInArray.maxNumD === "") &&
      (hand.numC >= itemsInArray.minNumC || itemsInArray.minNumC === "") &&
      (hand.numC <= itemsInArray.maxNumC || itemsInArray.maxNumC === "")
  );
  return rebid_aoc1_54;
}
