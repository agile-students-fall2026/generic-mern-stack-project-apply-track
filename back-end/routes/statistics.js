/*
 * /api/statistics: the numbers on the Stats screen.
 * Owner: Ryan (#77)
 */
import { Router } from 'express'
import { notImplemented } from '../middleware/errors.js'

const router = Router()

/**
 * GET /api/statistics  (#77, front-end: getStatistics)
 * Counts active (not archived) applications.
 * 200 -> { totalApplied, active, interviews, offers, rejections, responseRate, countByStatus }
 */
router.get('/', notImplemented)

export default router
