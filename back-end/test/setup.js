/*
 * Runs once before any test file (see .mocharc.json).
 */
import { resetStore } from '../data/store.js'

// Tells app.js not to print a log line for every test request.
process.env.NODE_ENV = 'test'

// Every test starts from the original mock data, so one test's changes can't break another.
export const mochaHooks = {
  beforeEach() {
    resetStore()
  },
}
