const { News, validate } = require("../models/newsModel");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var cors = require("cors");

router.options("*", cors());

router.get("/", async (req, res) => {
  const news = await News.find().sort({ date: -1 });
  res.header("access-control-allow-origin", "*").send(news);
});

// router.get("/:id", (req, res) => {
//   const requestedNews = news.find((n) => n.id === parseInt(req.params.id));
//   if (!requestedNews)
//     return res.status(404).send("La news possédant cet id n'a pas été trouvée");
//   res.send(requestedNews);
// });

router.post("/", cors(), async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.detail[0].message);

  let createdNews = new News({
    title: req.body.title,
    text: req.body.content,
  });
  createdNews = await createdNews.save();
  res.send(createdNews);
});

router.put("/:id", cors(), async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.detail[0].message);

  const news = await News.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title, text: req.body.content },
    {
      new: true,
    }
  );

  if (!news)
    return res.status(404).send("La news possédant cet id n'a pas été trouvée");

  res.send(news);
});

router.delete("/:id", cors(), async (req, res) => {
  const news = await News.findByIdAndRemove(req.params.id);

  if (!news)
    return res.status(404).send("La news possédant cet id n'a pas été trouvée");

  res.send(news);
});

module.exports = router;
