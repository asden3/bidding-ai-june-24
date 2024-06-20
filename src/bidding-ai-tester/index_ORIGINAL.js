import "../styles/index.scss";
import "../styles/testbidding.scss";

import * as game from "./core";
import * as bidIndex from "./bidIndex";

import ao1_oneLongSuit from "./bidding/acol-o1/ao1_oneLongSuit";
import ao1_44 from "./bidding/acol-o1/ao1_44";
import ao1_54 from "./bidding/acol-o1/ao1_54";
import ao1_55 from "./bidding/acol-o1/ao1_55";
import ao1_64 from "./bidding/acol-o1/ao1_64";
import ao1_65 from "./bidding/acol-o1/ao1_65";
import ao1_66 from "./bidding/acol-o1/ao1_66";
import ao1_74 from "./bidding/acol-o1/ao1_74";
import ao1_75 from "./bidding/acol-o1/ao1_75";
import ao1_76 from "./bidding/acol-o1/ao1_76";
import ao1_84 from "./bidding/acol-o1/ao1_84";
import ao1_85 from "./bidding/acol-o1/ao1_85";
import ao1_444 from "./bidding/acol-o1/ao1_444";
import ao1_544 from "./bidding/acol-o1/ao1_544";
import ao1_opening3Level from "./bidding/acol-o1/ao1_opening3";
import ao1_openingGame from "./bidding/acol-o1/ao1_openingGame";
//import ao1_threeLevelOpening from './bidding/acol-o1/ao1_threeLevelOpening';

import ar1_oneLongSuit from "./bidding/acol-r1/ar1_oneLongSuit";
import ar1_44 from "./bidding/acol-r1/ar1_44";
import ar1_54 from "./bidding/acol-r1/ar1_54";
import ar1_55 from "./bidding/acol-r1/ar1_55";
import ar1_64 from "./bidding/acol-r1/ar1_64";
import ar1_65 from "./bidding/acol-r1/ar1_65";
import ar1_66 from "./bidding/acol-r1/ar1_66";
import ar1_74 from "./bidding/acol-r1/ar1_74";
import ar1_75 from "./bidding/acol-r1/ar1_75";
import ar1_76 from "./bidding/acol-r1/ar1_76";
import ar1_84 from "./bidding/acol-r1/ar1_84";
import ar1_444 from "./bidding/acol-r1/ar1_444";
import ar1_544 from "./bidding/acol-r1/ar1_544";
import ar1_respondingTo1NT from "./bidding/acol-r1/ar1_respondingTo1NT";

import ao2_44 from "./bidding/acol-o2/ao2_44";
import ao2_54 from "./bidding/acol-o2/ao2_54";
import ao2_55 from "./bidding/acol-o2/ao2_55";
import ao2_64 from "./bidding/acol-o2/ao2_64";
import ao2_65 from "./bidding/acol-o2/ao2_65";
import ao2_66 from "./bidding/acol-o2/ao2_66";
import ao2_74 from "./bidding/acol-o2/ao2_74";
import ao2_75 from "./bidding/acol-o2/ao2_75";
import ao2_76 from "./bidding/acol-o2/ao2_76";
import ao2_84 from "./bidding/acol-o2/ao2_84";
import ao2_85 from "./bidding/acol-o2/ao2_85";
import ao2_444 from "./bidding/acol-o2/ao2_444";
import ao2_544 from "./bidding/acol-o2/ao2_544";
import ao2_oneLongSuit from "./bidding/acol-o2/ao2_oneLongSuit";

import ar2_suitPreference from "./bidding/acol-r2/ar2_suitPreference";
import ar2_44 from "./bidding/acol-r2/ar2_44";
import ar2_54 from "./bidding/acol-r2/ar2_54";
import ar2_444 from "./bidding/acol-r2/ar2_444";
import ar2_544 from "./bidding/acol-r2/ar2_544";
import ar2_5Plus5Plus from "./bidding/acol-r2/ar2_5Plus5Plus";
import ar2_6Plus4Plus from "./bidding/acol-r2/ar2_6Plus4Plus";
import ar2_oneLongSuit from "./bidding/acol-r2/ar2_oneLongSuit";

