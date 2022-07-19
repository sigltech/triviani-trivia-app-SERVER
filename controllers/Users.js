
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

async function create(req, res) {
    try {
        // const user = await User.create;
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(422).json({ err })
    }
}

module.exports = { indexUsers, create }
