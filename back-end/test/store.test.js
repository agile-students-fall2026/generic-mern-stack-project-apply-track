/*
 * Tests for the in-memory mock data in data/store.js.
 */
import { expect } from 'chai'
import { db, newId, resetStore, todayString } from '../data/store.js'

describe('data/store.js', () => {
  it('loads the starting data from the JSON files', () => {
    expect(db.users).to.have.length.above(0)
    expect(db.applications).to.have.length.above(0)
    expect(db.events).to.have.length.above(0)
  })

  it('resetStore() undoes changes', () => {
    const count = db.applications.length
    db.applications.pop()
    resetStore()
    expect(db.applications).to.have.length(count)
  })

  it('newId() adds the prefix and makes a different id each time', () => {
    const first = newId('app')
    expect(first).to.match(/^app-[0-9a-f]{8}$/)
    expect(newId('app')).to.not.equal(first)
  })

  it('todayString() returns the date as YYYY-MM-DD', () => {
    expect(todayString()).to.match(/^\d{4}-\d{2}-\d{2}$/)
  })
})
