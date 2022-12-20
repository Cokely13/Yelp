require("dotenv").config()
const express = require("express")
const db = require("./db/index")
const morgan = require("morgan")
const app = express()

app.use(morgan("dev"))

app.use(express.json())

//get all restaurants
app.get("/home", async (req, res) => {
  try{
    const results = await db.query('select * from places')
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        restaurants: results.rows
      },
    });
  } catch (err){
    console.log(err)
  }}


  )

app.get("/home/:id", async (req, res) => {
 try{
 const results = await db.query("select * from places where id= $1", [req.params.id])
 res.status(200).json({
  status: "sucess",
  data: {
    restaurants: results.rows[0]
  },
});
} catch (err){
console.log(err)
}}


)

app.post("/home", async (req, res) => {
  try{
    const results = await db.query("INSERT INTO PLACES (name, location, pricerange) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.pricerange])
    console.log("RES", results)
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
     })

  } catch (err){
    console.log(err)
  }
})

app.delete("/home/:id", async (req, res) => {
  try{
    const results = await db.query("DELETE from places where id= $1", [req.params.id])
    res.status(204).json({
      status: "deleted"})
   } catch (err){
   console.log(err)
   }}
  )



 app.put("/home/:id", async(req, res) => {
  try{
    const results = await db.query("UPDATE places SET name = $1, location = $2, pricerange = $3 where id = $4 returning *;", [req.body.name, req.body.location, req.body.pricerange, req.params.id])
    console.log(results)
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
     })

  } catch (err){
    console.log(err)
  }

 })


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`)
})
