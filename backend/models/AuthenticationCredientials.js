const mongoose = require('mongoose');

const AuthenticationCredentialsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  hash: { type: String, required: true }
});

module.exports = mongoose.model('AuthenticationCredentials', AuthenticationCredentialsSchema);
