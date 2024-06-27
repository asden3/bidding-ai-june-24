import * as game from "../core";

export function resetAndDealGame() {
  game.resetState();
  game.deal();
}

export function removeToLowBids(possibleBids) {
  const currentBidRank = game.bidRank.indexOf(game.gameState.currentBid);
  return possibleBids.filter((bid) => {
    const bidderKey = `${bid.bidder}Bid`;
    const bidRank = game.bidRank.indexOf(bid[bidderKey]);
    return bidRank > currentBidRank;
  });
}
