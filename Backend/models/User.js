const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    // Optional future enhancement
    // password: {
    //   type: String,
    //   required: true,
    //   minlength: 6,
    //   select: false // don't return password field by default
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
