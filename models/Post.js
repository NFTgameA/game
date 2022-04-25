const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    require: true,
  },
  image: String,

  rarity: String,
  efficiency: String,
  durability: String,
  luck: String,
  rate: String,
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Posts", PostSchema);
