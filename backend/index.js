const express = require("express")
const app = express()
const cors = require("cors");
const UserRouter = require("./Routes/UserRouter");
const ProductRouter = require("./Routes/ProductRouter");

require("dotenv").config()
require("./Models/db");

const PORT = process.env.PORT || 8083

app.use(cors());
app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/product", ProductRouter);

app.get("/",(req, res) => {
    res.send("hello")
})




app.listen(PORT, () => {
    console.log("app is running at this port = ", PORT);
})
