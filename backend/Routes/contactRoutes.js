const router = require("express").Router();

const {
  sendMail,
} = require("../controllers/contactController");

router.post("/", sendMail);

module.exports = router;