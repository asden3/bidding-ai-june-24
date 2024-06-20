export function getLongSuitDP(hand) {
  //adding 1 point for every card in a suit more than 4 cards
  var longSuitPoints = 0;
  var spades = suitCount(hand, "s");
  var hearts = suitCount(hand, "h");
  var diamonds = suitCount(hand, "d");
  var clubs = suitCount(hand, "c");
  if (spades > 4) {
    // for every extra card add
    longSuitPoints = longSuitPoints + spades - 4;
  }
  if (hearts > 4) {
    // for every extra card add
    longSuitPoints = longSuitPoints + hearts - 4;
  }
  if (diamonds > 4) {
    // for every extra card add
    longSuitPoints = longSuitPoints + diamonds - 4;
  }
  if (clubs > 4) {
    // for every extra card add
    longSuitPoints = longSuitPoints + clubs - 4;
  }
  return longSuitPoints;
}

export function getHcp(hand) {
  //console.log("HCP HAND " + JSON.stringify(hand));
  var hcp = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].val > 10) {
      hcp = hcp + Number(hand[i].val) - 10;
    }
  }
  return hcp;
}

// pass in value of the card and return HCP value
export function getSuitHCPS(val) {
  var thisHcp = 0;
  if (val > 10) {
    thisHcp = Number(val) - 10;
  }
  return thisHcp;
}

export function suitCount(hand, suit) {
  //counts the cards in a suit
  //count suits
  var count = 0;
  for (var n = 0; n < hand.length; n++) {
    if (hand[n].suit === suit) {
      count++;
    }
  }
  return count;
}

export function getVoidSuitTotalPoints(hand) {
  // get the points for all the voids in a hand after a fit has been found
  var voidSuitTotalPoints = 0;

  if (suitCount(hand, "c") === 0) {
    voidSuitTotalPoints = voidSuitTotalPoints + 5;
  }

  if (suitCount(hand, "d") === 0) {
    voidSuitTotalPoints = voidSuitTotalPoints + 5;
  }

  if (suitCount(hand, "h") === 0) {
    voidSuitTotalPoints = voidSuitTotalPoints + 5;
  }

  if (suitCount(hand, "s") === 0) {
    voidSuitTotalPoints = voidSuitTotalPoints + 5;
  }
  return voidSuitTotalPoints;
}

// Lees ///////////////////////////////////////////////////////////////////////////////////////////////////
export function getShortSuitDP(hand) {
  //total of voiod singleton and doubleton short suit distribution points after a fit is found
  var shortSuitDP = 0;
  shortSuitDP =
    getDoubletonTotalPoints(hand) +
    getSingletonTotalPoints(hand) +
    getVoidSuitTotalPoints(hand);
  return shortSuitDP;
}

export function getDoubletonTotalPoints(hand) {
  // get all the doubleton points

  var doubletonTotalPoints = 0;
  var spades = suitCount(hand, "s");
  var hearts = suitCount(hand, "h");
  var diamonds = suitCount(hand, "d");
  var clubs = suitCount(hand, "c");

  if (spades === 2) {
    doubletonTotalPoints = doubletonTotalPoints + 1;
  }
  if (hearts === 2) {
    doubletonTotalPoints = doubletonTotalPoints + 1;
  }
  if (diamonds === 2) {
    doubletonTotalPoints = doubletonTotalPoints + 1;
  }
  if (clubs === 2) {
    doubletonTotalPoints = doubletonTotalPoints + 1;
  }
  return doubletonTotalPoints;
}

export function getSingletonTotalPoints(hand) {
  // get all the singleton points
  var singletonTotalPoints = 0;
  var spades = suitCount(hand, "s");
  var hearts = suitCount(hand, "h");
  var diamonds = suitCount(hand, "d");
  var clubs = suitCount(hand, "c");

  if (spades === 1) {
    singletonTotalPoints = singletonTotalPoints + 3;
  }
  if (hearts === 1) {
    singletonTotalPoints = singletonTotalPoints + 3;
  }
  if (diamonds === 1) {
    singletonTotalPoints = singletonTotalPoints + 3;
  }
  if (clubs === 1) {
    singletonTotalPoints = singletonTotalPoints + 3;
  }
  return singletonTotalPoints;
}

export function isNoTrumpHand(hand) {
  if (hcpInEverySuit(hand) === true && cardsBalanced(hand) === true) {
    return true;
  } else {
    return false;
  }
}

