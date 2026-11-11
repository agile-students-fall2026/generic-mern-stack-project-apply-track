/*
 * /api/export: download your applications as a file.
 * Owner: Bertin (#78)
 */
import { Router } from 'express'
import { notImplemented } from '../middleware/errors.js'

const router = Router()

/**
 * GET /api/export?format=csv&includeArchived=true  (#78, front-end: exportApplications)
 * format is "csv" or "pdf". Send the file itself, e.g. for CSV:
 *   res.attachment('applytrack-applications-2026-11-11.csv').type('text/csv').send(csvText)
 * The CSV and PDF builders are in the front-end mockApi.js (buildCsv, buildPdf) and utils/pdf.js.
 */
router.get('/', notImplemented)

export default router
