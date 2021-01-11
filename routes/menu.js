const express = require('express');
const router = express.Router();
const getMenu = require('../controllers/menu-controller')

router.route('/nav').get((req, res) => getMenu(req, res, 'NorthAve'));
router.route('/brittain').get((req, res) => getMenu(req, res, 'Brittain'));

module.exports = router;