import asyncHandler from 'express-async-handler'
import PollingResults from '../models/pollingResultsModel.js'




// @desc    Create new PollingResult
// @route   POST /api/orders
// @access  Private
const addPollingResults = asyncHandler(async (req, res) => {
    const {
      pollingStationName,
      presidentialResult,
      paliamentaryResult,
      // image,
      comment,
      totalResults,
    } = req.body
  
    if (pollingStationName && pollingStationName.length === 0) {
      res.status(400)
      throw new Error('No Polling Station')
      return
    } else {
      const pollingResults = new PollingResults({
        pollingStationName,
        user: req.user._id,
        presidentialResult,
        paliamentaryResult,
        // image,
        comment,
        totalResults,
      })
  
      const createdResults = await pollingResults.save()
  
      res.status(201).json(createdResults)
    }
  })


// @desc    Get order by ID 
// @route   GET /api/orders/:id
// @access  Private
const getPollingRecordsById= asyncHandler(async (req, res) => {
  const pollingresults = await PollingResults.findById(req.params.id).populate(
    'user',
    'name phone',
  )
      if(pollingresults){
          res.json(pollingresults)
      }else{
        res.status(404)
        throw new Error('Polling Result not found')
      }
  
})

 

// @desc    Get all Results
// @route   GET /api/results
// @access  Private/Admin

const getPollingResults = asyncHandler(async (req, res) => {
  const pollingresults = await PollingResults.find({}).populate('user','id name phone')
  res.json(pollingresults)
})

export {
    addPollingResults,
    getPollingRecordsById,
    getPollingResults,
}
