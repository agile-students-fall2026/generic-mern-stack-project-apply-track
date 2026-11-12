/*
 * The real back-end: each function here calls our Express server.
 *
 * Every function has the same name, arguments and return value as the one in mockApi.js, so pages
 * don't change. When your back-end route works, add its function here and the app starts using it
 * instead of the mock version (see index.js). For example:
 *
 *   getStatistics: () => request('GET', '/statistics'),
 *   getApplication: (id) => request('GET', `/applications/${id}`),
 *   createApplication: (fields) => request('POST', '/applications', fields),
 *
 * In development, Vite forwards /api requests to the back-end (see vite.config.js).
 */

/**
 * Send a request to the back-end and return the JSON it responds with.
 * If the server responds with an error, this throws an Error with the server's message,
 * so pages can show it the same way they show mock errors.
 */
async function request(method, path, body) {
  const options = { method }
  if (body !== undefined) {
    options.headers = { 'Content-Type': 'application/json' }
    options.body = JSON.stringify(body)
  }

  const unreachable = new Error("Couldn't reach the server. Check that the back-end is running.")
  let response
  try {
    response = await fetch(`/api${path}`, options)
  } catch {
    throw unreachable
  }

  const data = await response.json().catch(() => null)
  if (!response.ok) {
    if (data?.error) throw new Error(data.error)
    // Our server always explains its errors, so an empty 5xx means it couldn't be reached (e.g. it isn't running).
    if (response.status >= 500) throw unreachable
    throw new Error(`Request failed (${response.status})`)
  }
  return data
}

export const httpApi = {
  // is the server running? (a working example; no page uses it)
  checkHealth: () => request('GET', '/health'),
}
