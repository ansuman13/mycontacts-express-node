const express = require("express")
const router = express.Router();

router.route("/").get((req, res) => {
    // res.status(200).json({message:"Get all contacts"});
    res.download('ansuman.txt')
});

module.exports = router;