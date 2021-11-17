import express from 'express'

const PORT = 5500;
const app = express()

// app.use(express.json())

app.get('/',(req,res) => {
    // console.log(req.body)
    res.status(200).json('body123')
})

app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))