/*
 * /api/users/me: the logged-in user's account and settings. req.user is the logged-in user.
 * Owners: Kumneger (#36) for the account, Ryan (#75) for notification settings
 */
import { Router } from 'express'
import { notImplemented } from '../middleware/errors.js'

const router = Router()

/**
 * GET /api/users/me  (#36, front-end: getCurrentUser)
 * 200 -> the user (never include the password)
 */
router.get('/me', notImplemented)

/**
 * PATCH /api/users/me  (#37, front-end: updateCurrentUser)
 * Body: any of { fullName, email, avatarUrl }
 * 200 -> the updated user. 400 invalid input, 409 email already used by another account.
 */
router.patch('/me', notImplemented)

/**
 * PATCH /api/users/me/password  (#37, front-end: changePassword)
 * Body: { currentPassword, newPassword }
 * 200 -> { ok: true }. 400 current password is wrong or the new one is too short.
 */
router.patch('/me/password', notImplemented)

/**
 * DELETE /api/users/me  (#38, front-end: deleteAccount)
 * Removes the account and logs the user out.
 * 200 -> { ok: true }
 */
router.delete('/me', notImplemented)

/**
 * GET /api/users/me/notification-settings  (#75, front-end: getNotificationSettings)
 * 200 -> { deadlineReminders, interviewReminders, followUpReminders, defaultReminder }
 */
router.get('/me/notification-settings', notImplemented)

/**
 * PATCH /api/users/me/notification-settings  (#75, front-end: updateNotificationSettings)
 * Body: any of the settings above
 * 200 -> all the settings after the change
 */
router.patch('/me/notification-settings', notImplemented)

export default router
