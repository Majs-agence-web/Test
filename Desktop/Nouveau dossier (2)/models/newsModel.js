const mongoose = require("mongoose");
const Joi = require("joi");

const News = mongoose.model(
  "News",
  new mongoose.Schema({
    title: { type: String, required: true },
    text: String,
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
  })
);

function validateNews(news) {
  const schema = {
    title: Joi.string().min(3).required(),
  };

  return Joi.validate(news, schema);
}

exports.News = News;
exports.validate = validateNews;
