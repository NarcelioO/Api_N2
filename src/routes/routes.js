import express from 'express'
const router = express.Router()

import alerts from './Alerts.js'
import users from './Users.js'

router.use('/alerts', alerts)
router.use('/users', users)

export default router