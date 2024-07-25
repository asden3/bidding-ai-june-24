export default function (hand, o1Bid, oc1Bid) {
  var respondingTo1NT = [
    {
      bidder: "r1",
      minHCP: 0,
      maxHCP: 9,
      minTP: 0,
      maxTP: "",
      strength: "r1nt0",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 5,
      maxNumS: 13,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 3,
      r1Index: 9,
      r1Bid: "2s",
    },
    {
      bidder: "r1",
      minHCP: 0,
      maxHCP: 9,
      minTP: 0,
      maxTP: "",
      strength: "r1nt0",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 5,
      maxNumH: 13,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 3,
      r1Index: 8,
      r1Bid: "2h",
    },
    {
      bidder: "r1",
      minHCP: 0,
      maxHCP: 9,
      minTP: 0,
      maxTP: "",
      strength: "r1nt0",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 5,
      maxNumD: 13,
      minNumC: 0,
      maxNumC: 5,
      weight: 1,
      r1Index: 7,
      r1Bid: "2d",
    },
    {
      bidder: "r1",
      minHCP: 0,
      maxHCP: 9,
      minTP: 0,
      maxTP: "",
      strength: "r1nt0",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 5,
      maxNumC: 13,
      weight: 1,
      r1Index: 6,
      r1Bid: "2c",
    },
    {
      bidder: "r1",
      minHCP: 11,
      maxHCP: 12,
      minTP: "",
      maxTP: "",
      strength: "r1nt10",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 1,
      maxNumS: 5,
      minNumH: 1,
      maxNumH: 5,
      minNumD: 1,
      maxNumD: 5,
      minNumC: 1,
      maxNumC: 5,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minHCP: 10,
      maxHCP: "",
      minTP: 11,
      maxTP: "",
      strength: "r1nt10",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 5,
      maxNumS: 5,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 1,
      r1Index: 14,
      r1Bid: "3s",
    },
    {
      bidder: "r1",
      minHCP: 10,
      maxHCP: "",
      minTP: 11,
      maxTP: "",
      strength: "r1nt10",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 6,
      maxNumS: 13,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 1,
      r1Index: 19,
      r1Bid: "4s",
    },
    {
      bidder: "r1",
      minHCP: 10,
      maxHCP: "",
      minTP: 11,
      maxTP: "",
      strength: "r1nt10",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 5,
      maxNumH: 5,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 1,
      r1Index: 13,
      r1Bid: "3h",
    },
    {
      bidder: "r1",
      minHCP: 10,
      maxHCP: "",
      minTP: 11,
      maxTP: "",
      strength: "r1nt10",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 6,
      maxNumH: 13,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 1,
      r1Index: 18,
      r1Bid: "4h",
    },
    {
      bidder: "r1",
      minHCP: 10,
      maxHCP: "",
      minTP: 11,
      maxTP: "",
      strength: "r1nt10",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 4,
      minNumH: 0,
      maxNumH: 4,
      minNumD: 5,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 4,
      weight: 1,
      r1Index: 12,
      r1Bid: "3d",
    },
    {
      bidder: "r1",
      minHCP: 10,
      maxHCP: "",
      minTP: 11,
      maxTP: "",
      strength: "r1nt10",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 4,
      minNumH: 0,
      maxNumH: 4,
      minNumD: 6,
      maxNumD: 13,
      minNumC: 0,
      maxNumC: 4,
      weight: 1,
      r1Index: 22,
      r1Bid: "5d",
    },
    {
      bidder: "r1",
      minHCP: 10,
      maxHCP: "",
      minTP: 11,
      maxTP: "",
      strength: "r1nt10",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 4,
      minNumH: 0,
      maxNumH: 4,
      minNumD: 0,
      maxNumD: 4,
      minNumC: 5,
      maxNumC: 5,
      weight: 1,
      r1Index: 11,
      r1Bid: "3c",
    },
    {
      bidder: "r1",
      minHCP: 10,
      maxHCP: "",
      minTP: 11,
      maxTP: "",
      strength: "r1nt10",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 4,
      minNumH: 0,
      maxNumH: 4,
      minNumD: 0,
      maxNumD: 4,
      minNumC: 6,
      maxNumC: 13,
      weight: 1,
      r1Index: 21,
      r1Bid: "5c",
    },
    {
      bidder: "r1",
      minHCP: 13,
      maxHCP: 19,
      minTP: 13,
      maxTP: 19,
      strength: "r1nt13",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 6,
      maxNumS: 13,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 3,
      r1Index: 19,
      r1Bid: "4s",
    },
    {
      bidder: "r1",
      minHCP: 13,
      maxHCP: 19,
      minTP: 13,
      maxTP: 18,
      strength: "r1nt13",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 1,
      maxNumS: 5,
      minNumH: 1,
      maxNumH: 5,
      minNumD: 5,
      maxNumD: 13,
      minNumC: 1,
      maxNumC: 5,
      weight: 2,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minHCP: 13,
      maxHCP: 19,
      minTP: 13,
      maxTP: 19,
      strength: "r1nt13",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 5,
      maxNumD: 13,
      minNumC: 0,
      maxNumC: 5,
      weight: 1,
      r1Index: 22,
      r1Bid: "5d",
    },
    {
      bidder: "r1",
      minHCP: 13,
      maxHCP: 19,
      minTP: 13,
      maxTP: 19,
      strength: "r1nt13",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 6,
      maxNumH: 13,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 3,
      r1Index: 18,
      r1Bid: "4h",
    },
    {
      bidder: "r1",
      minHCP: 13,
      maxHCP: 19,
      minTP: 13,
      maxTP: "",
      strength: "r1nt13",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 1,
      maxNumS: 5,
      minNumH: 1,
      maxNumH: 5,
      minNumD: 1,
      maxNumD: 5,
      minNumC: 6,
      maxNumC: 13,
      weight: 2,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minHCP: 13,
      maxHCP: 19,
      minTP: 13,
      maxTP: "",
      strength: "r1nt13",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 1,
      maxNumS: 5,
      minNumH: 1,
      maxNumH: 5,
      minNumD: 1,
      maxNumD: 6,
      minNumC: 1,
      maxNumC: 6,
      weight: 2,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minHCP: 13,
      maxHCP: 19,
      minTP: 13,
      maxTP: 19,
      strength: "r1nt13",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 6,
      maxNumC: 13,
      weight: 1,
      r1Index: 21,
      r1Bid: "5c",
    },
    {
      bidder: "r1",
      minHCP: 20,
      maxHCP: "",
      minTP: 20,
      maxTP: "",
      strength: "r1nt22",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 6,
      maxNumS: 13,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 3,
      r1Index: 29,
      r1Bid: "6s",
    },
    {
      bidder: "r1",
      minHCP: 20,
      maxHCP: "",
      minTP: 20,
      maxTP: "",
      strength: "r1nt22",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 6,
      maxNumH: 13,
      minNumD: 0,
      maxNumD: 5,
      minNumC: 0,
      maxNumC: 5,
      weight: 3,
      r1Index: 28,
      r1Bid: "6h",
    },
    {
      bidder: "r1",
      minHCP: 20,
      maxHCP: "",
      minTP: 20,
      maxTP: "",
      strength: "r1nt22",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 2,
      maxNumS: 5,
      minNumH: 2,
      maxNumH: 5,
      minNumD: 2,
      maxNumD: 5,
      minNumC: 2,
      maxNumC: 5,
      weight: 2,
      r1Index: 30,
      r1Bid: "6nt",
    },
    {
      bidder: "r1",
      minHCP: 20,
      maxHCP: "",
      minTP: 20,
      maxTP: "",
      strength: "r1nt22",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 6,
      maxNumD: 13,
      minNumC: 0,
      maxNumC: 5,
      weight: 1,
      r1Index: 27,
      r1Bid: "6d",
    },
    {
      bidder: "r1",
      minHCP: 20,
      maxHCP: "",
      minTP: 20,
      maxTP: "",
      strength: "r1nt22",
      o1Index: 5,
      o1Bid: "1nt",
      minNumS: 0,
      maxNumS: 5,
      minNumH: 0,
      maxNumH: 5,
      minNumD: 0,
      maxNumD: 4,
      minNumC: 5,
      maxNumC: 13,
      weight: 1,
      r1Index: 26,
      r1Bid: "6c",
    },
  ];
  var rebidRespondingTo1NT = respondingTo1NT.filter(
    (itemsInArray) =>
      hand.respondingTo1NT === itemsInArray.strength &&
      (hand.numS >= itemsInArray.minNumS || itemsInArray.minNumS === "") &&
      (hand.numS <= itemsInArray.maxNumS || itemsInArray.maxNumS === "") &&
      (hand.numH >= itemsInArray.minNumH || itemsInArray.minNumH === "") &&
      (hand.numH <= itemsInArray.maxNumH || itemsInArray.maxNumH === "") &&
      (hand.numD >= itemsInArray.minNumD || itemsInArray.minNumD === "") &&
      (hand.numD <= itemsInArray.maxNumD || itemsInArray.maxNumD === "") &&
      (hand.numC >= itemsInArray.minNumC || itemsInArray.minNumC === "") &&
      (hand.numC <= itemsInArray.maxNumC || itemsInArray.maxNumC === "") &&
      (hand.HCP >= itemsInArray.minHCP || itemsInArray.minHCP === "") &&
      (hand.HCP <= itemsInArray.maxHCP || itemsInArray.maxHCP === "") &&
      (hand.TPLong >= itemsInArray.minTP || itemsInArray.minTP === "") &&
      (hand.TPLong <= itemsInArray.maxTP || itemsInArray.maxTP === "") &&
      o1Bid === itemsInArray.o1Bid
  );
  /* if (hand.numS >= 5 && hand.TPLong >= 0 && hand.TPLong <= 10) {
        rebidRespondingTo1NT.r1Bid = "2s";
     }   
            if 5 card suit and hand.TPLong 0 - 10 bid the 5 card suit at 2 level
            if 5 card suit and hand.TPLong 11 - 12 bid the 5 card suit at 3 level
            if 5 card suit and hand.TPLong >= 13 and its spades or heart bid the 5 card suit at 4 level
            if 5 card suit and hand.TPLong >= 13 and its diams or clubs bid the 5 card suit at 5 level

*/
  return rebidRespondingTo1NT;
}