export function countOfSuitHCP(hand, suit) {
  //counts the hcp in each suit
  //console.log("HCP HAND " + JSON.stringify(hand));
  var hcp = 0;
  // loop through the hand to count hcp points
  for (var n = 0; n < hand.length; n++) {
    if (hand[n].suit === suit) {
      hcp = hcp + getSuitHCPS(hand[n].val);
    }
  }
  return hcp;
}

export function noTrumpRebid(hand) {
  //to decide what the no trumps rebid by opener should be
  var noTrumpsReBid = "";
  var balanced = cardsBalanced(hand);
  var hcp = getHcp(hand);
  var twoHcpInEachSuit = hcpInEverySuit(hand);

  if (hcp >= 14) {
    if (balanced === true && twoHcpInEachSuit === true) {
      if (hcp >= 15 && hcp <= 16) {
        // if the bidding is higher than the 1 level does it just jump to pass?
        noTrumpsReBid = "1NT";
      } else if (hcp >= 17 && hcp <= 18) {
        noTrumpsReBid = "2NT";
      } else if (hcp >= 19) {
        noTrumpsReBid = "3NT";
      } else {
        noTrumpsReBid = "A suit bid ... not enough points for NoTrumps Rebid ";
      }
    } else {
      noTrumpsReBid = " A suit bid.";
    }
  } else {
    noTrumpsReBid = "Pass";
  }
  return noTrumpsReBid;
}

export function getResponderNoTrumpRebid(hand) {
  //to decide what the no trumps rebid by responder should be
  var noTrumpsReBid = "";
  var balanced = cardsBalanced(hand);
  var hcp = getHcp(hand);
  var twoHcpInEachSuit = hcpInEverySuit(hand);

  if (hcp >= 5) {
    if (balanced === true && twoHcpInEachSuit === true) {
      if (hcp >= 6 && hcp <= 9) {
        // if the bidding is higher than the 1 level does it just jump to pass?
        noTrumpsReBid = "1NT";
      } else if (hcp >= 11 && hcp <= 12) {
        noTrumpsReBid = "2NT";
      } else if (hcp >= 13) {
        noTrumpsReBid = "3NT";
      } else {
        noTrumpsReBid = "A suit bid ... not enough points for NoTrumps Rebid ";
      }
    } else {
      noTrumpsReBid = " A suit bid.";
    }
  } else {
    noTrumpsReBid = "Pass";
  }
  return noTrumpsReBid;
}

export function strengthOfUnbalHand(hand) {
  // checking to see if opener2 has a weak medium or strong hand
  var hcp = getHcp(hand);
  var dpLongSuit = getLongSuitDP(hand);
  var rebidStrength = "";
  if (hcp + dpLongSuit >= 12 && hcp + dpLongSuit <= 14) {
    rebidStrength = "min";
  } else if (hcp + dpLongSuit >= 15 && hcp + dpLongSuit <= 16) {
    rebidStrength = "med";
  } else if (hcp + dpLongSuit >= 17) {
    rebidStrength = "max";
  } else {
    rebidStrength = "noBid";
  }
  return rebidStrength;
}

export function strengthOfBalHand(hand) {
  // checking to see if opener2 has a weak medium or strong hand
  var hcp = getHcp(hand);
  var rebidStrength = "";

  if (hcp > 11 && hcp < 15) {
    rebidStrength = "min";
  } else if (hcp > 14 && hcp < 17) {
    rebidStrength = "med";
  } else if (hcp > 17) {
    rebidStrength = "max";
  } else {
    rebidStrength = strengthOfUnbalHand(hand); // no No Trump opening bids are available (point count is not within ranges) so need to go to other sheets to find correct bid
  }
  return rebidStrength;
}

export function strengthOfResponderBalHand(hand) {
  // checking to see if opener2 has a weak medium or strong hand
  var hcp = getHcp(hand);
  var rebidStrength = "";

  if (hcp >= 6 && hcp <= 9) {
    rebidStrength = "min";
  } else if (hcp >= 11 && hcp <= 12) {
    rebidStrength = "med";
  } else if (hcp >= 13) {
    rebidStrength = "max";
  } else {
    rebidStrength = "noBid";
  }
  return rebidStrength;
}

export function strengthOfResponderUnbalHand(hand) {
  // checking to see if opener2 has a weak medium or strong hand
  var hcp = getHcp(hand);
  var dpLongSuit = getLongSuitDP(hand);
  var rebidStrength = "";

  if (hcp + dpLongSuit >= 6 && hcp + dpLongSuit <= 9) {
    rebidStrength = "min";
  } else if (hcp + dpLongSuit >= 10 && hcp + dpLongSuit <= 12) {
    rebidStrength = "med";
  } else if (hcp + dpLongSuit >= 13) {
    rebidStrength = "max";
  } else {
    rebidStrength = "noBid";
  }
  return rebidStrength;
}

