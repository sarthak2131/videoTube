import mongoose from 'mongoose';
import mongooseAggregatePaginate from  'mongoose-aggregate-paginate-v2'

const { Schema } = mongoose;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rate: {
    type: Date,
    default: Date.now
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });


commentSchema.plugin(mongooseAggregatePaginate)
export const Comment = mongoose.model('Comment', commentSchema);
