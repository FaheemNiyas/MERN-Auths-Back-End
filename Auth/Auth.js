const express = require('express');
const router = express.Router();
const UserSchema = require('../Models/user');

router.post('/signup', async (req, res) => {
    console.log(req.body);
    try {
        const existingUser = await UserSchema.findOne({ Email: req.body.Email })

        if (existingUser) {
            return res.status(400).json("This user is alredy exist");
        }

        const postData = await new UserSchema({
            Name: req.body.Name,
            Email: req.body.Email,
            Password: req.body.Password,
        });

        const postUser = await postData.save();
        if (postUser) {
            return res.status(200).json("Registration Success !")
        }

    } catch (error) {
        res.status(400).json({ message: " account Created failed", error })
    }
})

router.post("/signin", async (req, res) => {
    try {
        const validData = await UserSchema.findOne({ Email: req.body.Email });
        if (!validData) {
            return res.status(400).json("Invalid Email");
        }

        const Password = validData.Password
        const validPass = await Password.match(req.body.Password)
        if (validPass) {
            return res.status(200).json('Login Success !');
        }

    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router 