import * as React from "react";
import * as game from "./core";
import * as bidIndex from "./bidIndex";
import Card from "../components/Card";
// import reactDOM
import ReactDOM from "react-dom";

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

let hand2;

const BiddingAiTester = ({ sendData }) => {
  let hand = {
    TP: "14",
    HCP: "12",
    numS: "",
    numH: "4",
    numD: "4",
    numC: "4",
    opStrength: "min",
  };

  let bids = {
    level: "1",
    suit: "c",
    bidNum: 0,
    currentBid: "",
  };

  let bidArray = ["p"];

  let rebid = {};

  let bidNum = 0;

  //const button = document.getElementById("deal-butt");
  let bidMatched = false;
  let bidCount = 0;

  //console.clear();
  //game.resetState();
  //game.deal();
  dealAndBid();

  function displayHands() {
    let hands = ["hand0", "hand1", "hand2", "hand3"];
    for (let x = 0; x < 4; x++) {
      const cards = game.gameState[hands[x]].map((card, index) => {
        // Find the index of card.suit in game.handCharArray
        let suitIndex = game.handCharArray.indexOf(card.suit);

        // Use the index to get the corresponding value from game.suitArray
        let suitSymbol = game.suitSymbolArray[suitIndex];

        return (
          <Card
            key={index}
            value={game.valueSymbol[Number(card.val) - 2]}
            suit={suitSymbol}
          />
        );
      });

      // Render the cards inside the div with the id of hand2
      ReactDOM.render(cards, document.getElementById(hands[x]));
    }
  }

  function handleClick(value) {}

  function dealClick(value) {
    bidMatched = false;
    bidCount = 0;
    // loop until bidding matches the criteria
    do {
      //console.log("BID COUNT: " + bidCount);
      dealAndBid();
      displayHands();
      bidCount++;
    } while (
      bidMatched === false &&
      bidCount < 100 &&
      game.gameState.currentBid === undefined
    );
    console.log("BID COUNT: " + bidCount);
    //console.log("BID: " + game.gameState.currentBid);
  }

  function dealAndBid() {
    console.clear();
    game.resetState();
    game.deal();
    //console.log(game.gameState);
    bidNum = 0;

    //clear bidding table
    for (var x = 0; x < 21; x++) {
      bids[x] = "f";
      ///$("#bid" + x).text("");
    }

    for (var x = 0; x < 4; x++) {
      game.buildHand(game.gameState["hand" + x]);
    }

    //console.log(game.gameState);
    //document.getElementById("h0-o1bid").innerHTML = "";
    //document.getElementById("h0-o2bid").innerHTML = "";

    console.log(
      "HCP: " +
        game.gameState["hand0"].HCP +
        "    TP: " +
        game.gameState["hand0"].TPLong +
        "    balanced: " +
        game.gameState["hand0"].balanced +
        "    opStrength: " +
        game.gameState["hand0"].opStrength +
        "    HCPinEverySuit: " +
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

    console.log("o1 Bid: " + game.gameState.o1Bid);
    handNum = 2;
  }

  function doBid(bidName, possibleBids, handNum) {
    if (possibleBids.length > 0) {
      console.log("Possible Bids: ", bidName, possibleBids);
    }

    // remove bids lower thatn the current bid
    if (possibleBids != "" && possibleBids != null) {
      possibleBids = removeToLowBids(possibleBids);
    }

    // sort by descending weight
    if (possibleBids != "" && possibleBids !== null) {
      possibleBids.sort((a, b) => b - a);

      if (possibleBids[0].bidder === "r1") {
        game.gameState.r1Bid = possibleBids[0].r1Bid;
        game.gameState.currentBid = possibleBids[0].r1Bid;
        ///document.getElementById("h" + handNum + "-r1bid").innerHTML =
        /*
        console.log(
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
            game.gameState["hand" + handNum].hcpInEverySuit
        );*/
      }
      if (possibleBids[0].bidder === "r2") {
        game.gameState.r2Bid = possibleBids[0].r2Bid;
        game.gameState.currentBid = possibleBids[0].r2Bid;
        /*console.log(
          (document.getElementById("h" + handNum + "-r2bid").innerHTML =
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
            game.gameState["hand" + handNum].hcpInEverySuit)
        );*/
      }

      if (possibleBids[0].bidder === "o1") {
        if (possibleBids[0].o1bid === undefined) {
          game.gameState.o1Bid = possibleBids[0].o1Bid;
          game.gameState.currentBid = possibleBids[0].o1Bid;
          ///document.getElementById("h" + handNum + "-o1bid").innerHTML =
          /*console.log(
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
              game.gameState["hand" + handNum].hcpInEverySuit
          );*/
        }
      }

      if (possibleBids[0].bidder === "o2") {
        if (possibleBids[0].o2bid === undefined) {
          game.gameState.o2Bid = possibleBids[0].o2Bid;
          game.gameState.currentBid = possibleBids[0].o2Bid;
          ///document.getElementById("h" + handNum + "-o2bid").innerHTML =
          /*console.log(
            possibleBids[0].o2Bid +
              "  &nbsp;&nbsp;&nbsp; HCP: " +
              game.gameState["hand" + handNum].HCP +
              "&nbsp;&nbsp;&nbsp; TP: " +
              game.gameState["hand" + handNum].TPLong +
              "&nbsp;&nbsp;&nbsp; bal: " +
              game.gameState["hand" + handNum].balanced +
              "&nbsp;&nbsp;&nbsp; opS: " +
              game.gameState["hand" + handNum].opStrength +
              "&nbsp;&nbsp;&nbsp; HCPinES: " +
              game.gameState["hand" + handNum].hcpInEverySuit
          );*/
        }
      }

      if (possibleBids[0].bidder === "o3") {
        game.gameState.o3Bid = possibleBids[0].o3Bid;
        game.gameState.currentBid = possibleBids[0].o3Bid;
        ///document.getElementById("h" + handNum + "-o3bid").innerHTML =
        /*console.log(
          "<span style='color: green; font-weight: bold;'>" +
            possibleBids[0].o3Bid
        );*/
      }

      console.log("BID SHEET " + bidName + " " + handNum);
      //console.table(possibleBids);
      //console.log(game.gameState);
    }
  }

  // remove bids lower than the current bid
  function removeToLowBids(possibleBids) {
    for (var index = possibleBids.length - 1; index >= 0; index--) {
      if (
        possibleBids[index].bidder === "r1" &&
        game.bidRank.indexOf(possibleBids[index].r1Bid) <=
          game.bidRank.indexOf(game.gameState.currentBid)
      ) {
        possibleBids.splice(index, 1);
      } else if (
        possibleBids[index].bidder === "o1" &&
        game.bidRank.indexOf(possibleBids[index].o1Bid) <=
          game.bidRank.indexOf(game.gameState.currentBid)
      ) {
        possibleBids.splice(index, 1);
      } else if (
        possibleBids[index].bidder === "o2" &&
        game.bidRank.indexOf(possibleBids[index].o2Bid) <=
          game.bidRank.indexOf(game.gameState.currentBid)
      ) {
        possibleBids.splice(index, 1);
      }
    }
    return possibleBids;
  }

  if (game.gameState) {
    //console.log("game.gameState");
    //console.log(game.gameState);
    return (
      <div className="BiddingAiTester">
        <div id="bidpad">
          <table className="bidPadTable">
            <tbody>
              <tr>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
              </tr>
              <tr>
                <td id="bid0">{game.gameState.o1Bid}</td>
                <td id="bid1">{bids[1]}</td>
                <td id="bid2">{bids[2]}</td>
                <td id="bid3">{bids[3]}</td>
              </tr>
              <tr>
                <td id="bid4"></td>
                <td id="bid5"></td>
                <td id="bid6"></td>
                <td id="bid7"></td>
              </tr>
              <tr>
                <td id="bid8"></td>
                <td id="bid9"></td>
                <td id="bid10"></td>
                <td id="bid11"></td>
              </tr>
              <tr>
                <td id="bid12"></td>
                <td id="bid13"></td>
                <td id="bid14"></td>
                <td id="bid15"></td>
              </tr>
              <tr>
                <td id="bid16"></td>
                <td id="bid17"></td>
                <td id="bid18"></td>
                <td id="bid19"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="bidbutts">
          <table>
            <tbody>
              <tr>
                <td>
                  <button
                    id="1c"
                    className="bidbutt"
                    onClick={() => handleClick("1C")}
                  >
                    1C
                  </button>
                </td>
                <td>
                  <button
                    id="1d"
                    className="bidbutt"
                    onClick={() => handleClick("1D")}
                  >
                    1D
                  </button>
                </td>
                <td>
                  <button
                    id="1h"
                    className="bidbutt"
                    onClick={() => handleClick("1H")}
                  >
                    1H
                  </button>
                </td>
                <td>
                  <button
                    id="1s"
                    className="bidbutt"
                    onClick={() => handleClick("1S")}
                  >
                    1S
                  </button>
                </td>
                <td>
                  <button
                    id="1nt"
                    className="bidbutt"
                    onClick={() => handleClick("1NT")}
                  >
                    1NT
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="2c"
                    className="bidbutt"
                    onClick={() => handleClick("2C")}
                  >
                    2C
                  </button>
                </td>
                <td>
                  <button
                    id="2d"
                    className="bidbutt"
                    onClick={() => handleClick("2D")}
                  >
                    2D
                  </button>
                </td>
                <td>
                  <button
                    id="2h"
                    className="bidbutt"
                    onClick={() => handleClick("2H")}
                  >
                    2H
                  </button>
                </td>
                <td>
                  <button
                    id="2s"
                    className="bidbutt"
                    onClick={() => handleClick("2S")}
                  >
                    2S
                  </button>
                </td>
                <td>
                  <button
                    id="2nt"
                    className="bidbutt"
                    onClick={() => handleClick("2NT")}
                  >
                    2NT
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="3c"
                    className="bidbutt"
                    onClick={() => handleClick("3C")}
                  >
                    3C
                  </button>
                </td>
                <td>
                  <button
                    id="3d"
                    className="bidbutt"
                    onClick={() => handleClick("3D")}
                  >
                    3D
                  </button>
                </td>
                <td>
                  <button
                    id="3h"
                    className="bidbutt"
                    onClick={() => handleClick("3H")}
                  >
                    3H
                  </button>
                </td>
                <td>
                  <button
                    id="3s"
                    className="bidbutt"
                    onClick={() => handleClick("3S")}
                  >
                    3S
                  </button>
                </td>
                <td>
                  <button
                    id="3nt"
                    className="bidbutt"
                    onClick={() => handleClick("3NT")}
                  >
                    3NT
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="4c"
                    className="bidbutt"
                    onClick={() => handleClick("4C")}
                  >
                    4C
                  </button>
                </td>
                <td>
                  <button
                    id="4d"
                    className="bidbutt"
                    onClick={() => handleClick("4D")}
                  >
                    4D
                  </button>
                </td>
                <td>
                  <button
                    id="4h"
                    className="bidbutt"
                    onClick={() => handleClick("4H")}
                  >
                    4H
                  </button>
                </td>
                <td>
                  <button
                    id="4s"
                    className="bidbutt"
                    onClick={() => handleClick("4S")}
                  >
                    4S
                  </button>
                </td>
                <td>
                  <button
                    id="4nt"
                    className="bidbutt"
                    onClick={() => handleClick("4NT")}
                  >
                    4NT
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="5c"
                    className="bidbutt"
                    onClick={() => handleClick("5C")}
                  >
                    5C
                  </button>
                </td>
                <td>
                  <button
                    id="5d"
                    className="bidbutt"
                    onClick={() => handleClick("5D")}
                  >
                    5D
                  </button>
                </td>
                <td>
                  <button
                    id="5h"
                    className="bidbutt"
                    onClick={() => handleClick("5H")}
                  >
                    5H
                  </button>
                </td>
                <td>
                  <button
                    id="5s"
                    className="bidbutt"
                    onClick={() => handleClick("5S")}
                  >
                    5S
                  </button>
                </td>
                <td>
                  <button
                    id="5nt"
                    className="bidbutt"
                    onClick={() => handleClick("5NT")}
                  >
                    5NT
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="6c"
                    className="bidbutt"
                    onClick={() => handleClick("6C")}
                  >
                    6C
                  </button>
                </td>
                <td>
                  <button
                    id="6d"
                    className="bidbutt"
                    onClick={() => handleClick("6D")}
                  >
                    6D
                  </button>
                </td>
                <td>
                  <button
                    id="6h"
                    className="bidbutt"
                    onClick={() => handleClick("6H")}
                  >
                    6H
                  </button>
                </td>
                <td>
                  <button
                    id="6s"
                    className="bidbutt"
                    onClick={() => handleClick("6S")}
                  >
                    6S
                  </button>
                </td>
                <td>
                  <button
                    id="6nt"
                    className="bidbutt"
                    onClick={() => handleClick("6NT")}
                  >
                    6NT
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="7c"
                    className="bidbutt"
                    onClick={() => handleClick("7C")}
                  >
                    7C
                  </button>
                </td>
                <td>
                  <button
                    id="7d"
                    className="bidbutt"
                    onClick={() => handleClick("7D")}
                  >
                    7D
                  </button>
                </td>
                <td>
                  <button
                    id="7h"
                    className="bidbutt"
                    onClick={() => handleClick("7H")}
                  >
                    7H
                  </button>
                </td>
                <td>
                  <button
                    id="7s"
                    className="bidbutt"
                    onClick={() => handleClick("7S")}
                  >
                    7S
                  </button>
                </td>
                <td>
                  <button
                    id="7nt"
                    className="bidbutt"
                    onClick={() => handleClick("7NT")}
                  >
                    7NT
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="P"
                    className="bidbutt"
                    onClick={() => handleClick("P")}
                  >
                    P
                  </button>
                </td>
                <td>
                  <button
                    id="X"
                    className="bidbutt"
                    onClick={() => handleClick("X")}
                  >
                    X
                  </button>
                </td>
                <td>
                  <button
                    id="XX"
                    className="bidbutt"
                    onClick={() => handleClick("XX")}
                  >
                    XX
                  </button>
                </td>
                <td>
                  <button className="bidbutt"></button>
                </td>
                <td>
                  <button className="bidbutt"></button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <button id="deal-butt" onClick={() => dealClick("Your Value")}>
          DEAL
        </button>
        <div id="parent">
          <div id="hand2">
            {game.gameState.hand2.map((card, index) => (
              <Card
                key={index}
                value={game.valueSymbol[Number(card.val) - 2]}
                suit={card.suit}
              />
            ))}
          </div>
          <div id="middle">
            <div id="hand3">
              {game.gameState.hand3.map((card, index) => (
                <Card
                  key={index}
                  value={game.valueSymbol[Number(card.val) - 2]}
                  suit={card.suit}
                />
              ))}
            </div>
            <div id="hand1">
              {game.gameState.hand1.map((card, index) => (
                <Card
                  key={index}
                  value={game.valueSymbol[Number(card.val) - 2]}
                  suit={card.suit}
                />
              ))}
            </div>
          </div>
          <div id="hand0">
            {game.gameState.hand0.map((card, index) => (
              <Card
                key={index}
                value={game.valueSymbol[Number(card.val) - 2]}
                suit={card.suit}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    // Render a loading message or some other placeholder if data is not available
    return <div>Loading...</div>;
  }
};

export default BiddingAiTester;
