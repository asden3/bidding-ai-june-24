import * as fn from "../../functions";

export default function (gameState, handNum, o1Bid, r1Bid, o2Bid) {
  console.log("WARNING: Preferences only currently works with hands 0 and 2.");
  if (o2Bid != undefined) {
    // if NT then skip
    if (o1Bid.charAt(1) != "n" && o2Bid.charAt(1) != "n") {
      var rebidPreference = [{}];
      rebidPreference[0].r2Bid = ""; // "" == "pass" // Fix typo: change "Pass" to "pass"
      var opener = gameState["hand0"];
      var responder = gameState["hand2"];
      var o1Suit = o1Bid.charAt(1);
      var o2Suit = o2Bid.charAt(1);

      // get longer of theo1 and o2 suits in responder hand
      var longerSuit = "";
      var l = fn.suitCount(responder, o1Suit);
      longerSuit = o1Suit;

      if (fn.suitCount(responder, o2Suit) > l) {
        longerSuit = o2Suit;
        l = fn.suitCount(responder, o2Suit);
      }

      //var r2Suit = responder;
      if (responder.reStrength === "min") {
        var o1SuitCount = fn.suitCount(opener, o1Suit);
        var o2SuitCount = fn.suitCount(opener, o2Suit);

        if (o1Bid.charAt(1) === o2Bid.charAt(1)) {
          // if o1 and o2 are same suit
          rebidPreference[0].r2Bid = ""; //"pass"
        } else if (
          fn.suitCount(gameState["hand2"], o1Suit) ===
          fn.suitCount(gameState["hand2"], o2Suit)
        ) {
          rebidPreference[0].r2Bid = o1Bid;
        } else if (longerSuit === o1Suit) {
          rebidPreference[0].r2Bid = o1Bid;
        } else {
          rebidPreference[0].r2Bid = ""; //"pass"
        }

        //var o1SuitCount = suitCount(opener, o1Suit);
        // get suit of o2 bid
        // get suit of r2 bidIndex
      }
      // get the two 01 and r2 suits in arrays, longest first

      /*if (hand === responderHandStrength) {
                if (r2[0].length() === r2[0].length()) {
                    bid = o1.bid;
                } else {
                    if (hand.longestSuit === o1.suit) {
                        bid = o1.bid;
                    } else {
                        pass;
                    }
                }
            }
            */

      console.log("PREFERENCE: ");
      console.table(rebidPreference);
      return rebidPreference;
    }
  }
}
