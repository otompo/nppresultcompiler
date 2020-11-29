import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc  Auth user & get token 
// @route  POST /api/users/login
// @access  Public
const authUser  = asyncHandler(async(req, res)=>{
   const {phone, password} = req.body
      
   const user = await User.findOne({phone})

   if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
   }else{
        res.status(401)
        throw new Error('Invalid Phone number or Password')
   }
   res.send({phone, password})
}) 

// @desc  Get user profile
// @route  GET /api/users/profile
// @access  Private
const getUserProfile  = asyncHandler(async(req, res)=>{  
     const user = await User.findById(req.user._id)
    if(user){
            res.json({
                _id: user._id,
                name: user.name,
                phone: user.phone,
                isAdmin: user.isAdmin,
                
            })
    }else{
        res.status(404)
        throw new Error('user not found ')
    }
    
 }) 


// @desc  Update user profile
// @route  POSt /api/users/profile/
// @access  Private
const updateUserProfile  = asyncHandler(async(req, res)=>{  
     const user = await User.findById(req.user._id)
    if(user){
           user.name =req.body.name || user.name
           user.phone = req.body.phone || user.phone
            if (req.body.password){
                user.password=req.body.password
            }
            const updatedUser = await user.save()
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                phone: updatedUser.phone,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(updatedUser._id)
                
            })

    }else{
        res.status(404)
        throw new Error('user not found ')
    }
    
 }) 
 

// @desc  Register a new  user  
// @route  POST /api/users
// @access  Public
const registerUser  = asyncHandler(async(req, res)=>{
    const {name, phone, password} = req.body
       
    const userExists = await User.findOne({phone})
 
    if(userExists){
        res.status(400)
        throw new Error('User already exist')
    }
    const user = await User.create({
       name,
       phone,
       password 
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data ')
    }
    
 }) 



// @desc  Get all users
// @route  GET /api/users
// @access  Private
const getUsers  = asyncHandler(async(req, res)=>{  
    const users = await User.find({})
   res.json(users)
   
}) 



// @desc  Get user by id
// @route  GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')
  
    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  


// @desc  Delete user
// @route  DETELE /api/user/:id
// @access  Private
// @access  Private/Admin
const deleteUser  = asyncHandler(async(req, res)=>{  
    const user = await User.findById(req.params.id)
 if(user){
    await user.remove()
    res.json({message:'User removed successfully'})
 }else{
     res.status(404)
     throw new Error('User not found')
 }
   
}) 




// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.phone = req.body.phone || user.phone
      user.isAdmin = req.body.isAdmin
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        phone: updatedUser.phone,
        isAdmin: updatedUser.isAdmin        
        
    })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })



export {
    authUser,
    getUserProfile,
    updateUserProfile,
    registerUser,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
}
