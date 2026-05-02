const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  photo: String,
  positive: String,
  negative: String,
  action: Number
});

module.exports = mongoose.model('Chat', ChatSchema);
