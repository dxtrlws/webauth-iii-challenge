const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')

function generateToken(user) {
    return jwt.sign({
        userId: user.id
    }, 'Super Secret')
}


router.post('/register', async (req, res) => {
    try {
        let user = req.body
        const hash = await bcrypt.hashSync(user.password, 10);
        user.password = hash
        const token = await generateToken(user)
        const newUser = await Users.add(user)
        res.status(201).json({ message: `Welcome ${newUser.username}`, authToken: token})
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try{
        const {username, password} = req.body
        const user = await Users.findBy({username})
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({message: `Welcome ${user.username}`, authToken: token})
        } else {
            res.status(401).json({ message: `Invalid Credentials`})
        }
    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = router