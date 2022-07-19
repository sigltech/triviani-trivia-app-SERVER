
const express = require('express');
const router = express.Router();
const userController = require('../controllers/Users')

router.get('/', userController.indexUsers)
router.post('/', userController.create);


module.exports = router;
