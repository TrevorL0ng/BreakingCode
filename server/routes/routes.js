const router = require('express').Router();
const Cards = require('../models/Card');

router.get("/api/cards", async (req, res) => {
    const cards = await Cards.find({});
    res.json(cards);
});

module.exports = router;