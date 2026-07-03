const router = require("express").Router();

const {
  getReviews,
} = require("../controllers/reviewController");

router.get("/", getReviews);

module.exports = router;