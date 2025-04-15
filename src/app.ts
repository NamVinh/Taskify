import express, { Application } from "express"
import dotenv from "dotenv"

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 3000

app.use(express.json()) // Parse JSON body

app.get("/", (req, res) => {
  res.send("Taskify API is running!")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
