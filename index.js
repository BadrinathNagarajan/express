import express from 'express'
import Approutes from './routes.js'
const app = express()
const port = 8000

// app.get('/',(req,res)=>{
//     res.send('<h1>Welcome to the Express and CRUD APP</h1>')
// })
app.use(express.json())
app.use(Approutes)

app.listen(port,()=>{console.log(`App listens to the Port ${port}`)})