require("dotenv").config()
const express = require("express")
const db = require("./db/index")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

app.use(morgan("dev"))

app.use(cors())
app.use(express.json())

//get all restaurants
app.get("/home", async (req, res) => {
  try{
    // const results = await db.query('select * from places')
    const placeRatingData = await db.query('select * from places left join (select place_id, COUNT(*), trunc(AVG(RATING), 1) as average_rating from reviews group by place_id) reviews on place_id = reviews.place_id')

    res.status(200).json({
      status: "sucess",
      results: placeRatingData.rows.length,
      data: {
        restaurants: placeRatingData.rows
      },
    });
  } catch (err){
    console.log(err)
  }}


  )

app.get("/home/:id", async (req, res) => {
 try{
 const places = await db.query('select * from places left join (select place_id, COUNT(*), trunc(AVG(RATING), 1) as average_rating from reviews group by place_id) reviews on place_id = reviews.place_id where id = $1',[req.params.id]);
 const reviews = await db.query("select * from reviews where place_id= $1", [req.params.id]);
 res.status(200).json({
  status: "sucess",
  data: {
    restaurants: places.rows[0],
    reviews:reviews.rows
  },
});
} catch (err){
console.log(err)
}}


)

app.post("/home", async (req, res) => {
  try{
    const results = await db.query("INSERT INTO PLACES (name, location, pricerange) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.pricerange])
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

 app.post("/home/:id/addReview", async (req, res) => {
  try{
    const newReview = await db.query("INSERT INTO reviews (place_id, name, review, rating) values ($1, $2, $3, $4) returning *", [req.params.id, req.body.name, req.body.review, req.body.rating])
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0]
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
