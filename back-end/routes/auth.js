/*
 * /api/auth: sign up, log in, log out and password reset. Public: no login needed.
 * Owner: Kumneger (#6, #11, #58)
 */
import { Router } from 'express'
import { notImplemented } from '../middleware/errors.js'

const router = Router()

/**
 * POST /api/auth/signup  (#8, #9, #10, front-end: signUp)
 * Body: { fullName, email, password }
 * 201 -> the new user (never include the password). 400 invalid input, 409 email already used.
 */
router.post('/signup', notImplemented)

/**
 * POST /api/auth/login  (#13, front-end: logIn)
 * Body: { email, password }
 * 200 -> the user. 401 wrong email or password.
 */
router.post('/login', notImplemented)

/**
 * POST /api/auth/logout  (#14, front-end: logOut)
 * 200 -> { ok: true }
 */
router.post('/logout', notImplemented)

/**
 * POST /api/auth/forgot-password  (#61, front-end: requestPasswordReset)
 * Body: { email }
 * 200 -> { ok: true } whether or not the email has an account (don't reveal which emails exist).
 */
router.post('/forgot-password', notImplemented)

/**
 * POST /api/auth/reset-password  (#61, front-end: resetPassword)
 * Body: { token, newPassword }
 * 200 -> { ok: true }. 400 the reset link is invalid or expired.
 */
router.post('/reset-password', notImplemented)

export default router