export function noTrumpRebidStrength(hand) {
  // checking to see if opener2 has a weak medium or strong hand
  var hcp = getHcp(hand);

  var rebidStrength = "";

  if (hcp >= 14 && hcp <= 17) {
    rebidStrength = "med";
  } else if (hcp >= 16 && hcp <= 20) {
    rebidStrength = "max";
  } else {
    rebidStrength = "noBid";
  }
  return rebidStrength;
}
export function acolOpening1NT(hand) {
  // checking to see if acol opener1 has a weak medium or strong hand
  var hcp = getHcp(hand);
  var dpLongSuit = getLongSuitDP(hand);

  var ao1_NTStrength = "";

  if (dpLongSuit + hcp >= 12 && dpLongSuit + hcp <= 14) {
    ao1_NTStrength = "o1nt12";
  } else if (dpLongSuit + hcp >= 20 && dpLongSuit + hcp <= 22) {
    ao1_NTStrength = "o1nt20";
  } else if (dpLongSuit + hcp >= 23) {
    ao1_NTStrength = "o1nt23";
  } else {
    ao1_NTStrength = "noBid";
  }
  return ao1_NTStrength;
}
export function respondingTo1NT(hand) {
  // checking to see if responder1 has a weak medium or strong hand after 1nt opening bid
  var hcp = getHcp(hand);
  var dpLongSuit = getLongSuitDP(hand);
  var rebidStrength = "";

  if (dpLongSuit + hcp >= 0 && dpLongSuit + hcp <= 9) {
    rebidStrength = "r1nt0";
  } else if (dpLongSuit + hcp >= 10 && dpLongSuit + hcp <= 12) {
    rebidStrength = "r1nt10";
  } else if (dpLongSuit + hcp >= 13 && dpLongSuit + hcp <= 21) {
    rebidStrength = "r1nt13";
  } else if (dpLongSuit + hcp >= 22 && dpLongSuit + hcp <= 28) {
    rebidStrength = "r1nt22";
  } else {
    rebidStrength = "noBid";
  }
  return rebidStrength;
}

//GOT TO WRITE A FUNCTION FOR REVALUING HAND WITH DP SHORT SUITS WHEN FIT = TRUE
export function fit(hand, respondersBidSuit) {
  // to see if my hand holds 4 cards in a suit bid by my partner

  if (suitCount(hand, respondersBidSuit) >= 4) {
    return true;
  } else {
    return false;
  }
}

export function raisingPartnersFit(rebidStrength, fit, responder1) {
  //if i  have a fit how high do I raise them?
  var opener2 = "Pass";

  if (fit === true && rebidStrength === "Minimum Hand") {
    // raise their suit by 1 if minimum,2 if medium and 3 if maximum
    opener2 = Number(responder1.level) + 1 + responder1.suit;
  }
  if (fit === true && rebidStrength === "Medium Hand") {
    // raise their suit by 1 if minimum,2 if medium and 3 if maximum
    opener2 = Number(responder1.level) + 2 + responder1.suit;
  }
  if (fit === true && rebidStrength === "Strong Hand") {
    // raise their suit by 1 if minimum,2 if medium and 3 if maximum
    opener2 = Number(responder1.level) + 3 + responder1.suit;
  }
  return opener2;
}

export function cardsBalanced(hand) {
  //checks to see if hand is balanced with 2+ cards in every suit
  var balanced;
  var spades = suitCount(hand, "s");
  var hearts = suitCount(hand, "h");
  var diamonds = suitCount(hand, "d");
  var clubs = suitCount(hand, "c");

  if (spades > 1 && hearts > 1 && diamonds > 1 && clubs > 1) {
    balanced = true;
  } else {
    balanced = false;
  }
  return balanced;
}

export function hcpInEverySuit(hand) {
  //checks to see if has >= 2 points in every suit
  var hasTwoPointsInEachSuit;
  var hcpC = countOfSuitHCP(hand, "c"); //count of HCP in each
  var hcpD = countOfSuitHCP(hand, "d");
  var hcpH = countOfSuitHCP(hand, "h");
  var hcpS = countOfSuitHCP(hand, "s");
  var openersHCP = 15; //looks back at the bidding TBD

  if (hcpS < 2 || hcpH < 2 || hcpD < 2 || hcpC < 2) {
    hasTwoPointsInEachSuit = false;
  } else {
    hasTwoPointsInEachSuit = true;
  }
  return hasTwoPointsInEachSuit;
}
