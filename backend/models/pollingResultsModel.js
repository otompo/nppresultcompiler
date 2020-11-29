import mongoose from 'mongoose'

const recordsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    pollingStationName: {    
        type: String, 
        required: true 
    },

    presidentialResult: {
      type: Number,
      required: true,
    },

    paliamentaryResult: {
      type: Number,
      required: true,
    },

    // image:{
    //     type:String,
    //     required:true
    // },
    comment:{
        type:String,
        required:false
    },

    totalResults: {
      type: Number,
      required: true,
      default: 0.0,
    },
    
  submitedAt: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
)

const PollingResult = mongoose.model('PollingResult', recordsSchema)

export default PollingResult
