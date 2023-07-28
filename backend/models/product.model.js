const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: [String],
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = { productModel };
