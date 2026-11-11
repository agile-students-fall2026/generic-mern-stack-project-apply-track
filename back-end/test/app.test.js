/*
 * Tests for the shared setup in app.js: the health check, the static route, unknown routes,
 * placeholder routes and bad JSON. Copy this file's pattern for your own routes.
 */
import { expect, use } from 'chai'
import chaiHttp, { request } from 'chai-http'
import express from 'express'
import app from '../app.js'
import { notImplemented } from '../middleware/errors.js'

use(chaiHttp)

describe('App setup', () => {
  describe('GET /api/health', () => {
    it('responds that the server is running', async () => {
      const res = await request.execute(app).get('/api/health')
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body.status).to.equal('ok')
    })
  })

  describe('GET /static/...', () => {
    it('serves files from the public folder', async () => {
      const res = await request.execute(app).get('/static/images/logo.svg')
      expect(res).to.have.status(200)
      expect(res).to.have.header('content-type', /svg/)
    })

    it('responds 404 for a file that does not exist', async () => {
      const res = await request.execute(app).get('/static/images/missing.png')
      expect(res).to.have.status(404)
    })
  })

  describe('unknown routes', () => {
    it('responds 404 with an error message', async () => {
      const res = await request.execute(app).get('/api/not-a-real-route')
      expect(res).to.have.status(404)
      expect(res.body.error).to.include('/api/not-a-real-route')
    })
  })

  describe('routes that are not built yet', () => {
    it('respond 501 with an error message', async () => {
      // A tiny app just for this test, so it keeps passing after every real route is built.
      const testApp = express()
      testApp.get('/placeholder', notImplemented)
      const res = await request.execute(testApp).get('/placeholder')
      expect(res).to.have.status(501)
      expect(res.body.error).to.be.a('string')
    })
  })

  describe('invalid JSON in a request body', () => {
    it('responds 400 instead of crashing', async () => {
      const res = await request
        .execute(app)
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send('{ not json')
      expect(res).to.have.status(400)
      expect(res.body.error).to.be.a('string')
    })
  })
})
