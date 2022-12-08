// const express = require('express');
// const router = express.Router();
// const auctionController = require('../controllers/auctionController')
// const controller = new AuctionController();

// router.post('/bid', (req, res) => {
//     // handle a bid from the client
//     const { item, bid, bidder } = req.body;
//     controller.bid(item, bid, bidder);
//     res.send();
// });

// router.get('/winning-bids', (req, res) => {
//     // return the winning bids and bidders
//     res.send(controller.getWinningBids());
// });

// router.get('/auction-ended', (req, res) => {
//     // determine if the auction has ended
//     const ended = controller.auctionEnded();
//     res.send({ ended });
// });

// module.exports = router;
