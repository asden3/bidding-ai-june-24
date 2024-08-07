export default function (hand) {
  var oc1_noTrump = [
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 15,
      maxHCP: 17,
      strength: "min",
      minNumS: 2,
      maxNumS: 4,
      minNumH: 2,
      maxNumH: 3,
      minNumD: 2,
      maxNumD: 4,
      minNumC: 2,
      maxNumC: 4,
      honorInEverySuit: "TRUE",
      ocIndex: 5,
      oc1Bid: "1nt",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 15,
      maxHCP: 17,
      strength: "min",
      minNumS: 2,
      maxNumS: 3,
      minNumH: 2,
      maxNumH: 4,
      minNumD: 2,
      maxNumD: 4,
      minNumC: 2,
      maxNumC: 4,
      honorInEverySuit: "TRUE",
      ocIndex: 5,
      oc1Bid: "1nt",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 20,
      maxHCP: 22,
      strength: "str",
      minNumS: 2,
      maxNumS: 4,
      minNumH: 2,
      maxNumH: 3,
      minNumD: 2,
      maxNumD: 4,
      minNumC: 2,
      maxNumC: 4,
      honorInEverySuit: "TRUE",
      ocIndex: 10,
      oc1Bid: "2nt",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 20,
      maxHCP: 22,
      strength: "str",
      minNumS: 2,
      maxNumS: 3,
      minNumH: 2,
      maxNumH: 4,
      minNumD: 2,
      maxNumD: 4,
      minNumC: 2,
      maxNumC: 4,
      honorInEverySuit: "TRUE",
      ocIndex: 10,
      oc1Bid: "2nt",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 23,
      maxHCP: 25,
      strength: "str",
      minNumS: 2,
      maxNumS: 3,
      minNumH: 2,
      maxNumH: 4,
      minNumD: 2,
      maxNumD: 4,
      minNumC: 2,
      maxNumC: 4,
      honorInEverySuit: "TRUE",
      ocIndex: 15,
      oc1Bid: "3nt",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 23,
      maxHCP: 25,
      strength: "str",
      minNumS: 2,
      maxNumS: 4,
      minNumH: 2,
      maxNumH: 3,
      minNumD: 2,
      maxNumD: 4,
      minNumC: 2,
      maxNumC: 4,
      honorInEverySuit: "TRUE",
      ocIndex: 15,
      oc1Bid: "3nt",
    },
  ];
  var rebid_aoc1_noTrump = oc1_noTrump.filter(
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
  return rebid_aoc1_noTrump;
}
