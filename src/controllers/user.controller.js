const { json } = require("express");

const create = ( req, res ) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({message:"Submmit All Fields For Registration"})
    }
    res.status(201).send({
        
        message: "user Created Sucessfully",

        user: {
            name,
            username,
            email,
            avatar,
            background
        }
    });
};

module.exports = { create }