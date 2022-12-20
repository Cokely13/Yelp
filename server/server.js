require("dotenv").config()
const express = require("express")



const app = express()

app.use((req, res, next) => {
  console.log("our middleware ran")
  next()
})

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

})

app.post("/home", (req, res) => {
  console.log(req)

 })


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`)
})
