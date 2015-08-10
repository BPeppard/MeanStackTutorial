var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  post: {type: mongoose.Schema.Type.ObjectId, ref: 'Post'}
});

mongoose.model('Comment', CommentSchema);
