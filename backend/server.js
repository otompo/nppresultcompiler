
import path from 'path'
import express  from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import pollingResultsRoutes from './routes/pollingResultsRoutes.js'



dotenv.config()
connectDB()

const app=express()

if (process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())

// app.get('/', (req, res)=>{
//     res.send('API is running......')
// })


app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/results', pollingResultsRoutes)
app.use('/api/myresults', pollingResultsRoutes)
app.get('/api/config/paypal', (req,res)=> 
    res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname, '/client/build')))
    app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html')))
}else{
   
app.get('/', (req, res)=>{
    res.send('API is running......')
})

}

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))