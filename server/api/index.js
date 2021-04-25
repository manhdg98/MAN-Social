const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth')
const auth = require('./auth')
const users = require('./users')

router.use('/auth', auth)
router.use('/users', authMiddleware, users)

module.exports = router
