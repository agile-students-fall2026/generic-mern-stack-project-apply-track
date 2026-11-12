/*
 * /api/events: deadlines, interviews and follow-ups shown on the Upcoming screen.
 * Owner: Ryan (#74, #76)
 *
 * The data is db.events in data/store.js; see data/events.json for every field.
 */
import { Router } from 'express'
import { notImplemented } from '../middleware/errors.js'

const router = Router()

/**
 * GET /api/events  (#76, front-end: getEvents)
 * Query: ?applicationId=app-1 for only one application's events
 * 200 -> array of events, soonest first (sort by date, then time)
 */
router.get('/', notImplemented)

/**
 * GET /api/events/:id  (#74, front-end: getEvent)
 * 200 -> the event. 404 not found.
 */
router.get('/:id', notImplemented)

/**
 * POST /api/events  (#74, front-end: createEvent)
 * Body: { applicationId, type, title, date, time, notes, reminder }
 * 201 -> the new event. 400 title or date missing.
 */
router.post('/', notImplemented)

/**
 * PATCH /api/events/:id  (#74, front-end: updateEvent)
 * 200 -> the updated event. 404 not found.
 */
router.patch('/:id', notImplemented)

/**
 * DELETE /api/events/:id  (#74, front-end: deleteEvent)
 * Also removes the matching interview round, like the front-end mockApi.js does.
 * 200 -> { ok: true }. 404 not found.
 */
router.delete('/:id', notImplemented)

export default router
