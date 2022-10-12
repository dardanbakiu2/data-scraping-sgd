const express = require('express')
const router = express.Router()
const mainController = require('./controller/mainController')
const scrapeController = require('./controller/scrapeController')

router.get('/test', mainController.info);
router.get('/categories', mainController.categories)
router.get('/products', mainController.products)
router.post('/scrape', scrapeController.scrape)

module.exports = router;
