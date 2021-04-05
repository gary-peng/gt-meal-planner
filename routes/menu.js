const express = require("express");
const router = express.Router();
const getMenu = require("./menu-controller");

router.route("/nav/breakfast").get((req, res) => getMenu(req, res, "breakfast"));
router.route("/nav/lunch").get((req, res) => getMenu(req, res, "lunch"));
router.route("/nav/dinner").get((req, res) => getMenu(req, res, "dinner"));
// router.route("/brittain").get((req, res) => getMenu(req, res, "Brittain"));

module.exports = router;