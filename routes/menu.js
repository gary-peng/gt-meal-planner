const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu-controller')

router.route('/nav').get((req, res) => {
    menuController.getMenu(req, res, 'NorthAve');
});

router.route('/brittain').get((req, res) => {
    menuController.getMenu(req, res, 'Brittain');
});

module.exports = router;