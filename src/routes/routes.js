import express from 'express'
const router = express.Router()

import alerts from './Alerts.js'
import users from './Users.js'
import procedures from './Procedures.js'

router.use('/alerts', alerts)
router.use('/users', users)
router.use('/procedures', procedures)

export default router