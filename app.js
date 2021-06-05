import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js'


let app=express()
const PORT = 5000
app.use(bodyParser.json())
app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))


app.use('/users',userRoutes)
app.get("/",(req,res)=>res.send("Hello from Homepage"))
