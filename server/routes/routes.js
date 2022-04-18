const express = require('express');

const router = express.Router();
const Cards = require('../models/Card');

// Routes
router.get("/api/cards", async (req, res) => {

    const cards = await Cards.find({});
    res.json(cards);
});

module.exports = router;