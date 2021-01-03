const express = require("express");
const router = express.Router();

const Numberset = require("../models/numberset");

const { check, validationResult } = require("express-validator");
//@route  POST api/numbers
//@desc   post the numbers to database and return sum
router.post(
  "/",
  [
    check(
      "n1",
      "Number not recognized. Please enter a valid number"
    ).isNumeric(),
    check(
      "n2",
      "Number not recognized. Please enter a valid number"
    ).isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // console.log(req.body);
    if (!errors.isEmpty()) {
      // console.log(errors);
      return res.status(400).send(errors.errors[0].msg);
    }

    const { n1, n2 } = req.body;
    var int1 = parseFloat(n1);
    var int2 = parseFloat(n2);
    try {
      var sum = int1 + int2;
      var numberset = new Numberset({ n1, n2, sum });
      await numberset.save();
      res.send("The sum is:" + sum);
    } catch (err) {
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;
