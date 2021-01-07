const express = require('express');
const router = express.Router();
const { getMenu } = require('../controllers/menu-controller')

const dummyData = [
    {
        name: "rice",
        calorie: 69,
        restrictions: ['locallygrown']
    },
    {
        name: "chicken",
        calorie: 420,
        restrictions: ['vegan', 'vegetarian']
    }
];

// router.route('/nav').get((req, res) => getMenu(req, res, 'NorthAve'));
router.route('/nav').get((req, res) => res.json(dummyData));

router.route('/brittain').get((req, res) => getMenu(req, res, 'Brittain'));

module.exports = router;