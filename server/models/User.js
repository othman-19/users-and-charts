const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    userData: [Number],
  },
);

UserSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

UserSchema.virtual('url').get(function () {
  return `/users/${this._id}`;
});

UserSchema.index({ firstName: 1 });

module.exports = mongoose.model('User', UserSchema);
