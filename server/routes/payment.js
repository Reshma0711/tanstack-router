const express=require("express");
const { verifyToken } = require("../middleware/auth");
const { createOrder, verifyCapture } = require("../controllers/payment");

const router=express.Router()



router.post("/create-order",verifyToken,createOrder);

router.post("/verify-capture",verifyCapture);

module.exports=router