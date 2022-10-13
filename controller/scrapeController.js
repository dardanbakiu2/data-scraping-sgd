const axios = require("axios");
const cheerio = require("cheerio");
const Product = require('../Model/Product');

exports.scrape = async (req,res) => {
  res.json({ msg: 'hello world!'});
}