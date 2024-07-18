"use strict";
import * as fn from "./functions";

export var gameState = null;
export var tableJson = {};

export var vis;

export var playerNum = 0;
export var suitArray = ["&clubs;", "&diams;", "&hearts;", "&spades;"];
export var suitSymbolArray = ["♣", "♦", "♥", "♠"];
export var suitColorArray = ["black", "red", "red", "black"];
export var handNameArray = ["clubs", "diamonds", "hearts", "spades"];
export var handCharArray = ["c", "d", "h", "s"];
export var valueSymbol = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
export var vulArray = ["Nil", "NS", "EW", "All"];

export var hcp = 0;
export var tp = 0;
export var numS = 0;
export var numH = 0;
export var numD = 0;
export var numC = 0;
export var hcpS = 0;
export var hcpH = 0;
export var hcpD = 0;
export var hcpC = 0;
export var longestSuit = "hearts";
export var bidRank = [
  "1c",
  "1d",
  "1h",
  "1s",
  "1nt",
  "2c",
  "2d",
  "2h",
  "2s",
  "2nt",
  "3c",
  "3d",
  "3h",
  "3s",
  "3nt",
  "4c",
  "4d",
  "4h",
  "4s",
  "4nt",
  "5c",
  "5d",
  "5h",
  "5s",
  "5nt",
  "6c",
  "6d",
  "6h",
  "6s",
  "6nt",
  "7c",
  "7d",
  "7h",
  "7s",
  "7nt",
];
export var suitRank = ["c", "d", "h", "s", "nt"];

// **** RESET STATE
export function resetState() {
  tableJson = {
    hand0: [],
    hand1: [],
    hand2: [],
    hand3: [],
    hand4: [
      {
        val: "",
        suit: "",
        vis: "1",
      },
      {
        val: "",
        suit: "",
        vis: "1",
      },
      {
        val: "",
        suit: "",
        vis: "1",
      },
      {
        val: "",
        suit: "",
        vis: "1",
      },
    ],
    player: [
      {
        username: "",
        seat: "",
      },
      {
        username: "",
        seat: "",
      },
      {
        username: "",
        seat: "",
      },
      {
        username: "",
        seat: "",
      },
    ],
    curPlayer: "0",
    vul: "",
    tricks0: "0",
    tricks1: "0",
    tricks2: "0",
    tricks3: "0",
    profile0: "",
    profile1: "",
    profile2: "",
    profile3: "",
    owner: "0",
    dealer: "0",
    declarer: "-1",
    dummy: "-1",
    lead: "0",
    trickCount: "0",
    trumps: "c",
    contract: {
      val: "",
      suit: "",
      partnership: "",
    },
    suitLed: "",
    showAll: "false",
    bids: [],
    stage: "seat",
    o1Bid: "",
    rdBid: "",
  };
}

