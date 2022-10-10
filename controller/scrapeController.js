const axios = require("axios");
const cheerio = require("cheerio");
const res = require("express/lib/response");
const pretty = require("pretty");
const Product = require('../Model/Product');

exports.scrape = async (req,res) => {
  const product = req.body.product
  const url = `https://gjirafa50.com/?rel=2&q=${product}&dispatch=products.search&security_hash=687aad94c3239f0e833d07863427a42a`;
  
  const { data } = axios.get(url);
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const listItems = $(".ty-grid-list__item-details");

      const products = [];

      listItems.each((index, element) => {
        if(index == 1) {
            console.log('elementi : ' + index);
            console.log(element.children('div'));
            console.log('elementi : ' + index);
            console.log($(element).children('div'));
        }
      })

      const query = {
          name: 'tastiere'
      }
      const update = {
        price: Number,
        created_at: new Date(),
        updated_at: new Date(),
      }
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };

      // Find the document
      Model.findOneAndUpdate(query, update, options, function(error, result) {
          if (error) return;
          // do something with the document
      });

      res.json({'name' : 'dardan'});
    } catch (err) {
      res.json(err);
    }
}