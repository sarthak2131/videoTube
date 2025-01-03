import mongoose from 'mongoose';

const { Schema } = mongoose;

const tweetSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

export const Tweet = mongoose.model('Tweet', tweetSchema);