import ao3_444 from "./bidding/acol-o3/ao3_444";

var hand = {
  TP: "14",
  HCP: "12",
  numS: "",
  numH: "4",
  numD: "4",
  numC: "4",
  opStrength: "min",
};

var bids = {
  "01level": "1",
  "01suit": "c",
  bidNum: 0,
  currentBid: "",
};

var rebid = {};

var bidNum = 0;

const button = document.getElementById("deal-butt");
var bidMatched = false;
var bidCount = 0;

// deal button clicked
button.addEventListener("click", (event) => {
  bidMatched = false;
  bidCount = 0;
  // loop until bidding matches the criteria
  do {
    console.log("BID COUNT: " + bidCount);
    dealAndBid();
    bidCount++;
  } while (bidMatched == false && bidCount < 100);
  console.log("BID COUNT: " + bidCount);
});

function dealAndBid() {
  console.clear();
  game.resetState();
  game.deal();

  bidNum = 0;
  for (var x = 0; x < 21; x++) {
    $("#bid" + x).text("");
  }

  for (var x = 0; x < 4; x++) {
    game.buildHand(game.gameState["hand" + x]);
  }

  hand = game.gameState["hand0"];
  //console.log(game.gameState);

  for (var h = 0; h < 4; h++) {
    $("#hand" + h + "s").html("S&nbsp;");
    $("#hand" + h + "h").html("<span style='color: red;'>H</span>&nbsp;");
    $("#hand" + h + "d").html("<span style='color: red;'>D</span>&nbsp;");
    $("#hand" + h + "c").html("C&nbsp;");
    for (var x = 0; x < 13; x++) {
      var t = game.valueSymbol[game.gameState["hand" + h][x].val - 2];
      if (t == "10") {
        t = "T";
      }
      $("#hand" + h + game.gameState["hand" + h][x].suit).append(
        "<div class='card-notation'>" + t + " </div>"
      );
    }
  }

  console.log(game.gameState);
  document.getElementById("h0-o1bid").innerHTML = "";
  document.getElementById("h0-o2bid").innerHTML = "";

  console.log(
    "HCP: " +
      game.gameState["hand0"].HCP +
      " TP: " +
      game.gameState["hand0"].TPLong +
      " balanced: " +
      game.gameState["hand0"].balanced +
      " opStrength: " +
      game.gameState["hand0"].opStrength +
      " HCPinEverySuit: " +
      game.gameState["hand0"].hcpInEverySuit
  );
  var handNum = 0;
  doBid("ao1_54", ao1_54(game.gameState["hand0"]), handNum);
  doBid("ao1_544", ao1_544(game.gameState["hand0"]), handNum);
  doBid("ao1_55", ao1_55(game.gameState["hand0"]), handNum);
  doBid("ao1_44", ao1_44(game.gameState["hand0"]), handNum);
  doBid("ao1_74", ao1_74(game.gameState["hand0"]), handNum);
  doBid("ao1_75", ao1_75(game.gameState["hand0"]), handNum);
  doBid("ao1_76", ao1_76(game.gameState["hand0"]), handNum);
  doBid("ao1_84", ao1_84(game.gameState["hand0"]), handNum);
  doBid("ao1_85", ao1_85(game.gameState["hand0"]), handNum);
  doBid("ao1_444", ao1_444(game.gameState["hand0"]), handNum);

  doBid("ao1_oneLongSuit", ao1_oneLongSuit(game.gameState["hand0"]), handNum);
  doBid("ao1_64", ao1_64(game.gameState["hand0"]), handNum);
  doBid("ao1_65", ao1_65(game.gameState["hand0"]), handNum);
  doBid("ao1_66", ao1_66(game.gameState["hand0"]), handNum);
  doBid(
    "ao1_opening3Level",
    ao1_opening3Level(game.gameState["hand0"]),
    handNum
  );
  doBid("ao1_openingGame", ao1_openingGame(game.gameState["hand0"]), handNum);
  //doBid("ao1_threeLevelOpening", ao1_threeLevelOpening(game.gameState['hand0']), handNum);
  var o1Bid = game.gameState.o1Bid;
  console.log("o1 Bid: " + game.gameState.o1Bid);
  handNum = 2;
  // responder
  //console.log("HAND 2");
  //console.table(game.gameState['hand2']);
  //console.log("HCP: " + game.gameState['hand2'].HCP + " TP: " + game.gameState['hand2'].TPLong + " balanced: " + game.gameState['hand2'].balanced + " reStrength: " + game.gameState['hand2'].reStrength + " HCPinEverySuit: " + game.gameState['hand2'].hcpInEverySuit + " NoTrumps: " + game.gameState['hand2'].notrumps + " strengthOfResponderUnbalHand: " + hand.strengthOfResponderUnbalHand);
  document.getElementById("h2-r1bid").innerHTML = "";
  doBid(
    "ar1_oneLongSuit",
    ar1_oneLongSuit(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_54",
    ar1_54(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_544",
    ar1_544(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_55",
    ar1_55(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_44",
    ar1_44(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_444",
    ar1_444(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_64",
    ar1_64(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_65",
    ar1_65(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_66",
    ar1_66(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_74",
    ar1_74(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_75",
    ar1_75(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_76",
    ar1_76(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_84",
    ar1_84(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  doBid(
    "ar1_respondingTo1NT",
    ar1_respondingTo1NT(game.gameState["hand2"], game.gameState.o1Bid),
    handNum
  );
  var r1Bid = game.gameState.r1Bid;
  console.log("r1 Bid: " + game.gameState.r1Bid);
  handNum = 0;

  document.getElementById("h0-o2bid").innerHTML = "";
  doBid("ao2_44", ao2_44(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_54", ao2_54(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_55", ao2_55(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_64", ao2_64(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_65", ao2_65(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_66", ao2_66(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_74", ao2_74(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_75", ao2_75(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_76", ao2_76(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_84", ao2_84(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_85", ao2_85(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_444", ao2_444(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid("ao2_544", ao2_544(game.gameState["hand0"], o1Bid, r1Bid), handNum);
  doBid(
    "ao2_oneLongSuit",
    ao2_oneLongSuit(game.gameState["hand0"], o1Bid, r1Bid),
    handNum
  );
  //console.log("HAND" + handNum);
  //console.table(hand);o2Bid

  var o2Bid = game.gameState.o2Bid;
  console.log("o2 Bid: " + game.gameState.o2Bid);
  handNum = 2;

  document.getElementById("h2-r2bid").innerHTML = "";
  doBid(
    "ar2_suitPreference",
    ar2_suitPreference(game.gameState, o1Bid, r1Bid, o2Bid),
    handNum
  );
  doBid(
    "ar2_44",
    ar2_44(game.gameState["hand2"], o1Bid, r1Bid, o2Bid),
    handNum
  );
  doBid(
    "ar2_54",
    ar2_54(game.gameState["hand2"], o1Bid, r1Bid, o2Bid),
    handNum
  );
  doBid(
    "ar2_444",
    ar2_444(game.gameState["hand2"], o1Bid, r1Bid, o2Bid),
    handNum
  );
  doBid(
    "ar2_544",
    ar2_544(game.gameState["hand2"], o1Bid, r1Bid, o2Bid),
    handNum
  );
  doBid(
    "ar2_5Plus5Plus",
    ar2_5Plus5Plus(game.gameState["hand2"], o1Bid, r1Bid, o2Bid),
    handNum
  );
  doBid(
    "ar2_6Plus4Plus",
    ar2_6Plus4Plus(game.gameState["hand2"], o1Bid, r1Bid, o2Bid),
    handNum
  );
  doBid(
    "ar2_oneLongSuit",
    ar2_oneLongSuit(game.gameState["hand2"], o1Bid, r1Bid, o2Bid),
    handNum
  );

  var r2Bid = game.gameState.r2Bid;
  console.log("r2BID " + game.gameState.r2Bid);

  document.getElementById("h0-o3bid").innerHTML = "";
  handNum = 0;
  doBid(
    "ao3_444",
    ao3_444(game.gameState["hand0"], o1Bid, r1Bid, o2Bid, r2Bid),
    handNum
  );

  //console.log("HAND" + handNum);
  //console.table(hand);o3Bid;

  var o3Bid = game.gameState.o3Bid;
  //PLACE TO SELECT DESIRED BID

  //if(r2Bid != undefined) {
  //var t = "1s";
  //console.log("t " + t.substring(1, 1));
  //if (o2Bid == "2c" || o1Bid == "2d" || o1Bid == "2h" || o1Bid == "2s" || o1Bid == "2nt") {
  /* 66
    if (game.gameState.o1Bid != undefined && game.gameState.o1Bid != "" && suitCount(game.gameState['hand0'], "s") == 6 && suitCount(game.gameState['hand0'], "d") == 6) {
        bidMatched = true;
    }
    */
  if (game.gameState.o1Bid != undefined && game.gameState.o1Bid != "") {
    bidMatched = true;
  }
  /*
    VARIATIONS OF DESIRED BIDS

    if (game.gameState.o1Bid != undefined && game.gameState.o1Bid != "" && game.gameState['hand0'].opStrength == "min") {
        bidMatched = true;
    }
    if (game.gameState.r2Bid != undefined && game.gameState.r2Bid != "") {
    if (r2Bid != undefined) {
    if (o2Bid == "2nt") {
    if (o1Bid == "1nt") {
    if (o1Bid.substring(1, 1) == "1") {
     if (o1Bid == "1c" || o1Bid == "1d" || o1Bid == "1h" || o1Bid == "1s" || o1Bid == "1nt") {
    if (r1Bid == "5c") {
    if (hand.HCP == 11) {
    */
}

// NOTE: this is a duplicate of the countSuit function in function.js ... use that and delete this //
function suitCount(hand, suit) {
  //counts the cards in a suit
  //count suits
  var count = 0;
  for (var n = 0; n < hand.length; n++) {
    if (hand[n].suit == suit) {
      count++;
    }
  }
  return count;
}

function doBid(bidName, possibleBids, handNum) {
  if (possibleBids != "" && possibleBids != null) {
    possibleBids = removeToLowBids(possibleBids);
  }
  if (possibleBids != "" && possibleBids != null) {
    possibleBids.sort((a, b) => b - a); // sort by descending weight
    if (possibleBids[0].bidder == "r1") {
      game.gameState.r1Bid = possibleBids[0].r1Bid;
      game.gameState.currentBid = possibleBids[0].r1Bid;
      document.getElementById("h" + handNum + "-r1bid").innerHTML =
        "<span style='color: green; font-weight: bold;'>" +
        possibleBids[0].r1Bid +
        "</span> &nbsp;&nbsp;&nbsp;  HCP: " +
        game.gameState["hand" + handNum].HCP +
        "&nbsp;&nbsp;&nbsp;  TP: " +
        game.gameState["hand" + handNum].TPLong +
        "&nbsp;&nbsp;&nbsp; bal: " +
        game.gameState["hand" + handNum].balanced +
        "&nbsp;&nbsp;&nbsp; reS: " +
        game.gameState["hand" + handNum].reStrength +
        "&nbsp;&nbsp;&nbsp; HCPinES: " +
        game.gameState["hand" + handNum].hcpInEverySuit;
    }
    if (possibleBids[0].bidder == "r2") {
      game.gameState.r2Bid = possibleBids[0].r2Bid;
      game.gameState.currentBid = possibleBids[0].r2Bid;
      document.getElementById("h" + handNum + "-r2bid").innerHTML =
        "<span style='color: green; font-weight: bold;'>" +
        possibleBids[0].r2Bid +
        "</span> &nbsp;&nbsp;&nbsp;  HCP: " +
        game.gameState["hand" + handNum].HCP +
        "&nbsp;&nbsp;&nbsp;  TP: " +
        game.gameState["hand" + handNum].TPLong +
        "&nbsp;&nbsp;&nbsp; bal: " +
        game.gameState["hand" + handNum].balanced +
        "&nbsp;&nbsp;&nbsp; reS: " +
        game.gameState["hand" + handNum].reStrength +
        "&nbsp;&nbsp;&nbsp; HCPinES: " +
        game.gameState["hand" + handNum].hcpInEverySuit;
    }

    if (possibleBids[0].bidder == "o1") {
      if (possibleBids[0].o1bid == undefined) {
        game.gameState.o1Bid = possibleBids[0].o1Bid;
        game.gameState.currentBid = possibleBids[0].o1Bid;
        document.getElementById("h" + handNum + "-o1bid").innerHTML =
          "<span style='color: green; font-weight: bold;'>" +
          possibleBids[0].o1Bid +
          "</span>  &nbsp;&nbsp;&nbsp; HCP: " +
          game.gameState["hand" + handNum].HCP +
          "&nbsp;&nbsp;&nbsp; TP: " +
          game.gameState["hand" + handNum].TPLong +
          "&nbsp;&nbsp;&nbsp; bal: " +
          game.gameState["hand" + handNum].balanced +
          "&nbsp;&nbsp;&nbsp; opS: " +
          game.gameState["hand" + handNum].opStrength +
          "&nbsp;&nbsp;&nbsp; HCPinES: " +
          game.gameState["hand" + handNum].hcpInEverySuit;
      }
    }

    if (possibleBids[0].bidder == "o2") {
      if (possibleBids[0].o2bid == undefined) {
        game.gameState.o2Bid = possibleBids[0].o2Bid;
        game.gameState.currentBid = possibleBids[0].o2Bid;
        document.getElementById("h" + handNum + "-o2bid").innerHTML =
          "<span style='color: green; font-weight: bold;'>" +
          possibleBids[0].o2Bid +
          "</span>  &nbsp;&nbsp;&nbsp; HCP: " +
          game.gameState["hand" + handNum].HCP +
          "&nbsp;&nbsp;&nbsp; TP: " +
          game.gameState["hand" + handNum].TPLong +
          "&nbsp;&nbsp;&nbsp; bal: " +
          game.gameState["hand" + handNum].balanced +
          "&nbsp;&nbsp;&nbsp; opS: " +
          game.gameState["hand" + handNum].opStrength +
          "&nbsp;&nbsp;&nbsp; HCPinES: " +
          game.gameState["hand" + handNum].hcpInEverySuit;
      }
    }

    if (possibleBids[0].bidder == "o3") {
      game.gameState.o3Bid = possibleBids[0].o3Bid;
      game.gameState.currentBid = possibleBids[0].o3Bid;
      document.getElementById("h" + handNum + "-o3bid").innerHTML =
        "<span style='color: green; font-weight: bold;'>" +
        possibleBids[0].o3Bid;
    }

    console.log("BID SHEET " + bidName + " " + handNum);
    console.table(possibleBids);
  }
}

function removeToLowBids(possibleBids) {
  for (var index = possibleBids.length - 1; index >= 0; index--) {
    if (
      possibleBids[index].bidder == "r1" &&
      game.bidRank.indexOf(possibleBids[index].r1Bid) <=
        game.bidRank.indexOf(game.gameState.currentBid)
    ) {
      possibleBids.splice(index, 1);
    } else if (
      possibleBids[index].bidder == "o1" &&
      game.bidRank.indexOf(possibleBids[index].o1Bid) <=
        game.bidRank.indexOf(game.gameState.currentBid)
    ) {
      possibleBids.splice(index, 1);
    } else if (
      possibleBids[index].bidder == "o2" &&
      game.bidRank.indexOf(possibleBids[index].o2Bid) <=
        game.bidRank.indexOf(game.gameState.currentBid)
    ) {
      possibleBids.splice(index, 1);
    }
  }
  return possibleBids;
}

document.getElementById("h0-o1bid").innerHTML = "HH";
document.getElementById("h0-o2bid").innerHTML = "HH";

const bidButton = document.getElementsByClassName("bidbutt");

function bidButtClicked() {
  $("#bid" + bidNum).text(this.id);
  bidNum++;
}

Array.from(bidButton).forEach(function (element) {
  element.addEventListener("click", bidButtClicked);
});
