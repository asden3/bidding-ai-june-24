export default function (hand) {
  var aoc1_8 = [
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "art",
      minNumS: 8,
      maxNumS: 8,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 4,
      oc1Bid: "4s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "art",
      minNumS: 8,
      maxNumS: 8,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 4,
      oc1Bid: "4s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "art",
      minNumS: 8,
      maxNumS: 8,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 4,
      oc1Bid: "4s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "art",
      minNumS: "",
      maxNumS: 3,
      minNumH: 8,
      maxNumH: 8,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 3,
      oc1Bid: "4h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "art",
      minNumS: "",
      maxNumS: 3,
      minNumH: 8,
      maxNumH: 8,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 3,
      oc1Bid: "4h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "art",
      minNumS: "",
      maxNumS: 3,
      minNumH: 8,
      maxNumH: 8,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 3,
      oc1Bid: "4h",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "art",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 8,
      maxNumD: 8,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 2,
      oc1Bid: "4d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "art",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 8,
      maxNumD: 8,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 2,
      oc1Bid: "4d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "art",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 8,
      maxNumD: 8,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 2,
      oc1Bid: "4d",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "art",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 8,
      maxNumC: 8,
      ocIndex: 1,
      oc1Bid: "4c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "art",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 8,
      maxNumC: 8,
      ocIndex: 1,
      oc1Bid: "4c",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "art",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 8,
      maxNumC: 8,
      ocIndex: 1,
      oc1Bid: "4c",
    },
  ];
  var rebid_aoc1_8 = aoc1_8.filter(
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
  return rebid_aoc1_8;
}
