/*
 * Error handling for every route.
 *
 * In a route, stop with an error by throwing one:
 *   throw httpError(404, 'Application not found')
 * Express 5 catches it (async routes too) and errorHandler below sends:
 *   404  { "error": "Application not found" }
 * The front-end shows that message to the user, so write it for a person, not a developer.
 */

/** An Error that carries the HTTP status code to respond with (400 bad input, 404 not found, ...). */
export function httpError(status, message) {
  const error = new Error(message)
  error.status = status
  return error
}

/** Runs when no route matched the request. */
export function notFound(req, res, next) {
  next(httpError(404, `No route for ${req.method} ${req.originalUrl}`))
}

/** Placeholder for a route that isn't built yet. Replace it with the real handler. */
export function notImplemented(req, res) {
  res.status(501).json({ error: `${req.method} ${req.originalUrl} isn't built yet` })
}

/** Express knows this is the error handler because it takes 4 arguments (keep `next` even though it's unused). */
export function errorHandler(error, req, res, next) {
  const status = error.status || 500
  // Unexpected errors are bugs: log the details in the terminal, but don't show them to the user.
  if (status >= 500) console.error(error)
  res.status(status).json({ error: status >= 500 ? 'Something went wrong on the server' : error.message })
}
