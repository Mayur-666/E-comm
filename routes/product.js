const router = require("express").Router();
//const api = process.env.api_url;
// getting details of data from database
const product = require("../model/product");

router.get("/", (req, res) => {
  res.send("hello Itish");
});
router.get(`/api/product`, async (req, res) => {
  const productList = await product.find();
  if (!productList) {
    res.status(500).json({
      success: false,
    });
  }
  res.send(productList);
});

//sending values from user to data base
router.post(`/api/product`, (req, res) => {
  const newproduct = new product({
    // sending data from frontend to the model
    name: req.body.name,
    image: req.body.image,
    countInNumber: req.body.count,
    price: req.body.price,
  });
  //saving details of model
  newproduct
    .save()
    .then((createdproduct) => {
      res.status(201).json(createdproduct);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});
module.exports = router;
