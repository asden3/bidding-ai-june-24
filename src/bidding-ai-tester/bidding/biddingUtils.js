import * as game from "../core";

export function resetAndDealGame() {
  game.resetState();
  game.deal();
}

export function removeTooLowBids(possibleBids) {
  const currentBidRank = game.bidRank.indexOf(game.gameState.currentBid);
  return possibleBids.filter((bid) => {
    const bidderKey = `${bid.bidder}Bid`;
    const bidRank = game.bidRank.indexOf(bid[bidderKey]);
    return bidRank > currentBidRank;
  });
  /*for (var index = possibleBids.length - 1; index >= 0; index--) {
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
  }*/
}
