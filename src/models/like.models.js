import mongoose from 'mongoose';

const { Schema } = mongoose;

const likeSchema = new Schema({

  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  },
  likedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet'
  },
  playlists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist'
  }]
}, { timestamps: true });

export const Like = mongoose.model('Like', likeSchema);
