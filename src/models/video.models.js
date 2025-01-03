import mongoose from 'mongoose';
import mongooseAggregatePaginate from  'mongoose-aggregate-paginate-v2'
const { Schema } = mongoose;

const videoSchema = new Schema({
  videoFile: {
    type: String,
    required: true
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  thumbnail: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  watchHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  duration: {
    type: Number // Duration in seconds
  },
  views: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });


videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model('Video', videoSchema);
