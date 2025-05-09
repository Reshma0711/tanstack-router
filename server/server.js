const express=require("express");
const app= express();
const dotenv=require("dotenv").config()
const paymentRouter=require("./routes/payment");
const cartRouter=require("./routes/cart")
const { dbConnect } = require("./config/dbConnect");
const port=process.env.PORT
dbConnect();
app.use(express.json());
app.use("/",paymentRouter)
app.use("/",cartRouter)
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})