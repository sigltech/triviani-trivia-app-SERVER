
const express = require("express");
const router = express.Router();

const User = require("../models/User");


//////////////////////////////////

async function indexUsers(req, res) {
    try {
        const users = await User.all
        res.status(200).json(users)
    } catch (err) {
        res.status(500).send(err)
    }
}
module.exports = { indexUsers }