export function sortJSON(data, key, way) {
  return data.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    if (way === "123") {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    if (way === "321") {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
}

export function deal() {
  // Generate Deck
  var tempDeck = [];
  var n = 0;
  for (suit = 0; suit < 4; suit++) {
    for (x = 0; x < 13; x++) {
      var val = String(x + 2);
      tempDeck.push(val + handCharArray[suit] + "0");
    }
  }
  for (var hand = 0; hand < 4; hand++) {
    for (var x = 0; x < 13; x++) {
      var rnd = Math.floor(Math.random() * tempDeck.length);
      var crd = String(tempDeck.splice(rnd, 1));
      var val = crd.substr(0, crd.length - 2);
      var suit = 0;
      switch (crd.substr(crd.length - 2, 1)) {
        case "c":
          suit = 0;
          break;
        case "d":
          suit = 1;
          break;
        case "h":
          suit = 2;
          break;
        case "s":
          suit = 3;
          break;
      }
      var deckval = Number(suit) * 13 + Number(val);
      //console.log(deckval, val, crd, crd.length);
      tableJson["hand" + hand][x] = {
        val: val,
        suit: crd.substr(crd.length - 2, 1),
        vis: "0",
        deckval: deckval,
      };
    }
  }

  tableJson.hand0 = [
    {
      val: 10,
      suit: "s",
      vis: 0,
      deckval: 49,
    },
    {
      val: 9,
      suit: "s",
      vis: 0,
      deckval: 48,
    },
    {
      val: 13,
      suit: "h",
      vis: 0,
      deckval: 39,
    },
    {
      val: 10,
      suit: "h",
      vis: 0,
      deckval: 36,
    },
    {
      val: 5,
      suit: "h",
      vis: 0,
      deckval: 31,
    },
    {
      val: 2,
      suit: "h",
      vis: 0,
      deckval: 28,
    },
    {
      val: 14,
      suit: "d",
      vis: 0,
      deckval: 27,
    },
    {
      val: 12,
      suit: "d",
      vis: 0,
      deckval: 25,
    },
    {
      val: 11,
      suit: "d",
      vis: 0,
      deckval: 24,
    },
    {
      val: 6,
      suit: "d",
      vis: 0,
      deckval: 19,
    },
    {
      val: 5,
      suit: "d",
      vis: 0,
      deckval: 18,
    },
    {
      val: 13,
      suit: "c",
      vis: 0,
      deckval: 13,
    },
    {
      val: 9,
      suit: "c",
      vis: 0,
      deckval: 9,
    },
  ];
  tableJson.hand1 = [
    {
      val: 12,
      suit: "s",
      vis: 0,
      deckval: 51,
    },
    {
      val: 8,
      suit: "s",
      vis: 0,
      deckval: 47,
    },
    {
      val: 6,
      suit: "s",
      vis: 0,
      deckval: 45,
    },
    {
      val: 2,
      suit: "s",
      vis: 0,
      deckval: 41,
    },
    {
      val: 9,
      suit: "h",
      vis: 0,
      deckval: 35,
    },
    {
      val: 8,
      suit: "h",
      vis: 0,
      deckval: 34,
    },
    {
      val: 7,
      suit: "h",
      vis: 0,
      deckval: 33,
    },
    {
      val: 6,
      suit: "h",
      vis: 0,
      deckval: 32,
    },
    {
      val: 4,
      suit: "h",
      vis: 0,
      deckval: 30,
    },
    {
      val: 13,
      suit: "d",
      vis: 0,
      deckval: 26,
    },
    {
      val: 9,
      suit: "d",
      vis: 0,
      deckval: 22,
    },
    {
      val: 6,
      suit: "c",
      vis: 0,
      deckval: 6,
    },
    {
      val: 2,
      suit: "c",
      vis: 0,
      deckval: 2,
    },
  ];
  tableJson.hand2 = [
    {
      val: 13,
      suit: "s",
      vis: 0,
      deckval: 52,
    },
    {
      val: 11,
      suit: "s",
      vis: 0,
      deckval: 50,
    },
    {
      val: 7,
      suit: "s",
      vis: 0,
      deckval: 46,
    },
    {
      val: 5,
      suit: "s",
      vis: 0,
      deckval: 44,
    },
    {
      val: 14,
      suit: "h",
      vis: 0,
      deckval: 40,
    },
    {
      val: 11,
      suit: "h",
      vis: 0,
      deckval: 37,
    },
    {
      val: 3,
      suit: "h",
      vis: 0,
      deckval: 29,
    },
    {
      val: 8,
      suit: "d",
      vis: 0,
      deckval: 21,
    },
    {
      val: 2,
      suit: "d",
      vis: 0,
      deckval: 15,
    },
    {
      val: 14,
      suit: "c",
      vis: 0,
      deckval: 14,
    },
    {
      val: 8,
      suit: "c",
      vis: 0,
      deckval: 8,
    },
    {
      val: 5,
      suit: "c",
      vis: 0,
      deckval: 5,
    },
    {
      val: 4,
      suit: "c",
      vis: 0,
      deckval: 4,
    },
  ];
  tableJson.hand3 = [
    {
      val: 14,
      suit: "s",
      vis: 0,
      deckval: 53,
    },
    {
      val: 4,
      suit: "s",
      vis: 0,
      deckval: 43,
    },
    {
      val: 3,
      suit: "s",
      vis: 0,
      deckval: 42,
    },
    {
      val: 12,
      suit: "h",
      vis: 0,
      deckval: 38,
    },
    {
      val: 10,
      suit: "d",
      vis: 0,
      deckval: 23,
    },
    {
      val: 7,
      suit: "d",
      vis: 0,
      deckval: 20,
    },
    {
      val: 4,
      suit: "d",
      vis: 0,
      deckval: 17,
    },
    {
      val: 3,
      suit: "d",
      vis: 0,
      deckval: 16,
    },
    {
      val: 12,
      suit: "c",
      vis: 0,
      deckval: 12,
    },
    {
      val: 11,
      suit: "c",
      vis: 0,
      deckval: 11,
    },
    {
      val: 10,
      suit: "c",
      vis: 0,
      deckval: 10,
    },
    {
      val: 7,
      suit: "c",
      vis: 0,
      deckval: 7,
    },
    {
      val: 3,
      suit: "c",
      vis: 0,
      deckval: 3,
    },
  ];

  tableJson["hand0"] = sortJSON(tableJson["hand0"], "deckval", "321"); // 123 or 321
  tableJson["hand1"] = sortJSON(tableJson["hand1"], "deckval", "321"); // 123 or 321
  tableJson["hand2"] = sortJSON(tableJson["hand2"], "deckval", "321"); // 123 or 321
  tableJson["hand3"] = sortJSON(tableJson["hand3"], "deckval", "321"); // 123 or 321

  // FIXED HAND
  /*
   */
  //END STATIC HAND

  gameState = tableJson;

  gameState.vul = vulArray[Math.floor(Math.random() * 3)];

  // build stats for each hand
  for (var x = 0; x < 4; x++) {
    buildHandStats(gameState["hand" + x]);
  }
}

// from 'build hand json'
export var hand = {};
export var bidNum = 0;
export var bids = {};
export var rebid = {};

export function buildHandStats(hand) {
  //hand = gameState.hand0;
  hand.numS = fn.suitCount(hand, "s");
  hand.numH = fn.suitCount(hand, "h");
  hand.numD = fn.suitCount(hand, "d");
  hand.numC = fn.suitCount(hand, "c");
  hand.HCP = fn.getHcp(hand);
  hand.TPShort = fn.getHcp(hand) + fn.getShortSuitDP(hand);
  hand.TPLong = fn.getHcp(hand) + fn.getLongSuitDP(hand);
  hand.balanced = fn.cardsBalanced(hand);
  hand.longSuitDP = fn.getLongSuitDP(hand);
  hand.voidSuitTotalPoints = fn.getVoidSuitTotalPoints(hand);
  hand.shortSuitDP = fn.getShortSuitDP(hand);
  hand.doubletonTotalPoints = fn.getDoubletonTotalPoints(hand);
  hand.singletonTotalPoints = fn.getSingletonTotalPoints(hand);
  hand.hcpInEverySuit = fn.hcpInEverySuit(hand);
  hand.noTrumpRebid = fn.noTrumpRebid(hand);
  hand.strengthOfUnbalHand = fn.strengthOfUnbalHand(hand);
  hand.strengthOfResponderBalHand = fn.strengthOfResponderBalHand(hand);
  hand.strengthOfResponderUnbalHand = fn.strengthOfResponderUnbalHand(hand);
  hand.respondingTo1NT = fn.respondingTo1NT(hand);
  hand.op1NTStrength = fn.acolOpening1NT(hand);
  // setlongest suit
  /*
    var longestCount = 0;
    var slen = suitCount(hand, "c");
    console.log("clubs: " + slen);
    if (slen > longestCount) {
        hand.sLong = "c";
        longestCount = slen
    };
    slen = suitCount(hand, "d");
    console.log("diams: " + slen);
    if (slen > longestCount) {
        hand.sLong = "d";
        longestCount = slen
    };

    slen = suitCount(hand, "h");
    console.log("hearts: " + slen);
    if (slen > longestCount) {
        hand.sLong = "h";
        longestCount = slen
    };
    slen = suitCount(hand, "s");
    console.log("spades: " + slen);
    if (slen > longestCount) {
        hand.sLong = "s";
        longestCount = slen
    };
    */
  //hand.sLong;
  ///hand.s2ndLong;

  //acol only !!!
  if (hand.HCP === 10) {
    hand.notrumps = false; // if hcp === 10 then this is not a valid notrump bid
  } else {
    hand.notrumps = fn.isNoTrumpHand(hand); //hcp is not equal to 10 so use unbalanced calculations
  }
  if (hand.notrumps === true) {
    // if  noTrump is true then  do this
    hand.opStrength = hand.strengthOfBalHand;
    hand.reStrength = hand.strengthOfResponderBalHand;
    hand.noTrumpRebidStrength = fn.noTrumpRebidStrength(hand);
  } else {
    // if  noTrump is false  do this
    hand.opStrength = hand.strengthOfUnbalHand;
    hand.reStrength = hand.strengthOfResponderUnbalHand;
  }
}

/*console.log(hand);*/

// functions
