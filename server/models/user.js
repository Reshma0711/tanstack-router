const mongoose = require("mongoose");

// Define a schema for the User collection
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// userSchema.index({
//   email: 1,
// });
// Create a User model based on the schema
const User = mongoose.model("users", userSchema);

module.exports = User;
