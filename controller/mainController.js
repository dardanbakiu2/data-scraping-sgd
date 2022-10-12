const Product = require('../Model/Product');

exports.info = (req,res) => {
    res.json({info : 'test api'})
}

exports.categories = (req,res) => {
    const categories = [
        {name: 'keyboard'},
        {name: 'mouse'},
        {name: 'earphones'},
        {name: 'headphones'},
        {name: 'keyboard'},
        {name: 'laptop'},
        {name: 'desktop'},
        {name: 'monitor'}   
    ]

    res.json(categories);
}

exports.products = (req,res) => {
    console.log(req.query);
    // const product = req.query.product;
    const product = "Tastierë Dell KB-216, CZ/SK, e zezë"

    Product.find({ name: product}, function (err, docs) {
        // if (err) res.json(err); return;

        console.log('here we are inside queyr : ', docs);
    });
    res.json({name:'ddardan'})
}