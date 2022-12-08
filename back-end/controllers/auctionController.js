// const Product = require('../models/Product')
// const User = require('../models/User')
// const WebSocket = require('ws');

// const wss = new WebSocket.Server({ port: 8080 });

// class AuctionController {
//     constructor() {
//         this.items = {
//             item1: {
//             currentBid: 0,
//             currentBidder: '',
//             },
//         item2: {
//             currentBid: 0,
//             currentBidder: '',
//             },
//         };
//     }
//     bid(item, bid, bidder) {
//         if (bid > this.items[item].currentBid) {
//             this.items[item].currentBid = bid;
//             this.items[item].currentBidder = bidder;
//         }
//     }
//     getWinningBids() {
//         return this.items;
//     }
//     auctionEnded() {
//       // determine if the auction has ended
//       // return true or false
//     }
//   }