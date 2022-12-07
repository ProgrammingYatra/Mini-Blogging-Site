//__________________________ Import : Necessary Package and Modules ___________________________________________
require("dotenv").config()
const express = require("express");
const route=require('./routes/route')
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
app.use(express.json());

//__________________________ Connection : MongoDB Cluster ___________________________________________
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

app.use("/",route)

//__________________________ Listen : Port ___________________________________________

app.listen(port, (req, res) => {
  console.log(`Express is Running on ${port}`);
});
