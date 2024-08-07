export default function (hand, o1Bid, oc1Bid) {
  //console.log("R1 44", hand, o1Bid);
  var fourCard4Card = [
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 8,
      r1Bid: "2h",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 7,
      r1Bid: "2d",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 6,
      r1Bid: "2c",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 11,
      r1Bid: "3c",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 2,
      r1Bid: "1d",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 2,
      r1Bid: "1d",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 7,
      r1Bid: "2d",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 11,
      r1Bid: "3c",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 21,
      r1Bid: "5c",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 2,
      r1Bid: "1d",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 1,
      r1Bid: "2c",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 11,
      r1Bid: "3c",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 7,
      r1Bid: "2d",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 1,
      o1Bid: "1c",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 21,
      r1Bid: "5c",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 7,
      r1Bid: "2d",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 12,
      r1Bid: "3d",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 21,
      r1Bid: "5d",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 5,
      r1Bid: "1nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 7,
      r1Bid: "2d",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 12,
      r1Bid: "3d",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 22,
      r1Bid: "5d",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 5,
      r1Bid: "1nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 3,
      r1Bid: "1h",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 5,
      r1Bid: "1nt",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 7,
      r1Bid: "2d",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 12,
      r1Bid: "3d",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 2,
      o1Bid: "1d",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 22,
      r1Bid: "5d",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 8,
      r1Bid: "2h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 13,
      r1Bid: "3h",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 18,
      r1Bid: "4h",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 5,
      r1Bid: "1nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 5,
      r1Bid: "1nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 2,
      r1Index: 4,
      r1Bid: "1s",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 8,
      r1Bid: "2h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 13,
      r1Bid: "3h",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 18,
      r1Bid: "4h",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 8,
      r1Bid: "2h",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 13,
      r1Bid: "3h",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 18,
      r1Bid: "4h",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 5,
      r1Bid: "1nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 3,
      o1Bid: "1h",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 9,
      r1Bid: "2s",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 14,
      r1Bid: "3s",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: 4,
      maxNumS: 4,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 19,
      r1Bid: "4s",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 9,
      r1Bid: "2s",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 14,
      r1Bid: "3s",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 19,
      r1Bid: "4s",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 9,
      r1Bid: "2s",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 14,
      r1Bid: "3s",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: 4,
      maxNumS: 4,
      minNumH: "",
      maxNumH: 3,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 19,
      r1Bid: "4s",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 5,
      r1Bid: "1nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: 4,
      maxNumD: 4,
      minNumC: "",
      maxNumC: 3,
      weight: 1,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 5,
      r1Bid: "1nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: "",
      maxNumS: 3,
      minNumH: 4,
      maxNumH: 4,
      minNumD: "",
      maxNumD: 3,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 15,
      r1Bid: "3nt",
    },
    {
      bidder: "r1",
      minTP: 6,
      maxTP: 9,
      strength: "min",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 5,
      r1Bid: "1nt",
    },
    {
      bidder: "r1",
      minTP: 11,
      maxTP: 12,
      strength: "med",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 10,
      r1Bid: "2nt",
    },
    {
      bidder: "r1",
      minTP: 13,
      maxTP: 19,
      strength: "max",
      o1Index: 4,
      o1Bid: "1s",
      minNumS: "",
      maxNumS: 3,
      minNumH: "",
      maxNumH: 3,
      minNumD: 4,
      maxNumD: 4,
      minNumC: 4,
      maxNumC: 4,
      weight: 1,
      r1Index: 15,
      r1Bid: "3nt",
    },
  ];
  var rebidFourCard4Card = fourCard4Card.filter(
    (itemsInArray) =>
      hand.reStrength === itemsInArray.strength &&
      (hand.numS >= itemsInArray.minNumS || itemsInArray.minNumS === "") &&
      (hand.numS <= itemsInArray.maxNumS || itemsInArray.maxNumS === "") &&
      (hand.numH >= itemsInArray.minNumH || itemsInArray.minNumH === "") &&
      (hand.numH <= itemsInArray.maxNumH || itemsInArray.maxNumH === "") &&
      (hand.numD >= itemsInArray.minNumD || itemsInArray.minNumD === "") &&
      (hand.numD <= itemsInArray.maxNumD || itemsInArray.maxNumD === "") &&
      (hand.numC >= itemsInArray.minNumC || itemsInArray.minNumC === "") &&
      (hand.numC <= itemsInArray.maxNumC || itemsInArray.maxNumC === "") &&
      o1Bid === itemsInArray.o1Bid
  );
  return rebidFourCard4Card;
}
