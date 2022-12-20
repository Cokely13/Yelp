require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(morgan("dev"))

app.use(express.json())

//get all restaurants
app.get("/home", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      restaurant: ["mcdonalds", "wendys"]
    }
  }
  )
})

app.get("/home/:id", (req, res) => {
 console.log(req.params)
 res.status(200).json({
  status: "success",
  data: {
    restaurant: "Sams"
  }
 })
})

app.post("/home", (req, res) => {
  console.log(req.body)
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "Sams"
    }
   })
})

app.delete("/home/:id", (req, res) => {
  res.status(204).json({
    status: "deleted"
  })
 })


 app.put("/home/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body)
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "Sams"
    }
   })
 })


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`)
})
