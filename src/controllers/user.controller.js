
const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.get("/", async (req,res)=>{

    const page = + req.query.page || 1;
    const size = + req.query.limit || 10;
    
    const offset = (page - 1)*size; // (1-1)*10 = 0 // size=10
    
    const users = await User.find({ gender: {$eq : "Male"}})
       .skip(offset)
       .limit(size)
       .lean()
       .exec();
     
    const totalPages = Math.ceil(
     (await User.find({gender: {$eq: "Male"}})
       .countDocuments()
       .lean()
       .exec())/size
    );

    // console.log(totalPages);
    return res.status(200).json({data: {users, totalPages}});
})

module.exports = router;

// Page 1 and Size 10 => first 10 users
// Page 2 and size 10 => Users from 11 to 20