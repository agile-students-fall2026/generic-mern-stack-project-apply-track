/*
 * Runs before every private route (see app.js) and sets req.user to the logged-in user.
 *
 * TEMPORARY: until login is built (tasks #13 and #19), every request is treated as the demo user,
 * Alex Morgan, so everyone can build and test their routes now. Use req.user in your routes and
 * they'll keep working when the real login check replaces the body of this function.
 */
import { db } from '../data/store.js'
import { httpError } from './errors.js'

export function requireAuth(req, res, next) {
  const user = db.users[0]
  if (!user) return next(httpError(401, 'Please log in to continue'))
  req.user = user
  next()
}
