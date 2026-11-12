/*
 * GET /api/health: answers "is the server running?". Also a complete small example of a router.
 */
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() })
})

export default router
