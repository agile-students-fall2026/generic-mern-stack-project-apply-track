// Starts the server. All the routes and settings live in app.js; this file only listens on a port.
// Kept separate so the tests can use app.js without starting a real server.
import 'dotenv/config' // loads the settings in .env into process.env
import app from './app.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`ApplyTrack back-end running at http://localhost:${PORT}`)
})
