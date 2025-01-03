import mongoose ,{Schema} from "mongoose";

const playlistSchema = new Schema({

  owner: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
  }],
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true 
});

export const Playlist = mongoose.model('Playlist', playlistSchema);


