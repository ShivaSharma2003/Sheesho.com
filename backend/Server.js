const express = require("express");
const app = express();
const dotenv = require("dotenv");
const DatabaseConnection = require('./Database/Database');
const ProductRoutes = require('./Routes/ProductRoute');
const UserRoute = require('./Routes/UserRoute')
const cors = require('cors');

// .env config
dotenv.config();
DatabaseConnection()

// middlewares
app.use(express.json())
app.use(cors())

// Routes
app.use('/v1/products' , ProductRoutes)
app.use('/v1/user' , UserRoute)

app.get("/", (req, res) => {
  res.status(200);
});

app.listen(process.env.PORT , () => {
  console.log(`listening on http://localhost:${process.env.PORT}`);
});
