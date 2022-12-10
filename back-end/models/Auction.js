import mongoose from 'mongoose'


const AuctionSchema = new mongoose.Schema({
    itemName: {
    type: String,
    required: 'Item name is required'
  },
    description: {
    type: String,
  },
    image: {
    data: String,
  },
    bidStart: {
    type: Date,
    default: Date.now
  },
    bidEnd: {
    type: Date,
    required: true
  },
    seller: {
    type: mongoose.Schema.ObjectId, 
    ref: 'User'
  },
    startingBid: { type: Number, default: 0 },
    bids: [{
    bidder: {type: mongoose.Schema.ObjectId, ref: 'User'},
    bid: Number,
    time: Date
  }]
})

export default mongoose.model('Auction', AuctionSchema)