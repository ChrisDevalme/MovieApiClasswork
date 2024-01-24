const express = require('express')
const router = express.Router()
const performerCrtl = require('../controllers/performerRouter.js')

router.get('/', performerCrtl.index)
router.post('/', performerCrtl.create)

module.exports = performerCrtl