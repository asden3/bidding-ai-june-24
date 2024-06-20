function get_aoc1_55(hand) {
  var oc1_55 = [
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 8,
      maxHCP: 9,
      strength: "min",
      minNumS: 5,
      maxNumS: 5,
      minNumH: 5,
      maxNumH: 5,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 4,
      ocBid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 10,
      maxHCP: 12,
      strength: "med",
      minNumS: 5,
      maxNumS: 5,
      minNumH: 5,
      maxNumH: 5,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 4,
      ocBid: "1s",
    },
    {
      bidder: "oc1",
      weight: 1,
      minHCP: 13,
      maxHCP: 19,
      strength: "max",
      minNumS: 5,
      maxNumS: 5,
      minNumH: 5,
      maxNumH: 5,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 4,
      ocBid: "1s",
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
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 4,
      ocBid: "1s",
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
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 4,
      ocBid: "1s",
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
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 4,
      ocBid: "1s",
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
      minNumC: 5,
      maxNumC: 5,
      ocIndex: 4,
      ocBid: "1s",
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
      minNumC: 5,
      maxNumC: 5,
      ocIndex: 4,
      ocBid: "1s",
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
      minNumC: 5,
      maxNumC: 5,
      ocIndex: 4,
      ocBid: "1s",
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
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 3,
      ocBid: "1h",
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
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 3,
      ocBid: "1h",
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
      minNumD: 5,
      maxNumD: 5,
      minNumC: "",
      maxNumC: 3,
      ocIndex: 3,
      ocBid: "1h",
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
      minNumC: 5,
      maxNumC: 5,
      ocIndex: 3,
      ocBid: "1h",
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
      minNumC: 5,
      maxNumC: 5,
      ocIndex: 3,
      ocBid: "1h",
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
      minNumC: 5,
      maxNumC: 5,
      ocIndex: 3,
      ocBid: "1h",
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
      minNumC: 5,
      maxNumC: 5,
      ocIndex: 2,
      ocBid: "1d",
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
      minNumC: 5,
      maxNumC: 5,
      ocIndex: 2,
      ocBid: "1d",
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
      minNumC: 5,
      maxNumC: 5,
      ocIndex: 2,
      ocBid: "1d",
    },
  ];
  var rebid_aoc1_55 = oc1_55.filter(
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
  return rebid_aoc1_55;
}
