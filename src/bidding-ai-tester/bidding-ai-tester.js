import React, { useState, useEffect } from "react";
import * as game from "./core";
import { ao1Bids, aoc1Bids, ar1Bids } from "./bidding/biddingStrategies";
import { resetAndDealGame, removeToLowBids } from "./bidding/biddingUtils";
import * as bidIndex from "./bidIndex";
import Card from "../components/Card";
// import reactDOM
import ReactDOM from "react-dom";

const BiddingAiTester = ({ sendData }) => {
  let [bidResult, setBidResult] = useState("");

  //useEffect(() => {
  // Any side effects or updates can be performed here when bidResult changes
  //console.log("Bid result updated: ", bidResult);
  //}, [bidResult]); // The effect runs whenever bidResult changes

  let bidMatched = false;
  let bidCount = 0;
  //console.clear();
  resetAndDealGame();

  function handleClick(value) {}

  function dealClick(value) {
    bidMatched = false;
    bidCount = 0;

    do {
      //console.clear();
      resetAndDealGame();
      displayHands();
      bid();
      bidCount++;
    } while (
      !bidMatched &&
      bidCount < 100 &&
      game.gameState.currentBid === undefined
    );
    console.log("BID COUNT: " + bidCount);
  }

  function bid() {
    executeBids(0, ao1Bids);
    //console.log("ao1: ", ao1Bids);
    //console.log("ar1: ", ao1Bids);
    //console.log("aoc1: ", aoc1Bids);
    executeBids(2, ar1Bids);
    //executeBids(1, aoc1Bids);
  }

  function executeBids(handNum, potentialBids) {
    for (let bid of potentialBids) {
      doBid(bid.name, bid.func(game.gameState[`hand${handNum}`]), handNum);
    }
  }

  function doBid(bidName, possibleBids, handNum) {
    if (possibleBids.length > 0) {
      possibleBids = removeToLowBids(possibleBids);
      possibleBids.sort((a, b) => b - a);
      switch (possibleBids[0].bidder) {
        case "r1":
          game.gameState.r1Bid = possibleBids[0].r1Bid;
          game.gameState.currentBid = possibleBids[0].r1Bid;
          console.log("R1Bid!!!");
          displayStats(possibleBids[0].r1Bid, handNum);
          break;
        case "r2":
          game.gameState.r2Bid = possibleBids[0].r2Bid;
          game.gameState.currentBid = possibleBids[0].r2Bid;
          displayStats(possibleBids[0].r2Bid, handNum);
          break;
        case "o1":
          if (possibleBids[0].o1bid === undefined) {
            game.gameState.o1Bid = possibleBids[0].o1Bid;
            game.gameState.currentBid = possibleBids[0].o1Bid;
            displayStats(possibleBids[0].o1Bid, handNum);
          }
          break;
        case "oc":
          if (possibleBids[0].ocbid === undefined) {
            game.gameState.ocBid = possibleBids[0].ocBid;
            game.gameState.currentBid = possibleBids[0].ocBid;
            displayStats(possibleBids[0].ocBid, handNum);
          }
          break;
        case "o2":
          if (possibleBids[0].o2bid === undefined) {
            game.gameState.o2Bid = possibleBids[0].o2Bid;
            game.gameState.currentBid = possibleBids[0].o2Bid;
            displayStats(possibleBids[0].o2Bid, handNum);
          }
          break;
        case "o3":
          game.gameState.o3Bid = possibleBids[0].o3Bid;
          game.gameState.currentBid = possibleBids[0].o3Bid;
          displayStats(possibleBids[0].o3Bid, handNum);
          break;
        default:
          break;
      }
    }
    //console.log(possibleBids[0].bidder);
    console.log(game.gameState);
  }

  function displayStats(bid, handNum) {
    setBidResult(
      `Bid: ${bid}......HCP: ${
        game.gameState[`hand${handNum}`].HCP
      }......TotalPoints: ${
        game.gameState[`hand${handNum}`].TPLong
      }......Balanced: ${game.gameState[`hand${handNum}`].balanced}......reS: ${
        game.gameState[`hand${handNum}`].reStrength
      }......opS: ${
        game.gameState[`hand${handNum}`].opStrength
      }......HCPinEverySuit: ${game.gameState[`hand${handNum}`].hcpInEverySuit}`
    );
  }

  function displayHands() {
    const hands = ["hand0", "hand1", "hand2", "hand3"];
    hands.forEach((hand) => {
      const cards = game.gameState[hand].map((card, index) => {
        const suitIndex = game.handCharArray.indexOf(card.suit);
        const suitSymbol = game.suitSymbolArray[suitIndex];
        return (
          <Card
            key={index}
            value={game.valueSymbol[Number(card.val) - 2]}
            suit={suitSymbol}
          />
        );
      });
      ReactDOM.render(cards, document.getElementById(hand));
    });
  }

  if (game.gameState) {
    return (
      <div className="BiddingAiTester">
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
            <div style={{ display: "flex" }}>
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
                      <td id="bid0"></td>
                      <td id="bid1"></td>
                      <td id="bid2"></td>
                      <td id="bid3"></td>
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
        <div dangerouslySetInnerHTML={{ __html: bidResult }} />
        <button id="deal-butt" onClick={() => dealClick("Your Value")}>
          DEAL
        </button>
      </div>
    );
  } else {
    // Render a loading message or some other placeholder if data is not available
    return <div>Loading...</div>;
  }
};

export default BiddingAiTester;
