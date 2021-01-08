const express = require('express');
const router = express.Router();
const getMenu = require('../controllers/menu-controller')

const dummyDataNav = [
    {
        name: "rice",
        calorie: 10,
        restrictions: ['locallygrown']
    },
    {
        name: "chicken",
        calorie: 20,
        restrictions: ['vegan', 'vegetarian']
    },
    {
        name: "cheese",
        calorie: 30,
        restrictions: ['vegan', 'milk']
    }
];

const dummyDataBritt = [
    {
        name: "noodle",
        calorie: 40,
        restrictions: ['locallygrown', 'gluten']
    },
    {
        name: "beef",
        calorie: 50,
        restrictions: ['vegan', 'vegetarian']
    },
    {
        name: "cookie",
        calorie: 60,
        restrictions: ['vegan', 'peanuts']
    }
];

// router.route('/nav').get((req, res) => getMenu(req, res, 'NorthAve'));
router.route('/nav').get((req, res) => res.json(dummyDataNav));

// router.route('/brittain').get((req, res) => getMenu(req, res, 'Brittain'));
router.route('/brittain').get((req, res) => res.json(dummyDataBritt));

module.exports = router;