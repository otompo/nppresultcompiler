import express from 'express'

import {
    addPollingResults,
    getPollingRecordsById,
    getPollingResults,
    getMyResults
} from '../controllers/pollingResultsController.js'
import {protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addPollingResults).get(protect,admin, getPollingResults)
router.route('/:id').get(protect, getPollingRecordsById)
router.route('/myresults').get(protect, getMyResults)

export default router

 